const express=require('express')
require("dotenv").config()

const authRoutes=require('./routes/auth.routes')
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Meet_Hub server is running on ${PORT}`);
})