require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3001;
const mongodbUrl =
  process.env.MONGO_DB_URI || "mongodb://localhost:27017/ecommerce";

const defaultAvater =
  process.env.DEFAULT_AVATER_PATH || "public/images/users/default.png";

const jwt_activation_key =
  process.env.JWT_ACTIVATION_KEY || "SDFGHKLKHGFDFGKH$%^&*^%$##FGJJDFGHJ";

const smtp_username = process.env.SMTP_USERNAME || "";
const smtp_passwrd = process.env.SMTP_PASSWRD || "";
const client_url = process.env.CLIENT_URL || "";

module.exports = {
  serverPort,
  mongodbUrl,
  defaultAvater,
  jwt_activation_key,
  smtp_username,
  smtp_passwrd,
  client_url,
};
