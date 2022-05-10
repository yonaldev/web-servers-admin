class ClientEntity {
  constructor({ ip, name, client, components }) {
    this.ip = ip;
    this.name = name;
    this.client = client;
    this.components = components;
  }
}

module.exports = { ClientEntity };
