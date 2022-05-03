import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import userType from "../types/userType.js";
import User from "../models/user.js";

/**This is a Defination for Creating User*/
const userMutation = {
    name: "user",
    description: "Create a New User",
    args: {
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        }
    },
    type: userType,
    resolve: (parent, args) => {
        console.log(parent);
        console.log(args);
        const user = new User(args)
        try {
            return user.save()
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default userMutation