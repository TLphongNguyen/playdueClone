const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRecharge = async (req, res) => {
	const data = req.body;

	try {
		const response = await prisma.recharge.create({
			data: {
				customerId: data.customerId,
				banks: data.banks,
				numberBank: parseInt(data.numberBank),
				amount: parseInt(data.amount),
			},
		});

		const updatedCustomer = await prisma.customer.update({
			where: { customerId: data.customerId },
			data: {
				money: {
					increment: parseInt(data.amount),
				},
			},
		});

		res.json(updatedCustomer);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while creating recharge' });
	}
};
const getSumAmount = async (req, res) => {
	const { id } = req.params;
	try {
		const totalAmount = await prisma.recharge.aggregate({
			_sum: {
				amount: true,
			},
			where: {
				customerId: parseInt(id),
			},
		});
		res.json({
			success: true,
			data: totalAmount._sum.amount || 0, // Nếu không có giá trị, trả về 0
		});
	} catch (err) {
		console.error('Error fetching total recharged amount:', err);
	}
};
module.exports = { createRecharge, getSumAmount };
