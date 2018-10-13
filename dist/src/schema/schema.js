'use strict';

var graphql = require('graphql');
var GraphQLSchema = graphql.GraphQLSchema;


var RootQuery = require('./query');
var mutation = require('./mutation');

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
});