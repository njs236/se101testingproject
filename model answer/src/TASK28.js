var isFullstop = function (char) {
	return char == '.';
}

var isSpace = function (char) {
	return char == ' ';
}

var testSentence = function (string) {
	var n;
	var count = 0;
	for (n=0; n<string.length; n++) {
		if (isFullstop(string[n])) return count;
		if (!isSpace(string[n])) count++; 
	}
	return count;
}