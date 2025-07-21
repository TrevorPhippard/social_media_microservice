import express from "express";
import mongoose from "mongoose";

//@ts-ignore
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  authorId: Number,
});

const Post = mongoose.model("Post", postSchema);

const router = express.Router();

router.get("/posts", async (_, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

export default router;
