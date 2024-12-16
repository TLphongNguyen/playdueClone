const express = require('express');
const { PrismaClient } = require('@prisma/client');
const e = require('express');
const prisma = new PrismaClient();

const createDonate = async (req, res) => {
	const data = req.body;
	try {
		await prisma.donate.create({
			data: {
				customerId: parseInt(data.customerId),
				idDonateTo: parseInt(data.id),
				des: data.des,
				money: parseInt(data.money),
			},
		});
		const updateCustomer = await prisma.customer.update({
			where: { customerId: parseInt(data.customerId) },
			data: {
				money: {
					decrement: parseInt(data.money),
				},
			},
		});
		await prisma.customer.update({
			where: { customerId: parseInt(data.id) },
			data: {
				money: {
					increment: parseInt(data.money),
				},
			},
		});
		console.log(updateCustomer);

		res.json(updateCustomer);
	} catch (err) {
		console.log(err);
	}
};
const getHistoryDonate = async (req, res) => {
	const id = req.params.id;
	console.log(id);

	try {
		const response = await prisma.donate.findMany({
			where: {
				idDonateTo: parseInt(id),
			},
			include: {
				customers: {
					select: {
						fullName: true,
					},
				},
			},
		});
		console.log(response);

		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
module.exports = { createDonate, getHistoryDonate };
