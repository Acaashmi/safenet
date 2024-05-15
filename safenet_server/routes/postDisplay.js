import { Router } from "express";
import post from "../schema/post.js";

const postDisplay = Router();
 postDisplay.get("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    try {
        const query_location = req.query.location;
        if(query_location){
            const posts =await post.find({location:query_location}).sort("-date");
            res.json({data:posts,status:200});
        }
        else{
            const posts=await post.find({}).sort("-date");
            res.json({data:posts,status:200});
        }
    }
    catch(err){
        res.json({status:500,message:err});
    }
    
        
});
export default postDisplay;