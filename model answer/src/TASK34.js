var findValueInSeries = function(value, series) {
	// must be able to return more than one value.
	var result = [];
	var n;
	for (n=0; n<series.length; n+=1) {
		if (series[n] == value ) {
            result.push(n+1);
        }
	}
	return result;
}

var findHighestAndLowestValues = function(series) {
	/* Parameters:
	* highest = highest value in series.
	* lowest = lowest value in series.
	* integerOfFirstPositionOfLowest = you can get more than one, but this isolates one particular value.
	* integerOfFirstPositionOfHighest = same as previous.
	*/
	var n;
	var highest = outputHighestValue(series);
	var lowest = outputLowestValue(series);
	var integerOfFirstPositionOfLowest = parseInt(findValueInSeries(lowest, series)[0].toString());
	var integerOfFirstPositionOfHighest = parseInt(findValueInSeries(highest, series)[0].toString());
	var result = [[highest,integerOfFirstPositionOfHighest ], [lowest,integerOfFirstPositionOfLowest ] ];
	return result;
}