import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fetch from "node-fetch";

const typeDefs = `#graphql
  type User {
    id: Int
    name: String
    email: String
  }

  type Post {
    _id: ID
    title: String
    content: String
    authorId: Int
  }

  type Query {
    users: [User]
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      const res = await fetch("http://user-service:4006/users");
      return res.json();
    },
    posts: async () => {
      const res = await fetch("http://post-service:4002/posts");
      return res.json();
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(() => {
  console.log("🚀 GraphQL service ready at http://localhost:4000/graphql");
});
