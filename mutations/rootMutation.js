import { GraphQLObjectType } from "graphql";
import userMutation from "./user.mutation.js";
import postMutation from "./post.mutation.js"

const rootMutation = new GraphQLObjectType({
    name: "mutation",
    description: "Description for the mutation",
    fields: {
        user: userMutation,
        post: postMutation
    }
})

export default rootMutation