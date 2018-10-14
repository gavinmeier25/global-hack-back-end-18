const express = require('express');
const models = require('./model');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

require('dotenv').config()
require ("babel-polyfill");


const app = express();

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@' + process.env.MONGO_HOST + ':' + process.env.MONGO_NAME;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}
if (process.env.IS_DEBUG === "true") console.log(`Mongostr: ${MONGO_URI}`);

mongoose.Promise = global.Promise;
try {
mongoose.connect(MONGO_URI)
	.catch((e) => {console.log(`mongo catch: ${e}`)});
console.log('Connected to Mongo')
} catch (err) {
  console.log(`mongo try: ${err}`);
}

try {
app.use(bodyParser.json());
if (process.env.IS_DEBUG === "true") console.log(`first app passed`);
if (process.env.IS_DEBUG === "true") console.log(`schema: ${schema}`);
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));
} catch (err) {
	console.log(`caught: ${err}`);
}

module.exports = app;
