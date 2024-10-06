const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createStories = async (req, res) => {
	const data = req.body;
	console.log(data);

	try {
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
const incrementStoryView = async (req, res) => {
	const { storyId } = req.body;

	try {
		const updatedStory = await prisma.story.update({
			where: { storyId: storyId },
			data: { views: { increment: 1 } },
		});
		res.json(updatedStory);
	} catch (error) {
		console.log(error);

		// res.status(500).json({ error: 'Lỗi khi tăng lượt xem.' });
	}
};
const checkliked = async (req, res) => {
	const { storyId, customerId } = req.body;
	// console.log(req.body);

	try {
		const existingReaction = await prisma.reactionStory.findUnique({
			where: {
				storyId_customerId_type: {
					storyId,
					customerId,
					type: 'LIKE',
				},
			},
		});
		if (existingReaction) {
			res.json({ isLiked: true });
		} else {
			res.json({ isLiked: false });
		}
	} catch (error) {
		console.log(error);
	}
};
const incrementStoryLike = async (req, res) => {
	const { storyId, customerId } = req.body;
	console.log(req.body);

	try {
		await prisma.reactionStory.create({
			data: {
				type: 'LIKE',
				story: {
					connect: {
						storyId: storyId,
					},
				},
				customer: {
					connect: {
						customerId: customerId,
					},
				},
			},
		});
		const updatedStory = await prisma.story.update({
			where: { storyId: storyId },
			data: {
				likes: {
					increment: 1,
				},
			},
		});

		res.json(updatedStory);
	} catch (error) {
		console.log(error);
	}
};
const decrementStoryLike = async (req, res) => {
	const { storyId, customerId } = req.body;

	try {
		await prisma.reactionStory.delete({
			where: {
				storyId_customerId_type: {
					type: 'LIKE',
					storyId: storyId,
					customerId: customerId,
				},
			},
		});
		const updatedStory = await prisma.story.update({
			where: { storyId: storyId },
			data: {
				likes: {
					decrement: 1,
				},
			},
		});

		res.json(updatedStory);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Có lỗi xảy ra khi giảm lượt like.' });
	}
};
const createComment = async (req, res) => {
	const data = req.body;
	console.log(data);

	try {
		const datacomment = await prisma.commentStory.create({
			data: {
				content: data.content,
				storys: {
					connect: {
						storyId: data.storyId,
					},
				},
				customers: {
					connect: {
						customerId: data.customerId,
					},
				},
			},
		});
		res.json(datacomment);
	} catch (error) {
		console.log(error);
	}
};
const getCommentStory = async (req, res) => {
	const { storyId } = req.params;
	try {
		const dataComment = await prisma.commentStory.findMany({
			where: { storyId: parseInt(storyId) },
			include: {
				customers: true,
			},
		});
		if (!dataComment.length) {
			return res.status(404).json({ message: 'No comments found for this story.' });
		}
		res.json(dataComment);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createStories,
	getStory,
	incrementStoryView,
	incrementStoryLike,
	decrementStoryLike,
	checkliked,
	createComment,
	getCommentStory,
};
