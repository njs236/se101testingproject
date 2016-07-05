var outputNumbers = function (first, last) { 
	var n = first;
	var result = [];
    while (n <= last) {
		result.push(n);
		n++;
    }
	return result;
}