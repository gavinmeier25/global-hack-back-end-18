'use strict';

var mongoose = require('mongoose');
var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLList = graphql.GraphQLList,
    GraphQLID = graphql.GraphQLID,
    GraphQLNonNull = graphql.GraphQLNonNull;

var UserType = require('./types/user');
var UserModel = require('../model/user');

var Query = new GraphQLObjectType({
    name: 'Query',
    fields: function fields() {
        return {
            findAllUsers: {
                type: new GraphQLList(UserType),
                resolve: function resolve() {
                    return UserModel.find({});
                }
            }
        };
    }
});

module.exports = Query;