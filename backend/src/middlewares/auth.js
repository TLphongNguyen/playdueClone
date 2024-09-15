const UnauthorizedException = require('../App/exceptions/Unauthored');
const { errorCode } = require('../App/exceptions/root');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const middleware = async (req, res, next) => {
	const token = req.headers.authorization;
	// console.log(token);

	if (!token) {
		next(new UnauthorizedException('Unauthorized', errorCode.UNAUTHORED));
	}
	try {
		const payload = jwt.verify(token, 'abcxyz');
		const account = await prisma.customer.findFirst({
			where: { accountId: payload.customerId },
		});
		req.customer = account;
		next();
	} catch (err) {
		next(new UnauthorizedException('Unauthorized', errorCode.UNAUTHORED));
	}
};
module.exports = middleware;
