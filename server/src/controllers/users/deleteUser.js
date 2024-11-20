const User = require("../../models/user");
const { findItemById } = require("../../services/findItemById");
const { successResponse } = require("../../helpers/responseHelper");
const deleteImage = require("../../helpers/deleteImage");

const deleteSingleUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };

    const user = await findItemById(User, id, options);

    const userAvater = user.image;

    deleteImage(userAvater);

    await User.findByIdAndDelete({ _id: id, isAdmin: false });

    return successResponse(res, {
      success: true,
      message: "User deleted successfully",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteSingleUser;
