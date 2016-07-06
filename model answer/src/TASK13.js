var parseNumber = function(number) {
	if (number > 100) return false;
	if (number < 0) return false;
	if (isNaN(number)) return false;
	return number;
}

var outputHighestValue= function(array) {
	var n;
	highest = array[0];
	for (n = 1; n < array.length; n+=1) {
		// each match up compares numbers. the function determines the outcome of it.
		var compareNumbers = higher(array[n], array[n-1]);
		// check to see if current match has a higher number than the first position.
		if ( compareNumbers > highest) {
			// check to see if the match is equal.
			if (compareNumbers == null)
				highest =  array[n];
			else {
				//every other situation.
				highest = compareNumbers;
			}
		}
	}
	return highest;
}