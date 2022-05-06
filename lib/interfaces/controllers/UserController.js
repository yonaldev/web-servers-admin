const {
  ResponseHandler,
} = require("../../infrastructure/webserver/handler/responseHandler");

const { GetAllUsers } = require("../../application/use_cases/users");

module.exports = {
  async getAllUsers(req, res, next) {
    try {
      const data = await GetAllUsers();

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  // async saveUser(req, res, next) {
  //   try {
  //     const data = await SaveUser(req.body);

  //     next(new ResponseHandler(200, data));
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // async updateUser(req, res, next) {
  //   try {
  //     const data = await UpdateUser(req.query.search);
  //     next(new ResponseHandler(200, data));
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // async deleteUser(req, res, next) {
  //   try {
  //     const data = await DeleteUser(req.query.search);
  //     next(new ResponseHandler(200, data));
  //   } catch (error) {
  //     next(error);
  //   }
  // },
};
