var isDouble = function (number, number2) {
	return number == number2/2;
}

var countDoubles = function(array) {
	// looks for doubles in the sequence.
	var n;
	var count =0;
	for (n=1; n< array.length; n++) {
		if (isDouble(array[n-1], array[n])) count++;
	}
	return count;
}