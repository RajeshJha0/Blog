const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://dbuser:dbuserpassword@blogcluster.sxsww1w.mongodb.net/';

const client = new MongoClient(url);

const dbName = 'Blog';

client.connect();

const db = client.db(dbName);

module.exports = db;
