import { Schema, model } from "mongoose";

// Create a Schema for User
const postSchema = new Schema({
  username: String,
  name: String,
  postDate: Date,
  postLocation: String,
  postDetails: String,
});

const post = model("posts", postSchema);
export default post;
