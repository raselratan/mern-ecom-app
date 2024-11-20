const mongoose = require("mongoose");
const { mongodbUrl } = require("../secrete");

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongodbUrl, options);
    console.log("DB Connected.");
    mongoose.connection.on("error", (error) => {
      console.log("DB disconnected", error);
    });
  } catch (err) {
    console.log("Could not connect to DB", err.toString());
  }
};

module.exports = connectDB;
