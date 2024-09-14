const express = require('express');
const { signUp, signIn, customer } = require('../App/controller/auth');
const middleware = require('../middlewares/auth');

const authRouters = express.Router();

module.exports = authRouters;
authRouters.post('/register', signUp);
authRouters.post('/login', signIn);
authRouters.get('/customer', [middleware], customer);
