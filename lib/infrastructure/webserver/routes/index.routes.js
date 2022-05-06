const express = require("express");

const RouterMain = express.Router();

const { ServerArus } = require("./arus.routes");

RouterMain.use("/api/v1/arus_server", ServerArus);

module.exports = { RouterMain };
