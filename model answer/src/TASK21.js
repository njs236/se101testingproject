var isG = function (char) {
	return char.toUpperCase() == 'G';
}

var findG = function (string) {
	var n;
	var count = 0;
	for (n=0; n<string.length; n+=1) {
		if (isG(string[n])) {
            count+=1;
        }
	}
	/*
	var tempstring;
	var regexp = /g/gi;
	tempstring = regexp[Symbol.match](string);
	count = tempstring.length;
	*/
	return count;
}