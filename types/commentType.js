import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import User from "../models/user.js";
import userType from "./userType.js";

/**This is a Basic Schema which client can access data accordingly*/
const commentType = new GraphQLObjectType({
  name: "Comment",
  description: "This is a Type Defination of Comment",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
      },
      userId: {
        type: GraphQLString,
      },
      text: {
        type: GraphQLString,
      },
      postId: {
        type: GraphQLString,
      },
      user: {
        type: userType,
        resolve: (comment) => {
          return User.findOne({ _id: comment.userId });
        },
      },
      createdAt: {
        type: GraphQLString,
      },
    };
  },
});

export default commentType;
