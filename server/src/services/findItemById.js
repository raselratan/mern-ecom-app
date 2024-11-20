const createError = require("http-errors");
const mongoose = require("mongoose");

const findItemById = async (Model, id, options = {}) => {
  try {
    const item = await Model.findById(id, options);

    if (!item) throw createError(404, `${Model.modelName} not found!`);

    return item;
  } catch (err) {
    if (err instanceof mongoose.Error) {
      throw createError(400, `Invalid ${Model.modelName} id.`);
    }
    throw err;
  }
};

module.exports = {
  findItemById,
};
