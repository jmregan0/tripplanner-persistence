'use strict';
/* global $ tripModule */


  var hotels = $.get('/api/hotels');
  var restaurants = $.get('/api/restaurants');
  var activities = $.get('/api/activities');

 Promise.all([hotels, restaurants, activities])
 .then(function([hotels, restaurants, activities]){

   var options = buildOptions(hotels, restaurants, activities);

   attractionsModule = buildAttractionsModule(hotels, restaurants, activities);


   $(tripModule.load);

 })

/*<script src="/jquery/jquery.min.js"></script>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfQxgWt-LSZcEmTEN8581Uq9SzZHnpuys"></script>
    <script src="/js/utils.js"></script>
    <script src="/js/maps.js"></script>
    <script src="/js/trip.js"></script>
    <script src="/js/day.js"></script>
    <script src="/js/attraction.js"></script>
    <script src="/js/attractions.js"></script>
    <script src="/js/options.js"></script>
    <script src="/js/main.js"></script>*/
