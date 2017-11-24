const fbModel = require('../models/userFBModel')
const jwt = require('jsonwebtoken')
const FB = require('fb')
const mongoose = require('mongoose')

class Facebook {
  static isLogin (req,res) {
      console.log('AAAAAAAAAAAASSSSSSSSSZZZZ',req.body.headers.token);
      fbModel.FacebookModel(req.body.headers.token)
      .then(user => {
        let jwtToken = jwt.sign(user, process.env.SECRET_KEY)
        console.log('JWTTOKEN',jwtToken);
        let decoded = jwt.verify(jwtToken, process.env.SECRET_KEY)
        console.log('DECODED INI COY',decoded);
        fbModel.userFB.findOne({email: decoded.email})
        .then(user => {
          if (user) {
            return -1
          } else {
            fbModel.userFB.create({
              fb_id: decoded.id,
              name: decoded.name,
              email: decoded.email
            })
            .then(created => {
              res.send(created)
            })
            .catch(error => {
              console.log(error);
            })
          }
        })
        res.send({token: jwtToken, name: decoded.name, id:decoded.id})
      })
  }

  static checkUser (req,res) {
    fbModel.userFB.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  static tesPost (req,res) {
        fbModel.userFB.create({
          fb_id: req.body.fb_id,
          name: req.body.name,
          email: req.body.email
        })
        .then(data=> {
          res.send(data)
        })
        .catch(err => {
          console.log(err);
        })
      }
}

module.exports = Facebook
