import shortid from "shortid";
// const URL=require("../models/url.js") 
import URL from "../models/url.js";
async function  GenerateNewShortURL(req,res) {  
    const  body = req.body; 
    if(!body.url)return res.status(400).json({error:"url is required"})
    const shortId=shortid(8); 
    await URL.create({
        shortId:shortId,
        redirectURL:body.url, 
    }); 
    return  res.json({short_link:`http://localhost:8001/${shortId}`});
} 
export default GenerateNewShortURL;