describe('countingDancer', function() {

  var countingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    countingDancer = new CountingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(countingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be animated', function() {
    expect(countingDancer.$node.css('animation')).to.not.equal(undefined);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(countingDancer, 'step');
      expect(countingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(countingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(countingDancer.step.callCount).to.be.equal(2);
    });
  });
});
