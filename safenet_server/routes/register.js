import { Router } from "express";
import bodyParser from "body-parser";
import multer from "multer";
import user from "../schema/user.js";

const registerRouter = Router();

//required for request form fetching
const upload = multer();
registerRouter.use(bodyParser.json());
registerRouter.use(bodyParser.urlencoded({ extended: true }));
registerRouter.use(upload.array());

registerRouter.post("/", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  try {
    const { name, username, password } = req.body;

    // If any field is missing then error
    // if (!username || !password || !name) {
    //   throw new Error("All fields are needed");
    // }

    // Check if user with same username exists
    const userRes = await user.findOne({ username });
    if (userRes) {
      return res.json({
        message: "User with same username exists",
        status: 400,
      });
    }

    // Add user to database
    await user.create({
      name,
      username,
      password,
    });

    // If everything goes well send status 200
    return res.json({ message: "User Created", status: 200 });
    console.log("User Created");
  } catch (err) {
    // If any error occurs just say an error has occurred
    console.log(err);
    return res.json({ message: "Error", status: 400 });
  }
});

export default registerRouter;

// Improvement : Direct Login, Send JWT Token
