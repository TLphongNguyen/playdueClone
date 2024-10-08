const { PrismaClient } = require('@prisma/client');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3003;
const rootRouter = require('./src/routers');
const cors = require('cors');
const errorMiddleware = require('./src/middlewares/error');
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
// Khởi tạo PrismaClient
const prismaClient = new PrismaClient({
	log: ['query'],
});
app.use(express.json());
app.use('/api', rootRouter);
process.on('SIGINT', async () => {
	await prisma.$disconnect();
	process.exit(0);
});
app.use(errorMiddleware);
app.use(cookieParser());
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
module.exports = prismaClient;
