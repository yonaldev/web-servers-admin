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
      type: DataTypes.BIGINT(20),
      allowNull: true,
      field: "last_name",
    },
    idRol: {
      type: DataTypes.STRING(36),
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
