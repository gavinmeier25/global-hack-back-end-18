const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString} = graphql;

const ContactInfoType = new GraphQLObjectType({
  name:  'ContactInfoType',
  fields: () => ({
    email: {type: GraphQLString, unique: true},
    lastName: {type: GraphQLString},
    firstName: {type: GraphQLString},
    phoneNumber: {type: GraphQLString}  
})
});

const ContactInfoInputType = new GraphQLInputObjectType({
    name:  'ContactInfoInputType',
    fields: () => ({
      email: {type: GraphQLString, unique: true},
      lastName: {type: GraphQLString},
      firstName: {type: GraphQLString},
      phoneNumber: {type: GraphQLString}  
  })
  });

module.exports = {ContactInfoType, ContactInfoInputType}
