var countString = function(string) {
	return string.length;
}

var isLetter = function (character) {
	var regexp = /[a-z]+/gi;
	if (regexp[Symbol.match](character) != null) {
        return true;
    }
	return false;
}