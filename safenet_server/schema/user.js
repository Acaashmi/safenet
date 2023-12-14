import { Schema, model } from "mongoose";

// Create a Schema for User
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
});

const user = model("users", userSchema);
export default user;
