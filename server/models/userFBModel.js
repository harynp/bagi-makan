const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FB = require('fb')
mongoose.connect('mongodb://harynp:harynp@pratice-shard-00-00-vajls.mongodb.net:27017,pratice-shard-00-01-vajls.mongodb.net:27017,pratice-shard-00-02-vajls.mongodb.net:27017/bagimakan?ssl=true&replicaSet=Pratice-shard-0&authSource=admin')
