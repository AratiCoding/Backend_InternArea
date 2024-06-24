const express=require("express")
const router=express.Router();
const adminUsername='admin';
const adminPassword='admin';

router.post("/adminLogin",(req,res)=>{
    const {username,password}=req.body
    if(username===adminUsername || password===adminPassword){
        res.send("admin is here")
    }
    else{
        res.statusCode(401).send("Unauthorized")
    }
})

module.exports=router;