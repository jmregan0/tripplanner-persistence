var express = require('express');
var router = express.Router();
var Activity = require('../../models/activity.js');

router.get('/', function(req, res, next){
  Activity.findAll()
  .then(function(activities){
    res.send(activities);
  })
  .catch(function(err){
    console.error(err);
  })
})
module.exports = router;
