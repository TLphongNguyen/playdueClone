const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const GetPlayer = async (req, res) => {
	try {
		const response = await prisma.customer.findMany({
			where: {
				detailCustomer: {
					isNot: null,
				},
			},
			include: {
				detailCustomer: {
					include: {
						games: {
							include: {
								Game: true,
							},
						},
					},
				},
			},
		});

		res.json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

const GetPlayerById = async (req, res) => {
	const id = req.params.id;
	try {
		const playerInfo = await prisma.customer.findUnique({
			where: {
				customerId: parseInt(id),
			},
			include: {
				detailCustomer: {
					include: {
						games: {
							include: {
								Game: true,
							},
						},
					},
				},
			},
		});

		res.json(playerInfo);
	} catch (error) {
		console.error('Error fetching player info:', error);
		throw error;
	}
};
const checkFollower = async (req, res) => {
	const data = req.body;
	console.log(data);

	try {
		const checkFollower = await prisma.follower.findFirst({
			where: {
				customerId: parseInt(data.customerId),
				followerId: data.followerId,
			},
		});
		if (checkFollower) {
			res.json({ status: false });
		} else {
			res.json({ status: true });
		}
	} catch (err) {
		console.log(err);
	}
};
const followers = async (req, res) => {
	const data = req.body;
	try {
		const checkFollower = await prisma.follower.findFirst({
			where: {
				customerId: parseInt(data.customerId),
				followerId: data.followerId,
			},
		});

		let response;
		if (checkFollower) {
			// Xóa follower nếu đã tồn tại
			response = await prisma.follower.deleteMany({
				where: {
					customerId: parseInt(data.customerId),
					followerId: data.followerId,
				},
			});
		} else {
			// Tạo mới follower nếu chưa tồn tại
			response = await prisma.follower.create({
				data: {
					customerId: parseInt(data.customerId),
					followerId: data.followerId,
				},
			});
		}

		res.json(response);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
};

module.exports = { GetPlayer, GetPlayerById, followers, checkFollower };
