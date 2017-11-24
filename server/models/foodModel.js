const mongoose = require('mongoose')
const Schema   = mongoose.Schema

var foodSchema = new Schema({
	title    : String,
  category : String,
  location : String,
	imgUrl	 : String,
  userId   : {
		type: Schema.Types.ObjectId,
		ref : 'User'
	},
	createdAt: Date,
	updatedAt: Date
})

var Customer = mongoose.model('Food', foodSchema)

module.exports = Customer
