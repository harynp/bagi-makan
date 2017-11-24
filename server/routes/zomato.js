const route = require('express').Router()
const Zomato = require('../controllers/zomatoController')

route.post('/', Zomato.getAddress)

module.exports = route
