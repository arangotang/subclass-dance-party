var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer bounce"></span>');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.setPosition = function(top, left) {
  var bounceSettings = {
    top: top,
    left: left,
    animation: 'bounce ' + this.timeBetweenSteps / 1000 + 's ease infinite'
  };
  this.$node.css(bounceSettings);
};