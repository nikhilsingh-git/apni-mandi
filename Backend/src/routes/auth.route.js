const express = require('express')
const controllers = require('../controllers/auth.controller')

const route = express.Router()

route.post('/register' , controllers.register )
route.post('/login' , controllers.login )

module.exports = route