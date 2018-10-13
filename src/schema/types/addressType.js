const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString } = graphql;

const AddressType = new GraphQLObjectType({
    name:  'AddressType',
    fields: () => ({
      streetAddress: {type: GraphQLString},
      city: {type: GraphQLString},
      state: {type: GraphQLString},
      zipCode: {type: GraphQLString}    
  })
  });
  
  const AddressInputType = new GraphQLInputObjectType({
      name:  'AddressInputType',
      fields: () => ({
        streetAddress: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zipCode: {type: GraphQLString}    
    })
    });
  
  module.exports = 
                  { AddressType,
                    AddressInputType
                  };