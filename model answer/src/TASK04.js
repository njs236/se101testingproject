var calculateCost = function (price, quantity) {
	cost = calculateProduct(price, quantity);
	return cost;
}

var totalCost = function(price,quantity) {
	var cost = calculateCost(price,quantity);
	var totalCost = cost *0.125 + cost;
	return totalCost;
}

var isQuantity = function(quantity) {
	if (quantity != Math.round(quantity)) return false;
	return true;
}

var isUnitPrice = function(price) {
	if (price < 0) return false;
	return true;
}