const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
  name:  'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

module.exports = UserType;
