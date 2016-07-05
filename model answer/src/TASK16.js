var calculateAreas = function (array) {
	var result = [];
	var n;
	for (n=0; n<array.length; n++) {
		result.push(calculateArea(array[n][0], array[n][1]));
	}
	return result;
}