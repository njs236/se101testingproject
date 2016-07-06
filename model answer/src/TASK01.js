var calculateSum = function (number1, number2) {
    if (isNaN(number1)) return ;
    if (isNaN(number2)) return ;
	return number1 + number2;
}

var calculateProduct = function (number, factor) {
	// the function MUST be number, factor for subsequent tests.
	// This is so that you can ensure types according to the returned results
	return number * factor
}