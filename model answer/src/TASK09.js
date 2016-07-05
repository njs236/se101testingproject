var threeHigher = function (number1, number2, number3) {
	var args = Array.prototype.slice.call(arguments);
	var n;
	var highest;
	for (n= 1; n< args.length; n++) {
		if (higher(args[n], args[n-1]) == null) {
			highest = args[n];
		} else {
			highest = higher(args[n], args[n-1]);
		}		
	}
	return highest;
}