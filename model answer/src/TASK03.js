var calculateArea = function (length, width) {
	// Area is determined by length and width
	area = calculateProduct(length, width);
	return area;
}

class Rectangle {
	constructor(length, width){
		// rectangle needs to have length and width for calculation.
		this.length = length;
		this.width = width;
	} 
	
	area() {
		// Area will take length and width of rectangle.
		area = calculateProduct(this.length, this.width);
		return area;
	}
}

