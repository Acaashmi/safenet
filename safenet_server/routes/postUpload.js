import { Router } from "express";
import bodyParser from "body-parser";
import multer from "multer";
import post from "../schema/post.js";

const postRouter = Router();

const upload = multer();
postRouter.use(bodyParser.json());
postRouter.use(bodyParser.urlencoded({ extended: true }));
postRouter.use(upload.array());

postRouter.post("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    try {
        const { title, content, date, location } = req.body;
    
        // If any field is missing then error
        if (!title || !content || !date || !location) {
          throw new Error("All fields are needed");
        }
    
        // // Check if user with same username exists
        // const userRes = await user.findOne({ username });
        // if (userRes) {
        //   return res.json({
        //     message: "User with same username exists",
        //     status: 400,
        //   });
        // }
    
        // Add user to database
        const newUser = await post.create({
          title,
          content,
          date,
          location
        });
        console.log(title,content,date,location);
    }
    catch(err){

    }
    
        
});
export default postRouter;