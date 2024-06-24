const bodyParser=require("body-parser")
const express=require("express")
const app=express();
const path=require("path")
const cors=require("cors");
const {connect}=require("./db")
const router=require("./Routes/index")

const port = 5000
app.use(cors());
app.use(bodyParser.json({limit :'50mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}))
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello this is my backend")
});
app.use("/api",router)
connect();
app.use((req,res,next)=>{
    req.header("Access-control-Allow-Origin","*")
    res.header("Access-control-Allow-Origin","*")
    next()
});
app.listen(port,()=>{
    console.log("server is running")
});