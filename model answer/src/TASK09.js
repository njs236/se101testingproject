var threeHigher = function (number1, number2, number3) {
	var args = Array.prototype.slice.call(arguments);
	var n;
	var highest;
	for (n= 1; n< args.length; n+=1) {
		var compareValue = higher(args[n], args[n-1]);
		if ( compareValue == null) {
			highest = args[n];
		} else {
			highest = compareValue;
		}		
	}
	/*
	args.sort(function (a,b) {
		if (a > b) {
			return -1;
		}
		if (a < b) {
			return 1;
		}
		if (a == b ) {
			return 0;
		}
	} )
	highest = args[0];
	
	*/
	return highest;
}