const express = require("express");
const seedUser = require("../../controllers/seeders/userSeedController");
const userSeedRouter = express.Router();

userSeedRouter.get("/users", seedUser);

module.exports = userSeedRouter;
