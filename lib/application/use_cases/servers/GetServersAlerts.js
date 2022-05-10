const { ServerRepository } = require("../../../domain/repositories/servers");
const { send } = require("../../../infrastructure/clientapis/SendEmail");
const { ServerStorage } = require("../../../interfaces/storage");

const serverRepository = new ServerRepository(new ServerStorage());

module.exports = () => {
  return new Promise(async (resolved, reject) => {
    try {
      let stop;
      const allServers = await serverRepository.getAllServers();

      let serversAlert = [];

      allServers.map((clients) => {
        stop = false;
        const { servers } = clients;
        servers.forEach((server) => {
          const { components } = server;
          for (const component in components) {
            const { use } = components[component];
            if (use >= 90) {
              serversAlert.push(clients);
              break;
            }
          }
        });
      });

      resolved(serversAlert);
    } catch (error) {
      reject(error);
    }
  });
};
