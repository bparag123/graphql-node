import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt } from "graphql"
import users from "../data/users.js"
import userType from "../types/userType.js"
import postType from "../types/postType.js"
import posts from "../data/posts.js"

const query = new GraphQLObjectType({
    name: "rootQuery",
    description: "This is a Root Query For Users and Posts",
    fields: () => {
        return {
            users: {
                type: GraphQLList(userType),
                resolve: () => users
            },
            posts: {
                type: GraphQLList(postType),
                resolve: () => posts
            },
            user: {
                type: userType,
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: (_, args) => {
                    return users.find(user => user.id === args.id)
                }
            }
        }
    }
})

export default query