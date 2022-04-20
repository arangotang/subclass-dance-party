$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    for (let i = 0; i < dancers.length; i++) {
      let width = (i + 0.5) * $('body').width() / dancers.length;
      dancers[i].lineUp($('body').height() * 0.5, width);
    }
  });


  $('body').on('click', '.dancer', function(event) {
    console.log('hi');
    var $position = $(this).position();
    var y1 = $position.top;
    var x1 = $position.left;

    var closestNeighbor, x2, y2, distance;

    for (let i = 0; i < dancers.length; i++) {
      var $position2 = dancers[i].$node.position();
      y2 = $position2.top;
      x2 = $position2.left;
      distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      if (distance !== 0 && distance < 400) {
        dancers[i].$node.addClass('neighbor');
      }
    }
  });

});