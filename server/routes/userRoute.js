const route = require('express').Router()
const User = require('../controllers/userController')

route.get('/', User.findAllUser)
route.get('/:id', User.findUserById)
route.post('/', User.createUser)
route.put('/:id', User.editUserById)

module.exports = route
