'use strict';

var _graphql = require('graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var GraphQLObjectType = _graphql2.default.GraphQLObjectType,
    GraphQLString = _graphql2.default.GraphQLString,
    GraphQLID = _graphql2.default.GraphQLID,
    GraphQLList = _graphql2.default.GraphQLList,
    GraphQLBoolean = _graphql2.default.GraphQLBoolean,
    GraphQLInt = _graphql2.default.GraphQLInt;

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