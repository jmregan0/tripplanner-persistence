'use strict';
/* global $ dayModule */

/**
 * A module for managing multiple days & application state.
 * Days are held in a `days` array, with a reference to the `currentDay`.
 * Clicking the "add" (+) button builds a new day object (see `day.js`)
 * and switches to displaying it. Clicking the "remove" button (x) performs
 * the relatively involved logic of reassigning all day numbers and splicing
 * the day out of the collection.
 *
 * This module has four public methods: `.load()`, which currently just
 * adds a single day (assuming a priori no days); `switchTo`, which manages
 * hiding and showing the proper days; and `addToCurrent`/`removeFromCurrent`,
 * which take `attraction` objects and pass them to `currentDay`.
 */

var tripModule = (function () {

  // application state

  var days = [],
      currentDay;

  // jQuery selections

  var $addButton, $removeButton;
  $(function () {
    $addButton = $('#day-add');
    $removeButton = $('#day-title > button.remove');
  });

  // method used both internally and externally

  function switchTo (newCurrentDay) {
    if (currentDay) currentDay.hide();
    currentDay = newCurrentDay;
    currentDay.show();
  }

  // jQuery event binding

  $(function () {
    $addButton.on('click', addDay);
    $removeButton.on('click', deleteCurrentDay);
  });
   //********************** add NewDay here... so probably do first ajax thing here....?
  function addDay () {
    $.post('/api/days',{number: days.length + 1}, function(data) {
      return data.number;
    })
    .then((day) => {
      if (this && this.blur) this.blur(); // removes focus box from buttons
      var newDay = dayModule.create(day); // dayModule
      days.push(newDay);
      if (days.length === 1) {
      currentDay = newDay;
    }
    switchTo(newDay);
  })

  }
    //------------------ Delete single day here....
  function deleteCurrentDay () {
    // prevent deleting last day
    if (days.length < 2 || !currentDay) return;
    // delete from database
    var dayId = currentDay.id
    console.dir(dayId);
    $.ajax({
      method: 'DELETE',
      url: '/api/days/' + dayId
    })
    .then(function(){
      // remove from the collection
      var index = days.indexOf(currentDay),
      previousDay = days.splice(index, 1)[0],
      newCurrent = days[index] || days[index - 1];
      // fix the remaining day numbers
      days.forEach(function (day, i) {
        day.setNumber(i + 1);
      });
      switchTo(newCurrent);
      previousDay.hideButton()
    });
  }

  // globally accessible module methods

  var publicAPI = {

    load: function () {
      $(addDay);
    },

    switchTo: switchTo,
        //***********adding any kind of attraction here... look into this more...
    addToCurrent: function (attraction) {
      let dayNumber = currentDay.number;
      currentDay.addAttraction(attraction, dayNumber);
    },
      //----------- removing any kind of attraction here... look into this more....
    removeFromCurrent: function (attraction) {
      currentDay.removeAttraction(attraction);
    }

  };

  return publicAPI;

}());
