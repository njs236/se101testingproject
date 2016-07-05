var isQuit = function (name) {
	return name.toUpperCase == "QUIT";
}

var findStudentByGrade = function (grade, ascending, array) {
	var n;
	if (ascending) {
		for (n=0; n< array.length; n++) {
			if (array[n][1] == grade) return [array[n][0], array[n][1]];
		}
	} else {
		for (n=0; n< array.length; n++) {
			if (array[n][1] == grade) return [array[n][0], array[n][1]];
		}
	}
	return;
} 

var computeGrades = function (array) {
	var n;
	var tempArray = [];
	for (n=0; n< array.length; n++) {
		tempArray.push(array[n][1]);
	}
	highest = outputHighestValue(tempArray);
	
	return findStudentByGrade(highest, true, array);
}