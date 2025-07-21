import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import typeDefs from "./typeDefs";
// import jwt from "jsonwebtoken";
import axios from "axios";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const app = express();

// 👇️ CORS middleware MUST come before anything else
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true,
  })
);
app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});
app.use(express.json());

const postServiceUrl =
  process.env.POST_SERVICE_URL || "http://post:4001/api/posts";
const searchServiceUrl =
  process.env.SEARCH_SERVICE_URL || "http://search:9200/api/search";

const profileServiceUrl =
  process.env.PROFILE_SERVICE_URL || "http://profile:4002/api/profiles";

const resolvers = {
  Query: {
    profile: async (_: any, args: { userId: string }) => {
      const res = await axios.get(`${profileServiceUrl}/${args.userId}`);
      return res.data;
    },

    // GET /api/profiles
    profiles: async () => {
      const res = await axios.get(profileServiceUrl);
      return res.data;
    },

    posts: async () => {
      const res = await axios.get(postServiceUrl);
      return res.data;
    },
    followers: async () => {
      const res = await axios.get(postServiceUrl);
      return res.data;
    },
  },
  Mutation: {
    createPost: async (_: any, args: { authorId: string; content: string }) => {
      const res = await axios.post(postServiceUrl, {
        authorId: args.authorId,
        content: args.content,
      });
      return res.data;
    },

    followUser: async (_: any, args: { userId: string; targetId: string }) => {
      await axios.post(
        `${profileServiceUrl}/${args.userId}/follow/${args.targetId}`
      );
      return "Followed user successfully";
    },
    unfollowUser: async (
      _: any,
      args: { userId: string; targetId: string }
    ) => {
      await axios.delete(
        `${profileServiceUrl}/${args.userId}/unfollow/${args.targetId}`
      );
      return "Unfollowed user successfully";
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
