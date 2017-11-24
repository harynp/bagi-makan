const express = require('express')
const router = express.Router()
const fbController = require('../controllers/userFBController')
const FB = require('fb')

const dataFB = (req,res,next) => {
  FB.setAccessToken(req.headers.fbaccesstoken)
  next()
}

router.post('/', fbController.isLogin)

module.exports = router
