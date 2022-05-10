const { ServerEntity } = require("../../../domain/entities");
const { ServerRepository } = require("../../../domain/repositories/servers");
const { ServerStorage } = require("../../../interfaces/storage");

const serverRepository = new ServerRepository(new ServerStorage());

module.exports = (dataServer) => {
  return new Promise(async (resolved, reject) => {
    try {
      const { ip, name, client, components = {} } = dataServer;

      const allServers = await serverRepository.getAllServers();

      const existServer = allServers.find(
        (item) => item.name === name && item.client === client
      );

      if (existServer) return resolved("Server exist");

      const result = await serverRepository.saveServer(
        new ServerEntity({
          ip,
          name,
          client,
          components,
        })
      );
      resolved(result);
    } catch (error) {
      reject(error);
    }
  });
};
