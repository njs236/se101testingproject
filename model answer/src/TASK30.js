var isQuit = function (name) {
	return name.toUpperCase == "QUIT";
}

var findStudentByGrade = function (grade, ascending, array) {
	// selects only one record.
	var n;
	if (ascending) {
		for (n=0; n< array.length; n++) {
			if (array[n][1] == grade) return [array[n][0], array[n][1]];
		}
	} else {
		for (n=array.length; n> 0; n--) {
			if (array[n][1] == grade) return [array[n][0], array[n][1]];
		}
	}
	
	/*
	var limit = 0;
	var start= array.length;
	var modifier = -1;
	if (ascending) limit = array.length;
	if (ascending) start = 0;
	if (ascending) modifier = 1;
	while (start != limit) {
		if (array[n][1] == grade) return [array[n][0], array[n][1]];
		start = start + modifer;
	}
	
	
	*/
	return;
} 

var computeGrades = function (array) {
	var n;
	// select the grades from the data.
	var tempArray = [];
	for (n=0; n< array.length; n++) {
		tempArray.push(array[n][1]);
	}
	highest = outputHighestValue(tempArray);
	
	return findStudentByGrade(highest, true, array);
}