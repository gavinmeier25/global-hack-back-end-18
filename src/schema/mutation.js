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
const AddressType = require('./types/addressType')
const {ContactInfoType, ContactInfoInputType} = require('./types/contactInfoType')
const CompanyUserType = require('./types/companyUserType')

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
                // address: { type: AddressType},
                contactInfo: { type: ContactInfoInputType},
                // companyContacts: new GraphQLList({type: CustomerUserType})
            },
            resolve(parentValue, args) {
                return console.log(args)
            }
        }
    }
})
module.exports = mutation