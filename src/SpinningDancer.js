var SpinningDancer = function(top, left, timeBetweenSteps) {  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node.addClass("mario");

};

SpinningDancer.prototype = Object.create(MakeDancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.toggleClass('spin');
};