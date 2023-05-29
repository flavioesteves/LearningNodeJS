const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dotenv = require("dotenv");

dotenv.config();

/*
const mongoConnect = async (callback) => {

  const uri = process.env.MONGO_URL;
  const client = new MongoClient(uri)
  try {
    client.connect();
    console.log("DB connected !!");
    await listDatabases(client);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};


async function listDatabases(client) {
  let databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");

  databasesList.databases.forEach(db => {
    console.log(` - ${db.name}`)
  });
}

*/

let _db;

const mongoConnect = callback => {

  MongoClient.connect(process.env.MONGO_URL).then(client => {
    console.log("DB Connected!");
    _db = client.db()

    callback();
  }).catch(err => {
    console.log(err);
    throw err;
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No Database found!"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
