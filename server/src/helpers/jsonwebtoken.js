const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const createJsonWebTooken = (payload, secrete, expiratin) => {
  if (typeof payload !== "object" || !payload) {
    throw new Error("Payload must be a non-empty object");
  }
  if (typeof secrete !== "string" || !secrete) {
    throw new Error("secrete key must be a non-empty string");
  }

  try {
    const token = jwt.sign(payload, secrete, {
      expiresIn: expiratin,
    });
    return token;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createJsonWebTooken,
};
