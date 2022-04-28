import express from "express";
import { graphqlHTTP } from "express-graphql"
import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql"
import query from "./query/rootQuery.js";

const app = express()
const PORT = 3000


const schema = new GraphQLSchema({
    query: query
})

app.use("/graphQL", graphqlHTTP(
    {
        graphiql: true,
        schema
    }
))


app.listen(PORT, () => {
    console.log(`Server is running on port ${3000}`)
})