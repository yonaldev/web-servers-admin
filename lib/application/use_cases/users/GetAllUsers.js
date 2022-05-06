const { UserRepository } = require("../../../domain/repositories/users");

const { UserStorage } = require("../../../interfaces/storage");

const userRepository = new UserRepository(new UserStorage());

module.exports = () => userRepository.getAllUsers();
