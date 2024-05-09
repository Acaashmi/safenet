import { Router } from "express";
import bodyParser from "body-parser";
import multer from "multer";
import post from "../schema/post.js";

const postDisplay = Router();
 postDisplay.get("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    try {
        const posts = await post.find({});
        console.log(posts);
    }
    catch(err){

    }
    
        
});
export default postDisplay;