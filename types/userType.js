import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt } from "graphql"
import postType from "./postType.js"
import posts from '../data/posts.js';

const userType = new GraphQLObjectType({
    name: "UserType",
    description: "This is a Schema for User",
    fields: () => {
        return {
            id: { type: GraphQLInt },
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            username: { type: GraphQLString },
            posts: {
                type: GraphQLList(postType),
                resolve: (user) => {
                    return posts.filter(post => post.userId === user.id)
                }
            }
        }
    }
})

export default userType