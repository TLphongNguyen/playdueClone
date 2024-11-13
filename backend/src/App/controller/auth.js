const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateRandomString = require('../../utils');
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
						accountTypeId: parseInt(1),
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
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 8 * 60 * 60 * 1000,
			sameSite: 'strict',
		});
		res.json(Token);
	} catch (err) {
		res.status(500).json({ err: 'Internal server error' });
		console.log(err.message);
	}
};
const updatePassword = async (req, res) => {
	const { email, password, accountId } = req.body;
	console.log(req.body);

	try {
		// Tìm người dùng với email được cung cấp
		const account = await prisma.account.findFirst({ where: { username: email } });
		if (!account) {
			return res.status(400).json({ error: 'User does not exist' }); // Thông báo người dùng không tồn tại
		}

		// Tạo salt và hash password
		const Salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, Salt);

		// Cập nhật password và salt cho người dùng
		const updatedAccount = await prisma.account.update({
			where: { accountId: accountId }, // Điều kiện tìm người dùng
			data: {
				password: hashPassword,
				Salt: Salt, // Nếu cần lưu Salt riêng
			},
		});

		// Trả về phản hồi thành công
		res.json(updatedAccount);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong, please try again later' }); // Trả về lỗi
	}
};

const customer = async (req, res) => {
	res.json(req.customer);
};
const UpdateCutomer = async (req, res) => {
	const data = req.body;
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
const CreateCutomerDetail = async (req, res) => {
	const data = req.body;
	console.log(data);

	try {
		const response = await prisma.detailCustomer.create({
			data: {
				Facebook: data.linkfacebook,
				highlight: data.linkhighlight,
				info: data.title,
				description: data.describe,
				mic: false,
				cam: false,
				Abum: data.img,
				price: 0,
				games: {
					// Sử dụng "games" thay vì "gamesOnCustomers"
					create: data.games.map((gameId) => ({
						Game: {
							connect: { gameId },
						},
					})),
				},
				customer: {
					connect: { customerId: data.customerId },
				},
			},
		});
		res.json(response);
	} catch (err) {
		console.log(err);
	}
};
module.exports = { signUp, signIn, customer, UpdateCutomer, updatePassword, CreateCutomerDetail };
