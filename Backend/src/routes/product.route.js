const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const controllers = require("../controllers/product.controller")

const productRoute = express.Router()

  productRoute.post('/add' ,authMiddleware , controllers.addProducts )
  productRoute.get('/get' ,authMiddleware , controllers.getProducts )
  productRoute.get('/single/:id' ,authMiddleware , controllers.getSingleProduct)

module.exports = productRoute