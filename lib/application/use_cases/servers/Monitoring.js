const { ServerRepository } = require("../../../domain/repositories/servers");
const { send } = require("../../../infrastructure/clientapis/SendEmail");
const { ServerStorage } = require("../../../interfaces/storage");

const serverRepository = new ServerRepository(new ServerStorage());

module.exports = () => {
  return new Promise(async (resolved, reject) => {
    try {
      let nameClient;
      let serversAlert = [];
      const allServers = await serverRepository.getAllServers();

      allServers.forEach(({ client, servers }) => {
        nameClient = client;
        servers.forEach(({ name, components }) => {
          for (const component in components) {
            const { use } = components[component];
            if (use >= 90) {
              serversAlert.push({ nameClient, name, [component]: use });
            }
          }
        });
      });

      const resp = await send("hola", serversAlert);

      resolved(resp);
    } catch (error) {
      reject(error);
    }
  });
};
