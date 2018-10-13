const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const {AddressType} = require('./addressType')
const {ContactInfoType} = require('./contactInfoType')
const {CompanyUserType} = require('./companyUserType')

const CompanyType = new GraphQLObjectType({
  name:  'CompanyType',
  fields: () => ({
    id: { type: GraphQLID },
    companyName: {type: GraphQLString},
    address: { type: AddressType},
    contactInfo: {type: ContactInfoType},
    companyContacts:{type: new GraphQLList(CompanyUserType)}
})
});

module.exports = CompanyType;
