const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ChatAll = async (req, res) => {
	const data = req.body;
	try {
		const response = await prisma.message.create({
			data: {
				content: data.content,
				senderId: data.senderId,
				chatType: 'WORLD',
			},
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
const getDataMessage = async (req, res) => {
	try {
		const messages = await prisma.message.findMany({
			where: {
				chatType: 'WORLD',
			},
			orderBy: {
				sentAt: 'asc',
			},
			include: {
				sender: {
					select: {
						fullName: true,
						avt: true,
					},
				},
			},
		});

		// res.json(messages);
		return messages;
	} catch (err) {}
};
const chatDefault = async (req, res) => {
	const data = req.body;
	try {
		const response = await prisma.message.create({
			data: {
				content: data.content,
				senderId: data.senderId,
				receiverId: data.receiverId,
			},
		});
	} catch (err) {}
};
module.exports = { ChatAll, chatDefault, getDataMessage };
