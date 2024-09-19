const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateRandomString = require('../../utils');
const prisma = new PrismaClient();
const randomSuffix = generateRandomString(3); // Độ dài của phần ngẫu nhiên
const fullName = `User${randomSuffix}`;

const signUp = async (req, res, next) => {
	const { email, password } = req.body;
	console.log(req.body);

	try {
		const existingUsr = await prisma.account.findFirst({
			where: { username: email },
		});
		if (existingUsr) {
			return res.status(400).json({ error: 'user alredy exists' });
		}

		const Salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, Salt);
		const newCustomer = await prisma.customer.create({
			data: {
				fullName: fullName,
				nickname: fullName,
				avt: 'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1',
				birthday: new Date('1990-01-01'),
				email: email,
				address: null,
				money: 0,
				gender: null,
				status: 1,
				account: {
					create: {
						username: email,
						password: hashPassword,
						Salt: Salt,
						accountTypeId: parseInt(3),
					},
				},
			},
		});
		res.json(newCustomer);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal server error' });
	}
};
const signIn = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existingUser = await prisma.account.findFirst({ where: { username: email } });
		if (!existingUser) {
			return res.status(400).json({ error: 'User already exists' });
		}
		const decryptPass = await bcrypt.hash(password, existingUser.Salt);
		if (decryptPass !== existingUser.password) {
			throw new Error();
		}
		const Token = jwt.sign({ customerId: existingUser.accountId }, 'abcxyz', {
			expiresIn: '8h',
		});
		res.cookie('token', Token, {
			httpOnly: true, // Ngăn JavaScript phía client truy cập vào cookie
			secure: true, // Đảm bảo cookie chỉ được gửi qua HTTPS
			maxAge: 8 * 60 * 60 * 1000, // Thời hạn 8 giờ (tính bằng mili giây)
			sameSite: 'strict', // Bảo vệ chống lại CSRF
		});
		res.json(Token);
	} catch (err) {
		res.status(500).json({ err: 'Internal server error' });
		console.log(err.message);
	}
};
const customer = async (req, res) => {
	res.json(req.customer);
};
const UpdateCutomer = async (req, res) => {
	const data = req.body;
	// console.log(data);
	try {
		const update = await prisma.customer.update({
			where: { customerId: data.customerId },
			data: {
				fullName: data.fullName,
				nickname: data.nickname,
				avt: data.avt,
				birthday: new Date(data.birthday),
				address: data.address,
				gender: data.gender,
			},
		});
		res.json(update);
	} catch (err) {
		console.log(err);
	}
};
module.exports = { signUp, signIn, customer, UpdateCutomer };
