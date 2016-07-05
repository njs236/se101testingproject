var isPositive = function (number) {
	return number > 0;
}

var isNegative = function (number) {
	return number < 0;
}

var isZero = function (number) {
	return number == 0;
}

var typeOfNumber = function(array) {
	var n;
	var result = [0,0,0];
	for (n=0; n< array.length;n++) {
		if (isPositive(array[n])) result[2]++;
		if (isNegative(array[n])) result[1]++;
		if (isZero(array[n])) result[0]++;
	}
	return result;
}