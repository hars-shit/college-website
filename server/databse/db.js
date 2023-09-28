import mongoose from "mongoose"


const Connection=async()=>{
    const URL=`mongodb+srv://upadhyayharshit05:harshitdb@cluster0.bdrrlp0.mongodb.net/?retryWrites=true&w=majority`

    try{
        await mongoose.connect(URL,{
            useNewUrlParser:true
        })
        console.log("Databse connected successfully")
    }
    catch(error){
        console.log('error in db',error)
    }

}
export default Connection