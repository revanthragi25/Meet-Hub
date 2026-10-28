const express=require('express')

const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:"MeetHub Api is Running"
    })
})


app.listen("8080",()=>{
    console.log("Meet_Hub server is running on 8080");
    
})


module.exports=app;