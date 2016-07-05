var calculateSum = function (number1, number2) {
	return number1 + number2;
}

var calculateProduct = function (number, factor) {
	// the function MUST be number, factor for subsequent tests.
	// This is so that you can ensure types according to the returned results
	return number * factor
}

var printArray = function (array) {
	var n;
	var result = "";
	for (n=0; n<array.length; n++) {
		result += array[n].toString()
		if (n < array.length-1) result += ", ";
	}
	return result;
}
