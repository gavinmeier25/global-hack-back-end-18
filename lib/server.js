'use strict';

var express = require('express');
var models = require('./model');
var expressGraphQL = require('express-graphql');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var schema = require('./schema/schema');

require('dotenv').config();
require("babel-polyfill");

var app = express();

// Replace with your mongoLab URI
var MONGO_URI = 'mongodb://localhost:27017/GlobalHack';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
try {
  mongoose.connect(MONGO_URI);
  console.log('Connected to Mongo');
} catch (err) {
  console.err(err);
}

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

module.exports = app;