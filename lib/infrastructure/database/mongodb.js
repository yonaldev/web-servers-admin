const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

const { USER_DB_MONGO, PASSWORD_DB_MONGO, COLLECTION_DB } = process.env;

const uri = `mongodb+srv://${USER_DB_MONGO}:${PASSWORD_DB_MONGO}@cluster0.bfxpt.mongodb.net/${COLLECTION_DB}?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// client.connect((err) => {
//     const collection = client.db("servers").collection(Server);
//     // perform actions on the collection object

//     client.close();
//   });

const mongooseConnection = () => mongoose.connect(uri);

module.exports = {
  mongooseConnection,
};
