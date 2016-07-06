var countString = function(string) {
	return string.length;
}

var parseLetter = function (character) {
	var regexp = /[a-z]+/gi;
	if (regexp[Symbol.match](character) != null) {
        return character;
    }
	return false;
}