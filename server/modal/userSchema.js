import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email: {
        type:String
    },
    password:{
        type:String
    }
},{timestamps:true})

const userModel=mongoose.model('user',userSchema)
export default userModel