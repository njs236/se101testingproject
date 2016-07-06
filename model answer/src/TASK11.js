var outputEvenNumbers = function (first, last) {
	var n = first;
	var result = [];
		//assumes that first is less than last.
	if (first > last) return result;
	while (n <= last) {
		if (isEven(n)) {
          result.push(n);  
        }
		n++;
	}
	return result;
}

var isEven = function(number) {
	return number %2 == 0;
}