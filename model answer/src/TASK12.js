
var listSum = function (list) {
	var n;
	var result  = 0;
	for (n=0; n< list.length; n++) {
		result = calculateSum(list[n], result);
	}
	return result;
}