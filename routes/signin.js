const router = require('express').Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

router.get('/', checkNotLogin, function(req, res) {
  res.send('登录页')
})

router.post('/', checkNotLogin, function(req, res) {
  res.send('登录')
})

module.exports = router
