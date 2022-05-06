const { Op } = require("sequelize");

const { Users } = require("../../infrastructure/database/models/User");

module.exports = class {
  constructor() {
    this.model = Users;
  }

  getAllUsers() {
    return new Promise(async (resolved, reject) => {
      try {
        const where = { active: "1" };
        const result = await this.model.findAll({ where });
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  saveUser(user) {
    return new Promise(async (resolved, reject) => {
      try {
        const result = await this.model.create(product);
        if (result) {
          resolved({
            data: result.dataValues,
            message: "Datos insertados correctamente",
            status: true,
          });
          return;
        }

        resolved({
          message: "Error al insertar",
          status: false,
        });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  updateUser(idUser) {
    return new Promise(async (resolved, reject) => {
      try {
        const where = {
          [Op.or]: {
            id: {
              [Op.eq]: search,
            },
            name: {
              [Op.like]: `%${search}%`,
            },
            description: {
              [Op.like]: `%${search}%`,
            },
          },
        };

        const result = await this.model.findAll({ where });
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  deleteUser(idUser) {
    return new Promise(async (resolved, reject) => {
      try {
        const where = {
          [Op.or]: {
            id: {
              [Op.eq]: search,
            },
            name: {
              [Op.like]: `%${search}%`,
            },
            description: {
              [Op.like]: `%${search}%`,
            },
          },
        };

        const result = await this.model.findAll({ where });
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
};
