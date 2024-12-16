const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUser = async (req, res) => {
	try {
		const response = await prisma.account.findMany({
			where: {
				accountTypeId: {
					in: [3, 2],
				},
			},
			include: {
				customers: true,
				accountType: true,
			},
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
module.exports = { getUser };
