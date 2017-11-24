const express = require('express')
const router = express.Router()
const fbController = require('../controllers/userFBController')
const FB = require('fb')

const dataFB = (req,res,next) => {
  console.log('AAAAAAAAAA',req.headers);
  FB.setAccessToken(req.headers.fbaccesstoken)
  next()
}

router.post('/', dataFB,fbController.isLogin)

module.exports = router
