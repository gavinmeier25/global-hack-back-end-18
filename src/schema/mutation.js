const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt
} = graphql
const mongoose = require('mongoose')

const UserModel = require('../model/user')
const CompanyModel = require('../model/company')

const UserType = require('./types/userType')
const CompanyType = require('./types/companyType')
const {AddressType, AddressInputType} = require('./types/addressType')
const {ContactInfoType, ContactInfoInputType} = require('./types/contactInfoType')
const {CompanyUserInputType} = require('./types/companyUserType')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'create, or update data',
    fields: {
        addUser: {
            type: UserType,
            args: {
               userName: { type: GraphQLString },
               password: { type: GraphQLString }
            },
            resolve(parentValue, {
                userName,
                password
            }){
                return ( new UserModel ({
                    userName,
                    password
                })).save()

            }
        },
        addCompany: {
            type: CompanyType,
            args: {
                companyName: { type: GraphQLString},
                address: { type: AddressInputType},
                contactInfo: { type: ContactInfoInputType},
                companyContacts: {type: new GraphQLList(CompanyUserInputType)}
            },
            resolve(parentValue, args) {
                return args
            }
        }
    }
})
module.exports = mutation