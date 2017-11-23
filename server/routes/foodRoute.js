const route = require('express').Router()
const Food = require('../controllers/foodController')
var images = require('../helpers/images')

route.get('/', Food.findAllFood)
route.get('/:id', Food.findFoodById)
route.post('/', images.multer.single('imgUrl'), images.sendUploadToGCS, Food.createFood)
route.put('/:id', Food.editFoodById)
route.delete('/:id', Food.deleteFoodById)
route.delete('/', Food.deleteAll)

module.exports = route
