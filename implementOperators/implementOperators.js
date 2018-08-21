/*  Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction.
Your functions will only have to handle integer math.
Note: Don’t put any complex math in the comments in your code, or the tests may fail.
EXAMPLES:
multiply(5, 2) === 10
divide(5, 2) === 2
modulo(5, 2) === 1  */
var multiply = function(x, y) {
	var result = 0;
	var negX, negY = false;

	if ( x === 1 || y === 1 ) { 
		if (x > y) {
			return x;
		}
	}

	if (x < 0) {
		var origX = x;
		negX = true;
		x = x - x - x;
	}
	if (y < 0) {
		var origY = y;
		negY = true;
		y = y - y - y;
	}

	while (y > 0) {
		result += x;
		y--
	}
	if (negX && negY === false) {
		result = -result;
	}
	return result;
};

var divide = function(x, y) {
	var res = 0;
	while (x >= 0) {
		x -= y;
		res++;
	}
	return (res - 1);

};

var modulo = function(x, y) {
	while (x - y >= 0) {
		x -= y;
		if (x < 0) {
			return x;
		}
	}
	return x;
};