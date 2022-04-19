var WigglyDancer = function(top, left, timeBetweenSteps) {
  BouncyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer wiggle"></span>');
};

WigglyDancer.prototype = Object.create(BouncyDancer.prototype);
WigglyDancer.prototype.constructor = WigglyDancer;
WigglyDancer.prototype.setPosition = function(top, left) {
  var wiggleBounceSettings = {
    top: top,
    left: left,
    animation: 'wiggleBounce ' + this.timeBetweenSteps / 1000 + 's ease infinite'
  };
  this.$node.css(wiggleBounceSettings);
};