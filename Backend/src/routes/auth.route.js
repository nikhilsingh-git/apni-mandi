const express = require('express')
const controllers = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const route = express.Router()

route.post('/register' , controllers.register )
route.post('/login' , controllers.login )
route.post('/logout' , authMiddleware , controllers.logout)
route.get('/me' , authMiddleware , controllers.getSingleUser)
route.post('/profile' , authMiddleware, controllers.profile)

module.exports = route