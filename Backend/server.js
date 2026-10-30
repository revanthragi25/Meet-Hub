const express=require('express')
const mongoose = require("mongoose");
require("dotenv").config()

const app=express()

app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(() => {
console.log("MongoDB Atlas connected successfully");})
.catch((error) => {
console.error("MongoDB connection failed:", error.message);
process.exit(1);
});

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Meet_Hub server is running on ${PORT}`);
})