const usersData = require("../../data/userData");
const User = require("../../models/user");

const seedUser = async (req, res, next) => {
  try {
    // Delete existing users
    await User.deleteMany({});

    const users = await User.insertMany(usersData);

    return res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = seedUser;
