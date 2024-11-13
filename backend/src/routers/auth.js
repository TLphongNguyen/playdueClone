const express = require('express');
const {
	signUp,
	signIn,
	customer,
	UpdateCutomer,
	updatePassword,
	CreateCutomerDetail,
} = require('../App/controller/auth');
const middleware = require('../middlewares/auth');

const authRouters = express.Router();

module.exports = authRouters;
authRouters.post('/register', signUp);
authRouters.post('/login', signIn);
authRouters.get('/customer', [middleware], customer);
authRouters.post('/updateCustomer', UpdateCutomer);
authRouters.post('/createDetalCustomer', CreateCutomerDetail);
authRouters.post('/updatepassword', updatePassword);
