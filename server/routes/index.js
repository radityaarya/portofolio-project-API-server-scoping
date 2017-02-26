var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/meal', function (req, res, next) {
  let array = ['Nasi Padang', 'Nasi Goreng', 'Nasi Biryani', 'Nasi Liwet', 'Nasi Ayam', 'Nasi Kuning']
  res.json(array)
})

module.exports = router
