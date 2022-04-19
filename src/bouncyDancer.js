var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.setPosition = function(top, left) {
  // bounceType = bounceType || 'bounce';
  var bounceSettings = {
    top: top,
    left: left,
    animation: 'bounce ' + this.timeBetweenSteps / 1000 + 's ease infinite'
    // 'animation-name': 'bounce',
    // 'animation-duration': this.timeBetweenSteps / 1000,
    // 'animation-timing-function': 'ease',
    // 'animation-iteration-count': 'infinite'
  };

  this.$node.css(bounceSettings);
};