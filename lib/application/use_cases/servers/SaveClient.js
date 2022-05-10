const { ServerRepository } = require("../../../domain/repositories/servers");
const { ServerStorage } = require("../../../interfaces/storage");

const serverRepository = new ServerRepository(new ServerStorage());

module.exports = (dataServer) => {
  return new Promise(async (resolved, reject) => {
    try {
      const { client } = dataServer;

      const allServers = await serverRepository.getAllServers();

      const existServer = allServers.find((item) => item.client === client);

      if (existServer)
        return resolved({ statusCode: 200, message: "Client exist" });

      await serverRepository.saveClient(dataServer);
      resolved({ statusCode: 201, message: "Client save" });
    } catch (error) {
      reject(error);
    }
  });
};
