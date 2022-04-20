var CountingDancer = function(top, left, timeBetweenSteps) {
  BouncyDancer.call(this, top, left, timeBetweenSteps);
  this.setCount();
};

CountingDancer.prototype = Object.create(BouncyDancer.prototype);
CountingDancer.prototype.constructor = CountingDancer;
CountingDancer.prototype.setCount = function() {
  let l = window.dancers ? window.dancers.length : 0;
  this.$node.text(l);
};