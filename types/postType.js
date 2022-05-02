import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"
import User from "../models/user.js"
import userType from "./userType.js"

const postType = new GraphQLObjectType({
    name: "postType",
    description: "This is a Schema for Post",
    fields: () => {
        return {
            userId: { type: GraphQLString },
            id: { type: GraphQLString },
            title: { type: GraphQLString },
            body: { type: GraphQLString },
            user: {
                type: userType,
                resolve: async (post) => {
                    return await User.findOne({ _id: post.userId })
                }
            }
        }
    }
})

export default postType