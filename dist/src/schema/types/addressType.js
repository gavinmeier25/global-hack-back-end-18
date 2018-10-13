'use strict';

var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString;


var AddressType = new GraphQLObjectType({
  name: 'AddressType',
  fields: function fields() {
    return {
      streetAddress: { type: GraphQLString },
      city: { type: GraphQLString },
      state: { type: GraphQLString },
      zipCode: { type: GraphQLString }
    };
  }
});

module.exports = AddressType;