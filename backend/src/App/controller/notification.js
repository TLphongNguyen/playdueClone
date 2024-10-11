const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CreateNotification = async (req, res) => {
	const data = req.body;
	try {
		const dataNotification = await prisma.notification.create({
			data: {
				content: data.content,
				ownerId: data.ownerId,
				TypeNotification: {
					connect: {
						typeId: data.typeId,
					},
				},
				customers: {
					connect: {
						customerId: data.customerId,
					},
				},
			},
		});
		res.json(dataNotification);
	} catch (err) {
		console.log(err);
	}
};
const getNotification = async (req, res) => {
	const { typeId, ownerId } = req.params;
	try {
		const response = await prisma.notification.findMany({
			where: {
				typeId: parseInt(typeId),
				ownerId: parseInt(ownerId),
			},
			include: {
				customers: true,
			},
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
module.exports = { CreateNotification, getNotification };
