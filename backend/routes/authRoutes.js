import express from "express";
import { login } from "../controllers/authController.js";


const router = express.Router();
router.get('/',login);
// Handle unknown routes 
router.get("*",(req,res)=>{
    res.status(404).send("404 Not Found");
})



export default router;