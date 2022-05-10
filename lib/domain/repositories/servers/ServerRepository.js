module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  getAllServers() {
    return this.repository.getAllServers();
  }

  getServerByClient(nameClient) {
    return this.repository.getServerByClient(nameClient);
  }

  saveServer(dataServer) {
    return this.repository.saveServer(dataServer);
  }

  saveClient(dataClient) {
    return this.repository.saveClient(dataClient);
  }

  updateServer(component, value, client) {
    return this.repository.updateServer(component, value, client);
  }

  increasePerformance(component, name, client) {
    return this.repository.increasePerformance(component, name, client);
  }
};
