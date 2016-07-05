var nzToAus = function() {
	var ratio = 0.96;
	return ratio;
}

var nzToUSD = function () {
	var ratio = 0.72;
	return ratio;
}

var convertNZDToAUSandUSD = function (amount) {
	aus = nzToAus() * amount;
	usd = nzToUSD() * amount;
	return [aus, usd]; 
}