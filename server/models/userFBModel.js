const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FB = require('fb')

const userFBSchema = new mongoose.Schema({
  fb_id: {type: String},
  name: {type: String},
  email: {type: String}
})

function FacebookModel (token) {
  return new Promise ((resolve,reject) => {
    FB.api('me', {fields: ['id','name','email'], access_token: token}, (response) => {
      resolve(response)
    })
  })
}

const userFB = mongoose.model('userFB', userFBSchema)

module.exports = {
  userFB,
  FacebookModel
}
