const User   = require('../models/userModel')

class UserCtrl {

  static createUser(req, res) {
    let newUser = new User(req.body)
    newUser.save()
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
  }

  static findAllUser(req, res) {
    User.find()
    .then(users => res.send(users))
    .catch(err => res.status(500).send(err))
  }

  static findUserById(req, res) {
    User.findById(req.params.id)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
  }

  static editUserById(req, res) {
    User.findById(req.params.id)
    .then(user => {
      name      = req.body.fullname,
      username  = req.body.username,
      password  = req.body.password,
      email     = req.body.email,
      updatedAt = new Date()

      user.save()
      .then(user => res.send(user))
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
  }
}

module.exports = UserCtrl