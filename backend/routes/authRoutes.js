import express from "express";
import { home, signIn, signUp } from "../controllers/authController.js";


const router = express.Router();
router.get('/',home);
router.get("/sign-up",signUp)
router.get('/sign-in',signIn)


router.post('/sign-up',signUp)
router.post('/sign-in', signIn)
// Handle unknown routes 
router.get("*",(req,res)=>{
    res.status(404).send("404 Not Found");
})



export default router;