import mongoose from "mongoose";

const formSchema=mongoose.Schema({
    email: String,
    password:String,
})

const form=mongoose.model('form',formSchema)
export default form