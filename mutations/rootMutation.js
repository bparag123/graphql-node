import { GraphQLObjectType } from "graphql";
import userMutation from "./user.mutation.js";
import postMutation from "./post.mutation.js"
import commentMutation from "./comment.mutation.js";

/**This is a main Setup for Mutation Options
 * These fields are avaliable for client to Fire Mutation Query
 */
const rootMutation = new GraphQLObjectType({
    name: "mutation",
    description: "Description for the mutation",
    fields: {
        adduser: userMutation,
        addpost: postMutation,
        addcomment: commentMutation
    }
})

export default rootMutation