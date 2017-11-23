const route = require('express').Router()
const Food = require('../controllers/foodController')
var images = require('../helpers/images')

route.get('/', Food.findAllFood)
route.get('/:id', Food.findFoodById)
// route.post('/', Food.createFood)

route.post('/',
  images.multer.single('imgUrl'),
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  }, Food.createFood)

route.put('/:id', Food.editFoodById)
route.delete('/:id', Food.deleteFoodById)


module.exports = route
