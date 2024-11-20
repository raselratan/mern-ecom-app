const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const routes = require("./routers/routers");
const { errorResponse } = require("./helpers/responseHelper");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api", routes);

// client error
app.use((req, res, next) => {
  next(createError(404, "Route not found."));
});

// Server error
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
