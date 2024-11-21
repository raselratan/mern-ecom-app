const User = require("../../models/user");
const createError = require("http-errors");
const { successResponse } = require("../../helpers/responseHelper");
const { createJsonWebTooken } = require("../../helpers/jsonwebtoken");
const { jwt_activation_key, client_url } = require("../../secrete");
const sendMail = require("../../helpers/mail");

const register = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };

    const { name, email, phone, password, address } = req.body;

    const userExists = await User.exists({ email: email });

    if (userExists) {
      throw createError(409, "User already exists.");
    }

    // JWT token generate

    const token = createJsonWebTooken(
      {
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
      },
      jwt_activation_key,
      "10m"
    );

    const emailData = {
      email,
      subject: "Account Activation Mail",
      html: `
        <h2>Hello ${name},</h2>
        <p>Please click here to <a href="${client_url}/api/user/activate/${token}" target="_blank">active your account</a></p>
      `,
    };

    try {
      await sendMail(emailData);
    } catch (err) {
      next(createError(500, "Sending failed verication email"));
      return;
    }

    return successResponse(res, {
      success: true,
      statusCode: 200,
      message: `Please verify from your email at ${email}.`,
      data: {
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = register;
