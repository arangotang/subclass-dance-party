var GrowingDancer = function(top, left, timeBetweenSteps) {
  BouncyDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer wiggle"></span>');
  this.$node.text(window.dancers.length);
};

GrowingDancer.prototype = Object.create(BouncyDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

