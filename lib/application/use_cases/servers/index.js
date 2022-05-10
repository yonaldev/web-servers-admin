const GetAllServers = require("./GetAllServers");
const SaveServer = require("./SaveServer");
const GetServerByClient = require("./GetServerByClient");
const UpdateServer = require("./UpdateServer");
const IncreasePerformance = require("./IncreasePerformance");
const SaveClient = require("./SaveClient");
const Monitoring = require("./Monitoring");
const GetServersAlerts = require("./GetServersAlerts");

module.exports = {
  GetAllServers,
  SaveServer,
  GetServerByClient,
  UpdateServer,

  IncreasePerformance,
  SaveClient,
  Monitoring,
  GetServersAlerts,
};
