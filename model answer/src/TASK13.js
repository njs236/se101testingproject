var isValidNumber = function(number) {
	if (number > 100) return 100;
	if (number < 0) return 0;
	if (isNaN(number)) return 0;
	return number;
}

var outputHighestValue= function(array) {
	var n;
	highest = array[0];
	for (n = 1; n < array.length; n++) {
		// check to see if current match has a higher number than the first position.
		if (higher(array[n], array[n-1]) > highest) {
			// check to see if the match is equal.
			if (higher(array[n], array[n-1]) == null)
				highest =  array[n];
			else {
				//every other situation.
				highest = higher(array[n], array[n-1]);
			}
		}
	}
	return highest;
}