import { GraphQLString } from "graphql"
import Post from "../models/post.js"
import commentType from "../types/commentType.js";

/**This is a Defination for Creating Comment*/
const commentMutation = {
    type: commentType,
    name: "comment",
    description: "This is a comment Mutation",
    args: {
        userId: {
            type: GraphQLString
        },
        postId: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        }
    },
    resolve: async (parent, args) => {
        const post = await Post.findOne({ _id: args.postId })
        post.comments.push(args)
        return await post.save()
    }
}

export default commentMutation