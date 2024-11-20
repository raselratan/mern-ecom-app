const express = require("express");

const routes = express.Router();
const userRouter = require("./user/userRouter");
const seedRoutes = require("./seedRouters");

routes.use("/user", userRouter);
routes.use("/seed", seedRoutes);

module.exports = routes;
