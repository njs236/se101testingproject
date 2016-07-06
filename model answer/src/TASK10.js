var outputNumbers = function (first, last) { 
	var n = first;
	var result = [];
		//assumes first is less than last
	if (first> last) return result;
    while (n <= last) {
		result.push(n);
		n++;
    }
	return result;
}