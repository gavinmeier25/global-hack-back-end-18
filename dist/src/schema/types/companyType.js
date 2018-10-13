'use strict';

var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLID = graphql.GraphQLID,
    GraphQLList = graphql.GraphQLList;

var AddressType = require('./addressType');
var ContactInfoType = require('./contactInfoType');
var CompanyUserType = require('./companyUserType');

var CompanyType = new GraphQLObjectType({
  name: 'CompanyType',
  fields: function fields() {
    return {
      id: { type: GraphQLID },
      companyName: { type: CustomerUserType },
      address: { type: AddressType },
      contactInfo: { type: ContactInfoType },
      companyContacts: new GraphQLList(CustomerUserType)
    };
  }
});

module.exports = CompanyType;