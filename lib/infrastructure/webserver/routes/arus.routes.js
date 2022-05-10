const express = require("express");

const ServerArus = express.Router();

const {
  getAllUsers,
} = require("../../../interfaces/controllers/UserController");

const {
  getAllServers,
  saveServer,
  getServerByClient,
  updateServer,
  increasePerformance,
  saveClient,
  monitoring,
  getServersAlerts,
} = require("../../../interfaces/controllers/ServerController");

// Routes Users
ServerArus.get("/user", getAllUsers);

// Routes Servers
ServerArus.get("/server/monitoring", monitoring);
ServerArus.get("/server", getAllServers);
ServerArus.get("/server/alerts", getServersAlerts);
// ServerArus.post("/server", saveServer);
ServerArus.post("/client", saveClient);
ServerArus.get("/server/:name", getServerByClient);
ServerArus.put("/server", updateServer);
ServerArus.put("/server/performance", increasePerformance);

module.exports = { ServerArus };
