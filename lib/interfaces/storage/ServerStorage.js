const { Server } = require("../../infrastructure/database/models/Servers");

module.exports = class {
  constructor() {
    this.model = Server;
  }

  getAllServers() {
    return new Promise(async (resolved, reject) => {
      try {
        const result = await this.model.find();
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  getServerByClient(nameClient) {
    return new Promise(async (resolved, reject) => {
      try {
        const result = await this.model.find({ client: nameClient });
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  saveServer(dataServer) {
    return new Promise(async (resolved, reject) => {
      try {
        const result = await this.model.create(dataServer);
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  saveClient(dataServer) {
    return new Promise(async (resolved, reject) => {
      try {
        const result = await this.model.create(dataServer);
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  updateServer(compts, name, client) {
    return new Promise(async (resolved, reject) => {
      try {
        const filter = {
          client,
          servers: {
            $elemMatch: {
              name,
            },
          },
        };
        const updateDoc = {
          $set: {
            "servers.$.components": compts,
          },
        };

        const result = await this.model.updateOne(filter, updateDoc);
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  increasePerformance(compts, name, client) {
    return new Promise(async (resolved, reject) => {
      try {
        const filter = {
          client,
          servers: {
            $elemMatch: {
              name,
            },
          },
        };
        const updateDoc = {
          $set: {
            "servers.$.components": compts,
          },
        };

        const result = await this.model.updateOne(filter, updateDoc);

        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
};
