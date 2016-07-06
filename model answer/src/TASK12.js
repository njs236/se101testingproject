
var listSum = function (list) {
	var n;
	var result  = 0;
	for (n=0; n< list.length; n+=1) {
		result = calculateSum(list[n], result);
	}
	/*
	var n;
	var result = 0;
	for (n=0; n< list.length; n++) {
		result += list[n];
	}
	*/
	return result;
}