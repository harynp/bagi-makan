const mongoose = require('mongoose')
mongoose.connect('mongodb://harynp:harynp@pratice-shard-00-00-vajls.mongodb.net:27017,pratice-shard-00-01-vajls.mongodb.net:27017,pratice-shard-00-02-vajls.mongodb.net:27017/bagimakan?ssl=true&replicaSet=Pratice-shard-0&authSource=admin')
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