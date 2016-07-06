var isHigher = function (number1, number2) {
    if (isNaN(number1)) return;
    if (isNaN(number2)) return;
	if (number1 == number2) return 'Both are Equal';
	return higher(number1, number2);
}