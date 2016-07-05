var toKelvinFromCelcius = function(degrees) {
	var kelvin = degrees + 273.15;
	return kelvin;
}

var toFahrenheitFromCelcius = function(degrees) {
	var fahrenheit = degrees * 9/5 + 32;
	fahrenheit = Math.round(fahrenheit);
	return fahrenheit;
}

var fromCelcius = function(degrees) {
	var kelvin = toKelvinFromCelcius(degrees);
	var fahrenheit = toFahrenheitFromCelcius(degrees);
	return [kelvin, fahrenheit];
}