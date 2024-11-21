const express = require("express");
const users = require("../../controllers/users");
const register = require("../../controllers/users/register");
const getSingleUser = require("../../controllers/users/singleUser");
const activateUser = require("../../controllers/users/activateUser");
const deleteSingleUser = require("../../controllers/users/deleteUser");
const upload = require("../../middleware/uploadFile");

const userRouter = express.Router();

userRouter.post("/register", upload.single("image"), register);
userRouter.post("/verify", activateUser);
userRouter.get("/", users);
userRouter.get("/:id", getSingleUser);
userRouter.delete("/:id", deleteSingleUser);

module.exports = userRouter;
