var express = require('express');
var router = express.Router();
var Restaurant = require('../../models/restaurant.js');

router.get('/', function(req, res, next){
  Restaurant.findAll()
  .then(function(restaurants){
    res.send(restaurants);
  })
  .catch(function(err){
    console.error(err);
  })
})

module.exports = router;
