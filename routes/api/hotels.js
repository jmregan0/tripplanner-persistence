var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel.js');

router.get('/', function(req, res, next){
  Hotel.findAll()
  .then(function(hotels){
    res.send(hotels);
  })
  .catch(function(err){
    console.error(err);
  })
})

module.exports = router;
