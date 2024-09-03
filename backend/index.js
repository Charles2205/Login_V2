import app from "./app.js"

import mongoose from 'mongoose';
const URI = process.env.URI




const PORT = process.env.PORT || 1912



app.listen(PORT,async()=>{
   await mongoose.connect(URI)
.then(()=>{
    console.log("Connected to DB");    
}).catch(()=>{
    console.log("connection failed");
    
})
       console.log(`Server running on http://localhost:${PORT}`);
    
})

