import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt } from "graphql"
import postType from "./postType.js"
import Post from "../models/post.js";

const userType = new GraphQLObjectType({
    name: "UserType",
    description: "This is a Schema for User",
    fields: () => {
        return {
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            username: { type: GraphQLString },
            posts: {
                type: GraphQLList(postType),
                resolve: (user) => {
                    return Post.find({ userId: user.id })
                }
            }
        }
    }
})

export default userType