const { ServerRepository } = require("../../../domain/repositories/servers");
const { ServerStorage } = require("../../../interfaces/storage");

const serverRepository = new ServerRepository(new ServerStorage());

module.exports = () => {
  return new Promise(async (resolved, reject) => {
    try {
      let componentsUpdate;

      const allServers = await serverRepository.getAllServers();

      // Client
      const randomClient = Math.round(Math.random() * (allServers.length - 1));
      const clientToIncreasePerformance = allServers[randomClient];
      const { client, servers } = clientToIncreasePerformance;

      // Server
      const randomServer = Math.round(Math.random() * (servers.length - 1));
      const serverToIncreasePerformance = servers[randomServer];
      const { name, components } = serverToIncreasePerformance;

      for (const component in components) {
        const { use, capacity } = components[component];
        if (use < 90) {
          componentsUpdate = {
            [component]: { use: 90, capacity },
            ...componentsUpdate,
          };
        } else {
          componentsUpdate = {
            [component]: { use, capacity },
            ...componentsUpdate,
          };
        }
      }

      const result = await serverRepository.increasePerformance(
        componentsUpdate,
        name,
        client
      );

      componentsUpdate = {};

      // resolved(result);
      resolved({ client, name });
    } catch (error) {
      reject(error);
    }
  });
};
