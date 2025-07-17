import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();

// 👇️ CORS middleware MUST come before anything else
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true,
  })
);

app.use(express.json());

const typeDefs = `#graphql
  type User {
    id: Int
    username: String
    email: String
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }

  type Query {
    hello: String
  }
`;

let nextId = 1;
const users: any[] = [];

const resolvers = {
  Query: {
    hello: () => "Hello!",
  },
  Mutation: {
    createUser: (_: any, { username, email, password }: any) => {
      const user = { id: nextId++, username, email };
      users.push(user);
      return user;
    },
  },
};

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  // 👇️ Apollo middleware added AFTER cors/json
  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => {
    console.log("🚀 Server running on http://localhost:4000/graphql");
  });
}

startServer();
