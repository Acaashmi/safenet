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

    try{
        // Add user to database
        const newUser = await post.create({
          title,
          content,
          date,
          location
        });
      res.send().statusCode(200);
    }
    catch(err){
      res.send().statusCode(500);
    }       
});
export default postRouter;