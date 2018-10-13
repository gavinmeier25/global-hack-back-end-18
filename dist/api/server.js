'use strict';

var express = require('express');
var models = require('./model');
var expressGraphQL = require('apollo-serverl');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var schema = require('./schema/schema');

var app = express();

// Replace with your mongoLab URI
var MONGO_URI = 'mongodb://gmeier25:2pgLVf58xJus@ds121303-a0.mlab.com:21303,ds121303-a1.mlab.com:21303/mesa-inc-prod?replicaSet=rs-ds121303';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.once('open', function () {
  return console.log('Connected to MongoLab instance.');
}).on('error', function (error) {
  return console.log('Error connecting to MongoLab:', error);
});

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

var webpackMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;