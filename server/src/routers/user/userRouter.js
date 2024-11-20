const express = require("express");
const users = require("../../controllers/users");
const register = require("../../controllers/users/register");
const getSingleUser = require("../../controllers/users/singleUser");
const deleteSingleUser = require("../../controllers/users/deleteUser");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.get("/", users);
userRouter.get("/:id", getSingleUser);
userRouter.delete("/:id", deleteSingleUser);

module.exports = userRouter;
