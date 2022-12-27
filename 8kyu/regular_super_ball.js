//Task
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated. If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//Solution
var Ball = function (ballType) {
	if (!ballType) {
		this.ballType = 'regular';
	}
	else {
		this.ballType = 'super';
	}
};

// var Ball = function(ballType) {
// 	this.ballType = ballType || 'regular';
//  };