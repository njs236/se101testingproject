var isAscending = function (number1, number2) {
	return number2 >= number1;
}

var testAscendingSequence =function (array) {
	var n;
	var is = false;
	for (n=1; n<array.length; n++) {
		if (isAscending(array[n-1], array[n])) {
			is = true;
		}
		else {
			return false;
		}
	}
	return is;
}