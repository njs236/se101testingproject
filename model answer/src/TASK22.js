var findLetter = function (comparison, sentence) {
	var n;
	var count =0;
	var letter = comparison.substring(0, 1);
	for (n=0; n<sentence.length; n++) {
		if (sentence[n].toUpperCase() == letter) count++
	}
	return count;
}