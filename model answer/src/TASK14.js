var lower = function (number1, number2) {
	if (number1 < number2) return number1;
	if (number2 < number1) return number2;
	return;
}

var outputLowestValue = function (array) {
		var n;
	lowest = array[0];
	for (n = 1; n <= array.length; n++) {
		// check to see if current match has a higher number than the first position.
		if (lower(array[n], array[n-1]) < lowest) {
			// check to see if the match is equal.
			if (lower(array[n], array[n-1]) == null)
				lowest =  array[n];
			else {
				//every other situation.
				lowest = lower(array[n], array[n-1]);
			}
		}
	}
	return lowest;
}