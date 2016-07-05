var isG = function (char) {
	return char.toUpperCase() == 'G';
}

var findG = function (string) {
	var n;
	var count = 0;
	for (n=0; n<string.length; n++) {
		if (isG(string[n])) count++;
	}
	return count;
}