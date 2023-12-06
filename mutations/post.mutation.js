import { GraphQLString } from "graphql";
import postType from "../types/postType.js";
import Post from "../models/post.js";
import { NEW_POST } from "../constants.js";
import pubsub from "../pubsubInstance.js";

/**This is a Defination for Creating Post*/
const postMutation = {
  type: postType,
  name: "post",
  description: "This is a Post Creation Mutation",
  args: {
    userId: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
  },
  resolve: (parent, args) => {
    const post = new Post(args);
    pubsub.publish(NEW_POST, { postAdded: post });
    return post.save();
  },
};

export default postMutation;
