import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import typeDefs from "./typeDefs";

const app = express();

// 👇️ CORS middleware MUST come before anything else
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true,
  })
);

app.use(express.json());

let nextId = 1;
const posts: any[] = [];

const resolvers = {
  Query: {
    hello: () => "Hello!",
    posts: () => posts,
  },
  Mutation: {
    createPost: (_: any, { title, content, authorId }: any) => {
      const post = { title, content, authorId }; // Include authorId!
      posts.push(post);
      return post;
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
