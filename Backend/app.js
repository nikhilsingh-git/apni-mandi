const express = require('express')
const connectDB = require ('./src/db/db')

require('dotenv').config()

const app = express()
connectDB()

app.use(express.urlencoded({extended:true ,limit:"16kb"}))
app.use(express.static("public"))




app.get("/" , (req , res) =>{
    res.send(`Hello Nikhil`)
})

module.exports= app