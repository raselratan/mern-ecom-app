const errorResponse = (
  res,
  { statusCode = 500, message = "Internal server error!" }
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

const successResponse = (
  res,
  { statusCode = 200, message = "Success", data = {} }
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

module.exports = {
  errorResponse,
  successResponse,
};
