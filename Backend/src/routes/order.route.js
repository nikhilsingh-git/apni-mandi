const express = require("express")
const middleware = require("../middlewares/auth.middleware")
const controller = require("../controllers/order.controller")

const orderRoute = express.Router()

orderRoute.post("/add" , middleware , controller.addOrder)
orderRoute.get("/get" , middleware , controller.getOrder)
orderRoute.get("/getSingle/:id" , middleware , controller.getSingleOrder)
orderRoute.patch("/update/:id" , middleware , controller.updateOrder)


module.exports = orderRoute