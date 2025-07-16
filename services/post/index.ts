import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

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

app.get("/posts", async (_, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

app.listen(4002, () => console.log("Post service listening on port 4002"));
