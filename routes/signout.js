const router = require('express').Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

router.get('/', checkNotLogin, function(req, res) {
  res.send('登出')
})

module.exports = router
