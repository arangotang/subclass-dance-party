var FlippingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FlippingDancer.prototype = Object.create(Dancer.prototype);
FlippingDancer.prototype.constructor = FlippingDancer;

FlippingDancer.prototype.setPosition = function(top, left) {
  var spinSettings = {
    top: top,
    left: left,
    'border-radius': 0,
    animation: 'spin ' + this.timeBetweenSteps / 1000 + 's ease-in-out infinite'
  };
  this.$node.css(spinSettings);
};