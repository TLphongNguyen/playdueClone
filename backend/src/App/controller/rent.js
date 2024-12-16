const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRent = async (req, res) => {
	const data = req.body;
	try {
		await prisma.rent.create({
			data: {
				customerId: data.customerId,
				playerId: parseInt(data.playerId),
				hour: parseInt(data.hours),
			},
		});
		await prisma.message.create({
			data: {
				senderId: data.customerId,
				content: `Khách hàng muốn thuê bạn trong ${data.hours} giờ. Lời nhắn: "${data.message}"`,
				chatType: 'PRIVATE',
				MessageReceiver: {
					create: {
						receiverId: parseInt(data.playerId),
					},
				},
			},
		});
	} catch (err) {
		console.log(err);
	}
};
const getRent = async (req, res) => {
	const data = req.query;
	// console.log(data);
	const currentTime = new Date();
	const fiveMinutesAgo = new Date(currentTime.getTime() - 5 * 60 * 1000);
	const isexistRent = await prisma.rent.findFirst({
		where: {
			customerId: parseInt(data.customerId),
			playerId: parseInt(data.playerId),
			status: 'pending',
			timeRequest: {
				lte: fiveMinutesAgo,
			},
		},
	});
	console.log('data : ', isexistRent);

	if (!isexistRent) {
		res.json(false);
	} else {
		res.json(isexistRent);
	}
};
const isPlayerRented = async (req, res) => {
	const { id } = req.query;
	const currentTime = new Date();

	try {
		const ongoingRent = await prisma.rentDetails.findFirst({
			where: {
				rents: {
					playerId: parseInt(id),
				},
				startTime: {
					lte: currentTime,
				},
				endTime: {
					gte: currentTime,
				},
			},
		});

		if (ongoingRent) {
			res.json({ isRented: true });
		} else {
			res.json({ isRented: false });
		}
	} catch (error) {
		console.error('Error checking player rental status:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};
const acceptedRent = async (req, res) => {
	const data = req.body;

	try {
		const detailCustomer = await prisma.detailCustomer.findUnique({
			where: { customerId: parseInt(data.customerId) },
			select: { price: true },
		});

		if (!detailCustomer) {
			return res.status(404).json({ message: 'Customer not found in DetailCustomer' });
		}

		const totalPrice = detailCustomer.price * data.hour;

		const updatedRent = await prisma.rent.update({
			where: { rentId: parseInt(data.rentId) },
			data: { status: 'accepted' },
		});
		const startTime = new Date();
		const endTime = new Date(startTime.getTime() + data.hour * 60 * 60 * 1000); // Cộng thêm giờ thuê

		const rentDetails = await prisma.rentDetails.create({
			data: {
				rentId: data.rentId,
				startTime: startTime,
				endTime: endTime,
				totalPrice: totalPrice,
			},
		});
		const updatedCustomer = await prisma.customer.update({
			where: { customerId: data.customerId },
			data: {
				money: {
					decrement: parseInt(totalPrice),
				},
			},
		});

		res.status(201).json({
			message: 'Rent accepted and details created successfully',
			updatedRent,
			rentDetails,
		});
	} catch (error) {
		console.error('Error processing rent:', error);
		res.status(500).json({ message: 'Error processing rent', error });
	}
};
const cancelRent = async (req, res) => {
	const data = req.body;
	try {
		const updatedRent = await prisma.rent.update({
			where: { rentId: parseInt(data.rentId) },
			data: { status: 'canceled' },
		});
		res.status(201).json({
			updatedRent,
		});
	} catch (error) {
		console.log(error);
	}
};
const createDetail = async (req, res) => {
	const data = req.body;
	try {
		const rent = await prisma.rent.findUnique({ where: { rentId: data.rentId } });
		if (rent.status !== 'accepted') {
			return res.status(400).json({ message: 'Rent is not in accepted status' });
		}

		const rentDetails = await prisma.rentDetails.create({
			data: {
				rentId: data.rentId,
				startTime: data.startTime,
				endTime: data.endTime,
				totalPrice: data.totalPrice,
			},
		});
		res.status(201).json(rentDetails);
	} catch (error) {
		res.status(500).json({ message: 'Error creating rent details', error });
	}
};
const getBill = async (req, res) => {
	try {
		const response = await prisma.rent.findMany({
			where: { status: 'ACCEPTED' },
			include: {
				customers: {
					select: {
						fullName: true,
					},
				},
				player: {
					select: {
						fullName: true,
					},
				},
				rentDetails: true,
			},
		});
		res.json(response);
	} catch (error) {
		console.log(error);
	}
};
module.exports = { createRent, acceptedRent, createDetail, getRent, cancelRent, isPlayerRented, getBill };
