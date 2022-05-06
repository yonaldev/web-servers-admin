module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  getAllUsers() {
    return this.repository.getAllUsers();
  }

  saveUser(user) {
    return this.repository.saveUse(user);
  }

  updateUser(idUser) {
    return this.repository.updateUser(idUser);
  }

  deleteUser(idUser) {
    return this.repository.updateUser(idUser);
  }
};
