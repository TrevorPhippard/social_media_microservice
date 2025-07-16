import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    userId: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Post", postSchema);
