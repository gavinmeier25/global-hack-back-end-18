const mongoose = require('mongoose')
const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql
const UserType = require('./types/userType')
const UserModel = require('../model/user')
const CompanyType = require('./types/companyType')
const CompanyModel = require('../model/user')


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        findAllUsers: {
            type: new GraphQLList(UserType),
            resolve(){
                return UserModel.find({})
            }
        },
        findOneUser: {
            type: UserType,
            args: {
              id: { type: GraphQLID }
            },
            resolve(parentValue, {id}){
                return UserModel.findById(id)
        }},
        findAllCompanies : {
            type: new GraphQLList(CompanyType),
            resolve() {
                return CompanyModel.find({})
            }
    }
    })
})

module.exports = Query

