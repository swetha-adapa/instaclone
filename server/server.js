
const express =require("express")
const mongoose=require("mongoose")
const multer=require("multer")
const postsModal=require("./modal")
const cors=require("cors")
const app=express()
app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("Port connected at port 3001")
    }else{
        console.log(err)
    }
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("./images/uploads"))
// const upload=multer({dataStorage:"./images"})
mongoose.connect("mongodb+srv://dbUser:swetha123@cluster0.errc7.mongodb.net/firstDatabase?retryWrites=true&w=majority",(data)=>{
    console.log("Db Connected"),(err)=>{
        console.log(err)
    }
})
const postinfo={}
const storage=multer.diskStorage({
 destination: function(req,file,cb){
    cb(null,"./images/uploads")
 },
 filename: function(req,file,cb){
    postinfo.path=file.originalname
    const dateInfo=Date().split(" ")
    const date=dateInfo[2] +" "+dateInfo[1]+" "+ dateInfo[3]
    console.log(date)
    postinfo.date=date
    cb(null,file.originalname)
 }
})
const upload=multer({storage:storage})
app.post("/upload",upload.single("file"),async(req,res)=>{
    const data=new postsModal({
        author:req.body.author,
        location:req.body.location,
        description:req.body.desc,
        path:postinfo.path,
        date:postinfo.date
    })
    const result= await data.save()
    console.log(result)
})

app.get("/posts",(req,res)=>{
    postsModal.find().then((data)=>{
        res.status(200).send(data)
    })
})

const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: '...',
    api_key: '...',
    api_secret: '...'
});