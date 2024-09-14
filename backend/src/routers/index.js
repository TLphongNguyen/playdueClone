const express = require("express");
const service = require("./serviceRouter");
const authRouters = require("./auth");

const rootRouter = express.Router();

rootRouter.use("/auth", authRouters);
rootRouter.use("/service", service);

module.exports = rootRouter;
