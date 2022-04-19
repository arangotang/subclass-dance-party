var FlippingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FlippingDancer.prototype = Object.create(Dancer.prototype);
FlippingDancer.prototype.constructor = FlippingDancer;

FlippingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};