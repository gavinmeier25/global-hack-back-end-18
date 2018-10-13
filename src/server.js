const express = require('express');
const models = require('./model');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

require('dotenv').config()
require ("babel-polyfill");

const app = express();

// Replace with your mongoLab URI - done
const MONGO_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_NAME}`;

if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
try {
mongoose.connect(MONGO_URI) 
console.log('Connected to Mongo')
} catch (err) {
  console.err(err);
}


app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.get('/', (req, res) => {
	res.send('success');
})

module.exports = app;
