const { ServerRepository } = require("../../../domain/repositories/servers");

const { ServerStorage } = require("../../../interfaces/storage");

const serverRepository = new ServerRepository(new ServerStorage());

module.exports = () => serverRepository.getAllServers();
