const {
  ResponseHandler,
} = require("../../infrastructure/webserver/handler/responseHandler");

const {
  GetAllServers,
  SaveServer,
  GetServerByClient,
  UpdateServer,
  IncreasePerformance,
  SaveClient,
  Monitoring,
  GetServersAlerts,
} = require("../../application/use_cases/servers");

module.exports = {
  async getAllServers(req, res, next) {
    try {
      const data = await GetAllServers();

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async getServerByClient(req, res, next) {
    try {
      const data = await GetServerByClient(req.params.name);

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async saveClient(req, res, next) {
    try {
      const data = await SaveClient(req.body);

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async saveServer(req, res, next) {
    try {
      const data = await SaveServer(req.body);

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async updateServer(req, res, next) {
    try {
      const { client, server } = req.query;
      const data = await UpdateServer(client, server);

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async increasePerformance(req, res, next) {
    try {
      const data = await IncreasePerformance();

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async monitoring(req, res, next) {
    try {
      const data = await Monitoring();

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async getServersAlerts(req, res, next) {
    try {
      const data = await GetServersAlerts();

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },
};
