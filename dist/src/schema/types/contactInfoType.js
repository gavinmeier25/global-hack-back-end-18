'use strict';

var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString;


var ContactInfoType = new GraphQLObjectType({
  name: 'ContactInfoType',
  fields: function fields() {
    return {
      email: { type: GraphQLString, unique: true },
      lastName: { type: GraphQLString },
      firstName: { type: GraphQLString },
      phoneNumber: { type: GraphQLString }
    };
  }
});

module.exports = ContactInfoType;