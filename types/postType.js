import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"
import users from "../data/users.js"
import userType from "./userType.js"

const postType = new GraphQLObjectType({
    name: "postType",
    description: "This is a Schema for Post",
    fields: () => {
        return {
            userId: { type: GraphQLInt },
            id: { type: GraphQLInt },
            title: { type: GraphQLString },
            body: { type: GraphQLString },
            user: {
                type: userType,
                resolve: (post) => users.find(user => post.userId === user.id)
            }
        }
    }
})

export default postType