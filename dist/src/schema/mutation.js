'use strict';

var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLID = graphql.GraphQLID,
    GraphQLList = graphql.GraphQLList,
    GraphQLBoolean = graphql.GraphQLBoolean,
    GraphQLInt = graphql.GraphQLInt;

var mongoose = require('mongoose');
var UserModel = require('../model/user');

var UserType = require('./types/user');

var mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'create, or update data',
    fields: {
        addUser: {
            type: UserType,
            args: {
                userName: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve: function resolve(parentValue, _ref) {
                var userName = _ref.userName,
                    password = _ref.password;

                return new UserModel({
                    userName: userName,
                    password: password
                }).save();
            }
        }
    }
});
module.exports = mutation;