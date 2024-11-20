const { successResponse } = require("../../helpers/responseHelper");
const User = require("../../models/user");
const { findItemById } = require("../../services/findItemById");

const getSingleUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };

    const user = await findItemById(User, id, options);

    return successResponse(res, {
      success: true,
      message: "User returend successfully",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getSingleUser;
