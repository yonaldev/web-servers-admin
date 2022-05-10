const mongoose = require("mongoose");
const { mongooseConnection } = require("../mongodb");

mongooseConnection();

const { Schema } = mongoose;

const ComponentsSchema = new Schema({
  name: String,
  capacity: Number,
});

const ServerSchema = new Schema({
  // ip: String,
  // name: String,
  client: String,
  // components: {},
  servers: [],
});

const Server = mongoose.model("server", ServerSchema);

module.exports = {
  Server,
};
