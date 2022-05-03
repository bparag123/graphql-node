import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql"
import User from "../models/user.js"
import commentType from "./commentType.js"
import userType from "./userType.js"

/**This is a Basic Schema which client can access data accordingly*/
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
            },
            comments: {
                type: new GraphQLList(commentType),
                resolve: async (post) => {
                    return post.comments
                }
            }
        }
    }
})

export default postType