const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLId} = graphql;
const UserType= require('./userType')
const {ContactInfoType, ContactInfoInputType} = require('./contactInfoType')

const CompanyUserType = new GraphQLObjectType({
  name:  'CompanyUserType',
  fields: () => ({
    // id: {type: GraphQLId},
    user: {type: UserType},
    // company: {type: CompanyType},
    contactInfo: {type: ContactInfoType}
})
});
const CompanyUserInputType = new GraphQLInputObjectType({
    name: 'CompanyUserInputType',
    fields: () => ({
        // user: {type: UserInputType},
        contactInfo: {type: ContactInfoInputType}
        
    })
})

module.exports = {CompanyUserType, CompanyUserInputType};
