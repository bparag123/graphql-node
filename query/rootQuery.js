import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt } from "graphql"
import userType from "../types/userType.js"
import postType from "../types/postType.js"
import Post from "../models/post.js"
import User from "../models/user.js"

const query = new GraphQLObjectType({
    name: "rootQuery",
    description: "This is a Root Query For Users and Posts",
    fields: () => {
        return {
            users: {
                type: GraphQLList(userType),
                resolve: () => User.find({})
            },
            posts: {
                type: GraphQLList(postType),
                resolve: () => Post.find({})
            },
            user: {
                type: userType,
                args: {
                    id: { type: GraphQLString }
                },
                resolve: (_, args) => {
                    return User.findOne({_id: args.id})
                }
            }
        }
    }
})

export default query