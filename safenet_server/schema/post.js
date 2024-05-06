import { Schema, model } from "mongoose";

// Create a Schema for User
const postSchema = new Schema({
  username: String,
  title: String,
  date: Date,
  location: String,
  content: String,
});

const post = model("posts", postSchema);
export default post;
