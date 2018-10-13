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

const UserType = require('./types/user')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'create, or update data',
    fields: {
        addUser: {
						name: 'Test',
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
        }
    }
})
module.exports = mutation