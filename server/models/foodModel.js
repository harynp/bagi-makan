const mongoose = require('mongoose')
mongoose.connect('mongodb://harynp:harynp@pratice-shard-00-00-vajls.mongodb.net:27017,pratice-shard-00-01-vajls.mongodb.net:27017,pratice-shard-00-02-vajls.mongodb.net:27017/bagimakan?ssl=true&replicaSet=Pratice-shard-0&authSource=admin')
const Schema   = mongoose.Schema

var foodSchema = new Schema({
	title    : String,
  category : String,
  location : String,
  userId   : {
		type: Schema.Types.ObjectId,
		ref : 'User'
	},
	createdAt: Date,
	updatedAt: Date
})

var Customer = mongoose.model('Food', foodSchema)

module.exports = Customer