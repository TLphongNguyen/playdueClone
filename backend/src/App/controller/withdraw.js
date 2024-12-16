const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createBillWithDraw = async (req, res) => {
	const data = req.body;
	try {
		await prisma.withdrawal.create({
			data: {
				customerId: data.customerId,
				banks: data.banks,
				numberBank: parseInt(data.numberBank),
				amount: parseInt(data.amount),
				status: 1,
			},
		});
		const updatedCustomer = await prisma.customer.update({
			where: { customerId: data.customerId },
			data: {
				money: {
					decrement: parseInt(data.amount),
				},
			},
		});
		res.json(updatedCustomer);
	} catch (err) {
		console.log(err);
	}
};
const updateBillWithStatus = async (req, res) => {
	const data = req.body;
	console.log(data);

	try {
		const response = await prisma.withdrawal.update({
			where: { withdrawalId: parseInt(data.id) },
			data: {
				status: parseInt(data.status),
			},
		});
		if (data.status === 3) {
			await prisma.customer.update({
				where: { customerId: parseInt(data.customerId) },
				data: {
					money: {
						increment: parseInt(data.amount),
					},
				},
			});
		} else {
			res.json(response);
		}
	} catch (err) {
		console.log(err);
	}
};
const getBillWithId = async (req, res) => {
	console.log(req.params);
	const id = req.params.id;
	try {
		const response = await prisma.withdrawal.findMany({
			where: { customerId: parseInt(id) },
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
const getBillWithStatus = async (req, res) => {
	try {
		const response = await prisma.withdrawal.findMany({
			where: { status: 1 },
			include: {
				customer: true,
			},
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
const getBillAll = async (req, res) => {
	try {
		const response = await prisma.withdrawal.findMany({
			include: {
				customer: {
					select: {
						fullName: true,
						avt: true,
					},
				},
			},
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { createBillWithDraw, updateBillWithStatus, getBillWithId, getBillWithStatus, getBillAll };
