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
	/* format of result:
	result[0] is number of zeros
	result[1] is number of negatives
	result[2] is number of positives
	*/
	var n;
	var result = [0,0,0];
	for (n=0; n< array.length;n++) {
		if (isPositive(array[n])) result[2]++;
		if (isNegative(array[n])) result[1]++;
		if (isZero(array[n])) result[0]++;
	}
	return result;
}