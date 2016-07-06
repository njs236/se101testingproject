var isAscending = function (number1, number2) {
	// has to be able to handle equal numbers
	return number2 >= number1;
}

var testAscendingSequence =function (array) {
	// has to be able to give a tested condition for the sequence, but if it doesn't meet it, must break.
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