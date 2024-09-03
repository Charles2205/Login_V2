import Users from "../models/users.models.js";

export const home = async(req,res)=>{
    res.send("home")
}



export const signUp = async (req, res) => {
    try {
      const users = await Users.create(req.body);
      res.status(200).render('register', { users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  


  export const signIn =async(req,res)=>{
    try {
        const {username} = req.body
        const results = await Users.findOne(username)
        if(!results){
            res.status(200).render('register');
        }
        else{
            res.render('home')
            
        }
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  }