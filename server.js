require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const studentRouter = require('./routes/studentRouter')



const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api/student', studentRouter) 

app.listen(port,()=>{
    console.log("Start ",port);
})



const URI = process.env.MONGODB_URL

mongoose.connect(URI, {useNewUrlParser: true},err=>{
    if(err) throw err;
    console.log("Connect");
})