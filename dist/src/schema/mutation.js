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
var CompanyModel = require('../model/company');

var UserType = require('./types/userType');
var CompanyType = require('./types/companyType');
var AddressType = require('./types/addressType');
var ContactInfoType = require('./types/contactInfoType');
var CompanyUserType = require('./types/companyUserType');

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
        },
        addCompany: {
            type: CompanyType,
            args: {
                companyName: { type: GraphQLString },
                address: { type: AddressType },
                contactInfo: { type: ContactInfoType },
                companyContacts: new GraphQLList({ type: CustomerUserType })
            },
            resolve: function resolve(parentValue, args) {
                return console.log(args);
            }
        }
    }
});
module.exports = mutation;