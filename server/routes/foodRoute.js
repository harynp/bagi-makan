const route = require('express').Router()
const Food = require('../controllers/foodController')

route.get('/', Food.findAllFood)
route.get('/:id', Food.findFoodById)
route.post('/', Food.createFood)
route.put('/:id', Food.editFoodById)
route.delete('/:id', Food.deleteFoodById)

module.exports = route
