const { ServerRepository } = require("../../../domain/repositories/servers");
const { ServerStorage } = require("../../../interfaces/storage");

const userRepository = new ServerRepository(new ServerStorage());

module.exports = (clientData, server) => {
  return new Promise(async (resolved, reject) => {
    try {
      let componentsUpdate;

      const findClient = await userRepository.getServerByClient(clientData);

      const [serverWarning] = findClient.filter(
        ({ client }) => client === clientData
      );
      const { servers } = serverWarning;

      const findServer = servers.find(({ name }) => name === server);
      const { components } = findServer;

      for (const component in components) {
        const { use, capacity } = components[component];

        if (use >= 90) {
          componentsUpdate = {
            [component]: { use: 20, capacity },
            ...componentsUpdate,
          };
        } else {
          componentsUpdate = {
            [component]: { use, capacity },
            ...componentsUpdate,
          };
        }
      }

      const result = await userRepository.updateServer(
        componentsUpdate,
        server,
        clientData
      );
      resolved(result);
    } catch (error) {
      reject(error);
    }
  });
};
