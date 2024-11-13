const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createGames = async (req, res) => {
	const data = req.body;
	console.log(data);

	try {
		const games = await prisma.games.create({
			data: {
				gameName: data.gameName,
				gameImg: data.imageUrl,
			},
		});
		res.json(games);
	} catch (err) {
		console.log(err);
	}
};
const getGames = async (req, res) => {
	try {
		const datagames = await prisma.games.findMany();
		res.json(datagames);
	} catch (err) {
		console.log(err);
	}
};
const updateGames = async (req, res) => {
	const data = req.body;
	try {
		const response = await prisma.games.update({
			where: { gameId: data.gameId },
			data: {
				gameName: data.gameName,
				gameImg: data.imageUrl,
			},
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
module.exports = { createGames, getGames, updateGames };
