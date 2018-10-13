'use strict';

var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLId = graphql.GraphQLId;


var CustomerUserType = new GraphQLObjectType({
  name: 'CustomerUserType',
  fields: function fields() {
    return {
      id: { type: GraphQLId },
      user: { type: UserType },
      company: { type: CompanyType },
      contactInfo: { type: ContactInfoType }
    };
  }
});

module.exports = CustomerUserType;