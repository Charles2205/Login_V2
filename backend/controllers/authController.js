import Users from "../models/users.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const renderSignInPage = async(req,res)=>{
    res.render("home")
}



export const signUp = async (req, res) => {
  try {
    const { username, password, ...rest } = req.body;
    const existingUser = await Users.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({ ...rest, username, password: hashedPassword });
    res.status(200).render('register', { user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  
export const renderSignUpPage = (req, res) => {
  try {
    res.status(200).render('register');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
    console.log(user);
    
    if (!user) {
      return res.status(404).json({ message: 'Username not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({ message: 'Sign in successful', token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};