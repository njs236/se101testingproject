describe("TASK Sixteen: Calculate the area of a rectangle given the formula Area = Length multiplied by Width. Input each set of Length and Width until a rogue Length of -1 is entered.", function() {
    describe("Areas of 5 rectangles, 10x4, 3x6, 4x8, 5x12, 6x13", function() {
        it("Area(10,4) should equal 40", function() {
            expect( calculateArea( 10, 4 ) ).toEqual( 40 );
        }); 
		it("calculateAreas([[10,4],[3,6], [4,8], [5,12], [6,13]]) should return [40, 18, 32, 60, 78]", function () {
			expect(calculateAreas([[10,4],[3,6], [4,8], [5,12], [6,13]])).toEqual([40, 18, 32, 60, 78]);
		});
	});
		

    describe("the input should be valid", function() {
		it("should be a number", function() {
            expect( isValidNumber('A') ).toEqual(jasmine.any(Number) );
        }); 
    });
});