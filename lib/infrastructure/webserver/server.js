const express = require("express");
const cors = require("cors");

const {
  handleError,
} = require("../../infrastructure/webserver/handler/errorHandler");
const {
  handleResponse,
} = require("../../infrastructure/webserver/handler/responseHandler");

const { RouterMain } = require("./routes/index.routes");

const app = express();

// Cors
app.use(cors({ methods: ["GET", "POST"] }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(RouterMain);

// Response global
app.use((data, req, res, next) => handleResponse(data, res, next));

// Handle Errors || Always end
app.use((err, req, res, next) => handleError(err, res));

module.exports = { app };
