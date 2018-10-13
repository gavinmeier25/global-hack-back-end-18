'use strict';

var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLID = graphql.GraphQLID,
    GraphQLList = graphql.GraphQLList;


var UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: function fields() {
    return {
      id: { type: GraphQLID },
      userName: { type: GraphQLString },
      password: { type: GraphQLString }
    };
  }
});

module.exports = UserType;