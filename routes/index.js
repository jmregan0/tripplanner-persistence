var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var hotelRoutes = require('./api/hotels');
var restaurantRoutes = require('./api/restaurants');
var activityRoutes = require('./api/activities');
var dayRoute = require('./api/days');

router.use('/api/hotels', hotelRoutes);
router.use('/api/restaurants', restaurantRoutes);
router.use('/api/activities', activityRoutes);
router.use('/api/days', dayRoute);


router.get('/', function(req, res, next) {
  // Promise.all([
  //   Hotel.findAll(),
  //   Restaurant.findAll(),
  //   Activity.findAll()
  // ])
  // .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      // templateHotels: dbHotels,
      // templateRestaurants: dbRestaurants,
      // templateActivities: dbActivities
    });
  // })
  // .catch(next);
});

module.exports = router;
