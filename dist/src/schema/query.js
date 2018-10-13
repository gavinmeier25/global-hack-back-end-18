'use strict';

var mongoose = require('mongoose');
var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLList = graphql.GraphQLList,
    GraphQLID = graphql.GraphQLID,
    GraphQLNonNull = graphql.GraphQLNonNull;

var UserType = require('./types/userType');
var UserModel = require('../model/user');
var CompanyType = require('./types/companyType');
var CompanyModel = require('../model/user');

var Query = new GraphQLObjectType({
    name: 'Query',
    fields: function fields() {
        return {
            findAllUsers: {
                type: new GraphQLList(UserType),
                resolve: function resolve() {
                    return UserModel.find({});
                }
            },
            findAllCompanies: {
                type: new GraphQLList(CompanyType),
                resolve: function resolve() {
                    return CompanyModel.find({});
                }
            }
        };
    }
});

module.exports = Query;