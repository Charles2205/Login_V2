import express from "express";
import { renderSignInPage, signIn, signUp, renderSignUpPage } from "../controllers/authController.js";


const router = express.Router();
router.get('/',renderSignInPage);
router.get("/sign-up",renderSignUpPage)
router.get('/sign-in',renderSignInPage)


router.post('/sign-up',signUp)
router.post('/sign-in', signIn)
// Handle unknown routes 
router.get("*",(req,res)=>{
    res.status(404).send("404 Not Found");
})



export default router;