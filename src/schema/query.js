const mongoose = require('mongoose')
const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql
const UserType = require('./types/user')
const UserModel = require('../model/user')


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        findAllUsers: {
            type: new GraphQLList(UserType),
            resolve(){
                return UserModel.find({})
            }
        }
    })
})

module.exports = Query

