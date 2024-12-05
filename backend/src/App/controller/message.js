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

		res.json(messages);
		// return messages;
	} catch (err) {}
};
const chatDefault = async (req, res) => {
	const data = req.body;
	try {
		const message = await prisma.message.create({
			data: {
				content: data.content,
				chatType: 'PRIVATE',
				senderId: data.senderId,
				MessageReceiver: {
					create: {
						receiverId: parseInt(data.receiverId),
					},
				},
			},
			include: {
				MessageReceiver: true,
			},
		});
		return message;
	} catch (err) {
		console.log(err);
	}
};
const getchatUser = async (req, res) => {
	const customerId = req.params.id;
	try {
		const sentMessages = await prisma.message.findMany({
			where: {
				senderId: parseInt(customerId),
				chatType: 'PRIVATE',
			},
			select: {
				MessageReceiver: {
					select: {
						receiver: {
							select: {
								customerId: true,
								fullName: true,
								avt: true,
							},
						},
					},
				},
			},
		});

		const receivedMessages = await prisma.messageReceiver.findMany({
			where: {
				receiverId: parseInt(customerId),
				message: {
					chatType: 'PRIVATE',
				},
			},
			select: {
				message: {
					select: {
						sender: {
							select: {
								customerId: true,
								fullName: true,
								avt: true,
							},
						},
					},
				},
			},
		});

		// Tách danh sách người gửi và người nhận
		const sentPartners = sentMessages.flatMap((msg) => msg.MessageReceiver.map((receiver) => receiver.receiver));

		const receivedPartners = receivedMessages.map((receiver) => receiver.message.sender);

		// Kết hợp và loại bỏ trùng lặp
		const allPartners = [...sentPartners, ...receivedPartners];
		const uniquePartners = Array.from(
			new Map(allPartners.map((partner) => [partner.customerId, partner])).values(),
		);
		res.json(uniquePartners);
		return uniquePartners;
	} catch (error) {
		console.error('Error fetching chat partners:', error);
	} finally {
		await prisma.$disconnect();
	}
};
const getPrivateChat = async (req, res) => {
	const { receiverId, senderId } = req.query;
	console.log(req.query);

	try {
		// Lấy tất cả các tin nhắn giữa senderId và receiverId
		const messages = await prisma.message.findMany({
			where: {
				chatType: 'PRIVATE',
				OR: [
					{
						senderId: parseInt(senderId),
						MessageReceiver: {
							some: {
								receiverId: parseInt(receiverId),
							},
						},
					},
					{
						senderId: parseInt(receiverId),
						MessageReceiver: {
							some: {
								receiverId: parseInt(senderId),
							},
						},
					},
				],
			},
			select: {
				messageId: true,
				content: true,
				sentAt: true,
				readAt: true,
				sender: {
					select: {
						customerId: true,
					},
				},
				MessageReceiver: {
					where: {
						receiverId: {
							in: [parseInt(senderId), parseInt(receiverId)], // Chỉ lấy người nhận có id là senderId hoặc receiverId
						},
					},
					select: {
						receiver: {
							select: {
								customerId: true,
							},
						},
					},
				},
			},
			orderBy: {
				sentAt: 'asc',
			},
		});
		const formattedMessages = messages.map((message) => ({
			messageId: message.messageId,
			content: message.content,
			sentAt: message.sentAt,
			readAt: message.readAt,
			senderId: message.sender.customerId,
			receivers: message.MessageReceiver.map((mr) => mr.receiver.customerId),
		}));
		console.log(formattedMessages);

		res.json(formattedMessages);
	} catch (error) {
		console.error('Error fetching private chat:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

module.exports = { ChatAll, chatDefault, getDataMessage, getchatUser, getPrivateChat };
