// import  express  from "express"
// import form from "../modal/formSchema.js";


// const router = express.Router();


router.post('/register',async(req,res)=>{
    const newUser = new form(req.body);
    try{
        const user = await newUser.save();
        res.status(200).json(user)  
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
// router.get('/reg',(req,res)=>{
//     // res.json({message:'hiii'})
//     console.log('hiii biis')
// })

// export default router
