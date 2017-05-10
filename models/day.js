var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Activity = require('./activity');
var Restaurant = require('./restaurant');

var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER
  }
});

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'day_restaurant'});
Day.belongsToMany(Activity, {through: 'day_activity'});


module.exports = Day;
