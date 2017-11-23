const mongoose = require('mongoose')
const Schema   = mongoose.Schema

var userSchema = new Schema({
	name      : String,
  username  : String,
  password  : String,
  email     : String,
	createdAt: Date,
	updatedAt: Date
})

var Customer = mongoose.model('User', userSchema)

module.exports = Customer
