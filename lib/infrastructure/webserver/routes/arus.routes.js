const express = require("express");

const ServerArus = express.Router();

const {
  getAllUsers,
} = require("../../../interfaces/controllers/UserController");

ServerArus.get("/user", getAllUsers);

module.exports = { ServerArus };
