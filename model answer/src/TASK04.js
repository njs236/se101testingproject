var calculateCost = function (price, quantity) {
	cost = calculateProduct(price, quantity);
	return cost;
}

var totalCost = function(price,quantity) {
	var cost = calculateCost(price,quantity);
	var totalCost = cost *0.125 + cost;
	return totalCost;
}

var parseQuantity = function(quantity) {
	if (quantity != Math.round(quantity)) {
        return false;
    }
	return quantity;
}

var parseUnitPrice = function(price) {
	if (price < 0) {
       return false; 
    }
	return price;
}