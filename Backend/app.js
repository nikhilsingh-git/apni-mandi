const express = require('express')
const connectDB = require ('./src/db/db')
const cookiesParser = require('cookie-parser')
const route = require('./src/routes/auth.route')
const productRoute = require('./src/routes/product.route')
const orderRoute = require('./src/routes/order.route')

require('dotenv').config()

const app = express()
connectDB()

app.use(express.json())
app.use(cookiesParser())
app.use(express.urlencoded({extended:true ,limit:"16kb"}))
app.use(express.static("public"))

app.use("/api/auth" , route)
app.use("/api/product" , productRoute) 
app.use("/api/order" , orderRoute)


app.get("/" , (req , res) =>{
    res.send(`Hello Nikhil`)
})

module.exports= app