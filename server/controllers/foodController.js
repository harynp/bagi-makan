const Food   = require('../models/foodModel')
class Foodctrl {

  static createFood(req, res) {
    Food.create({
      title    : req.body.title,
      category : req.body.category,
      location : req.body.location,
    	imgUrl	 : req.file.cloudStoragePublicUrl
    })
    .then(food => res.send(food))
    .catch(err => res.status(500).send(err))
  }

  static findAllFood(req, res) {
    Food.find()
    .populate('userId')
    .then(foods => res.send(foods))
    .catch(err => res.status(500).send(err))
  }

  static findFoodById(req, res) {
    Food.findById(req.params.id)
    .populate('userId')
    .then(food => res.send(food))
    .catch(err => res.status(500).send(err))
  }

  static editFoodById(req, res) {
    Food.findById(req.params.id)
    .then(food => {
      title     = req.body.title,
      category  = req.body.category,
      location  = req.body.location,
      updatedAt = new Date()

      food.save()
      .then(food => res.status(200).send(food))
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
  }

  static deleteFoodById(req, res) {
    Food.findByIdAndRemove({_id:req.params.id})
    .then(food => res.status(200).send(food))
    .catch(err => res.status(500).send(err))
  }

  static deleteAll (req,res) {
    Food.remove({})
    .then(food => res.status(200).send(food))
    .catch(err => res.status(500).send(err))
  }
}

module.exports = Foodctrl
