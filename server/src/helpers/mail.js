const nodemailer = require("nodemailer");
const { smtp_username, smtp_passwrd } = require("../secrete");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: smtp_username,
    pass: smtp_passwrd,
  },
});

const sendMail = async (emailData) => {
  try {
    const mail = {
      from: smtp_username, // sender address
      to: emailData.email, // list of receivers
      subject: emailData.subject, // Subject line
      html: emailData.html, // html body
    };

    await transporter.sendMail(mail);
    console.info("Email Sent");
  } catch (err) {
    console.log("Email not sent", err);
    throw err;
  }
};

module.exports = sendMail;
