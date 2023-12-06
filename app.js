import express from "express";
import { graphqlHTTP } from "express-graphql";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  execute,
  subscribe,
} from "graphql";
import rootMutation from "./mutations/rootMutation.js";
import query from "./query/rootQuery.js";
import "./db.js";
import postType from "./types/postType.js";
import pubsub from "./pubsubInstance.js";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);
const PORT = 3000;

const RootSubscriptionType = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    postAdded: {
      type: postType,
      subscribe: () => pubsub.asyncIterator(NEW_POST),
    },
  },
});

const schema = new GraphQLSchema({
  query: query,
  mutation: rootMutation,
  subscription: RootSubscriptionType,
});

app.use(
  "/graphQL",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

new SubscriptionServer(
  {
    execute,
    subscribe,
    schema,
  },
  {
    server: httpServer,
    path: "/subscriptions",
  }
);
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${3000}`);
});
