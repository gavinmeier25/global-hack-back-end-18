const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
  name:  'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

// const UserInputType = new GraphQLInputObjectType({
//   name: 'UserInputType',
//   fields: () => ({
//     userName: { type: GraphQLString},
//     password: { type: GraphQLString}
//   })
// })

module.exports = UserType
  // , UserInputType};
