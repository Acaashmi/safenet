import { Router } from "express";
import bodyParser from "body-parser";
import multer from "multer";
import user from "../schema/user.js";

const loginRouter = Router();

//required for request form fetching
const upload = multer();
loginRouter.use(bodyParser.json());
loginRouter.use(bodyParser.urlencoded({ extended: true }));
loginRouter.use(upload.array());

loginRouter.post("/", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  try {
    const { username, password } = req.body;

    // If any field is missing then error
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    // Search if there is an user with given username
    const userRes = user.findOne({ username });

    userRes.then((data) => {
      // If user does not exists
      if (!data) {
        console.log("User Does Not Exist");
        return res.json({ message: "User Does Not Exist", status: 400 });
      }

      // If wrong password
      if (data.password !== password) {
        console.log("Wrong Password");
        return res.json({ message: "Wrong Password", status: 400 });
      }

      // If everything goes well send status 200
      return res.json({
        message: "Succesful login",
        status: 200,
        username: data.username,
        name: data.name,
      });
    });
  } catch (err) {
    // If error then catch it and return 400
    console.log(err);
    return res.json({ message: "Error", status: 400 });
  }
});

export default loginRouter;
