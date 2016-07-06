var convert = function (amount, currencyFrom, currencyTo) {
    
    var rates = {"AUS": 0.96, "USD": 0.72, "NZD": 1};
	var currency = amount / rates[currencyFrom] * rates[currencyTo];
	return currency
}

var changeNZDtoAUSandUSD = function (dollars) {
    var aus = convert(dollars, 'NZD', 'AUS');
    var usd = convert(dollars, 'NZD', 'USD');
    return [aus,usd];
}