const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const { jwt_activation_key } = require("../../secrete");
const { successResponse } = require("../../helpers/responseHelper");
const User = require("../../models/user");

const activateUser = async (req, res, next) => {
  try {
    const token = req.body.token;

    if (!token) throw createError(404, "Token not found.");

    try {
      const decoded = jwt.verify(token, jwt_activation_key);
      console.log(decoded);
      const userExists = await User.exists({ email: decoded.email });

      if (userExists) {
        throw createError(409, "User already exists.");
      }

      await User.create(decoded);

      successResponse(res, {
        statusCode: 201,
        message: "User verifid successfully.",
      });
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        throw createError("401", "Token has expired");
      } else if (err.name == "JsonWebTokenError") {
        throw createError("401", "Invalid token.");
      } else {
        throw err;
      }
    }
  } catch (e) {
    next(e);
  }
};

module.exports = activateUser;
