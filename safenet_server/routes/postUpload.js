import { Schema, model } from "mongoose";

// Create a Schema for User
const postSchema = new Schema({
  name: String,
  username: String,
  password: String,
});

const post = model("posts", postSchema);
export default post;