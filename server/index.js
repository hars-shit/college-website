import express from 'express';
import cors from "cors";
import Connection from './databse/db.js';
import userModel from './modal/userSchema.js';


        

const app=express();
app.use(cors());
Connection();
app.use(express.json())

app.post('/register',async(req,res)=>{
//    const newUser= new form(req.body)
   try{
    const newUser=new userModel(req.body)
    const user=await newUser.save();
    res.status(200).json(user)
   }
   catch(error){
    res.status(404).json({message:error.message})
   }
})


app.listen(5002,()=>{
    console.log("Server is lisenting")
})