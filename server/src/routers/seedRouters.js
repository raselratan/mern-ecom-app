const express = require("express");
const userSeedRouter = require("./user/userSeedRuter");

const seedRoutes = express.Router();

seedRoutes.use(userSeedRouter);

module.exports = seedRoutes;
