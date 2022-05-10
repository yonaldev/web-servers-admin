const { DataTypes } = require("sequelize");
const { sequelize } = require("../mysql");

const Users = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    name: {
      type: DataTypes.STRING(36),
      allowNull: false,
      field: "name",
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: "last_name",
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "email",
    },
    idRol: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: "id_rol",
    },
    active: {
      type: DataTypes.ENUM,
      values: ["1", "0"],
      defaultValue: "1",
      allowNull: false,
      field: "active_row",
    },
  },
  {
    tableName: "tbl_user",
    timestamps: false,
  }
);

module.exports = { Users };
