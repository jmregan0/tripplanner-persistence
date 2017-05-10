var express = require('express');
var router = express.Router();
var Day = require('../../models/day.js');

router.get('/', function(req, res, next){
  Day.findAll()
  .then(function(day){
    res.send(day);
  })
  .catch(function(err){
    console.error(err);
  })
})

router.get('/:n', function(req, res, next){
  res.send('you reached day finder')
  //get all for specific day
  //db call here...
})

router.post('/:n', function(req, res, next){
  res.send('posting days')
})

router.post('/:n/restaurants', function(req, res, next){
  res.send('add restaurant to selected day');
})

router.post('/:n/hotel', function(req, res, next){
  res.send('add hotel to a selected day')
})

router.post('/:n/activity', function(req, res, next){
  res.send('add activity to selected day')
})

router.delete('/:n', function(req, res, next){
  res.send('for deleting entire day')
})

router.delete('/:n/restaurants', function(req, res, next){
  res.send('delete restaurant to selected day')
})

router.delete('/:n/hotel', function(req, res, next){
  res.send('delete hotel to a selected day')
})

router.delete('/:n/activitiy', function(req, res, next){
  res.send('delete activity to selected day')
})

module.exports = router;

