import { GraphQLString } from 'graphql';
import postType from "../types/postType.js"
import Post from '../models/post.js';

const postMutation = {
    type: postType,
    name: "post",
    description: "This is a Post Creation Mutation",
    args: {
        userId: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        body: {
            type: GraphQLString
        }
    },
    resolve: (parent, args) => {
        const post = new Post(args)
        return post.save()
    }
}

export default postMutation