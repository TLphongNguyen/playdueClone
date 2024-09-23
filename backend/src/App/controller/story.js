const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createStories = async (req, res) => {
	const data = req.body;
	console.log(data);

	try {
		const idCutomer = data.customerId;
		const newStory = await prisma.story.create({
			data: {
				customerId: data.customerId, // Đảm bảo customerId được cung cấp
				urlStory: data.src,
				caption: data.description,
				hagtag: data.hashtags,
				stautusStory: true,
			},
		});
		res.json(newStory);
	} catch (err) {
		console.log(err);
	}
};
const getStory = async (req, res) => {
	try {
		const dataStory = await prisma.story.findMany({
			where: {
				stautusStory: true,
			},
			include: {
				customers: true, // Bao gồm thông tin khách hàng
			},
		});

		res.json(dataStory);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy câu chuyện.' });
	}
};
module.exports = { createStories, getStory };
