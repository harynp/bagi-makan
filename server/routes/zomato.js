const router = require('express').Router()
const zomatoController = require('../controllers/zomato')

router.get('/', zomatoController.getLocation)

module.exports = router
