const createError = require("http-errors");
const User = require("../../models/user");
const { successResponse } = require("../../helpers/responseHelper");

const users = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const searchRegEx = new RegExp(".*" + search + ".*", "i");
    const filter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegEx } },
        { phone: { $regex: searchRegEx } },
        { emmail: { $regex: searchRegEx } },
      ],
    };

    const options = { password: 0 };

    const users = await User.find(filter, options)
      .limit(limit)
      .skip((page - 1) * limit);

    const count = await User.find(filter).countDocuments();

    if (!users.length) throw createError(404, "User not found");

    return successResponse(res, {
      statusCode: 200,
      message: "User returned successfully.",
      data: {
        users,
        pagination: {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          previousPage: page - 1 > 0 ? page - 1 : null,
          nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
        },
      },
    });
  } catch (err) {
    console.log(err);
    next(createError(500, err.message));
  }
};

module.exports = users;
