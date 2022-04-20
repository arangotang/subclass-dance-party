var SpinningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.setPosition = function(top, left) {
  var spinSettings = {
    top: top,
    left: left,
    'border-radius': 0,
    animation: 'spin ' + this.timeBetweenSteps / 1000 + 's ease-in-out infinite'
  };
  this.$node.css(spinSettings);
};