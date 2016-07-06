var lower = function (number1, number2) {
	if (number1 < number2) return number1;
	if (number2 < number1) return number2;
	return;
}

var outputLowestValue = function (array) {
		var n;
	lowest = array[0];
	for (n = 1; n <= array.length; n+=1) {
		// each match up compares numbers. the function determines what will the outcome be.
		var compareNumbers = lower(array[n], array[n-1]);
		// check to see if current match has a lower number than the first position.
		if ( compareNumbers < lowest) {
			// check to see if the match is equal.
			if (compareNumbers  == null)
				lowest =  array[n];
			else {
				//every other situation.
				lowest = compareNumbers ;
			}
		}
	}
	return lowest;
}