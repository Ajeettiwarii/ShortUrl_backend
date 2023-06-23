import express from "express"; 
import GenerateNewShortURL from "../controllers/url.js";
// const {handelGenerateNewShortURL}=require("../controllers/url");
const router=express.Router();
router.post("/",GenerateNewShortURL); 
export default router;