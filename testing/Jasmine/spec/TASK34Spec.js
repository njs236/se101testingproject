describe ("TASK Thirty-Four: Input a series of integers ended by a value of 100. Output the highest and lowest values found and their respective positions in the series. If equal values occur, you can output any one of the positions they were in.", function () {
	describe("Find highest value", function () {
		it("Find highest value in [1,4,5,6,11,7, 36, 8, 99] should be 99", function () {
			expect( outputHighestValue( [1,4,5,6,11,7,36, 8, 99] ) ).toEqual( 99 );
		}) ;
	});
	
	describe("Find lowest value", function () {
		it("Find lowest value in [1,4,5,6,11,7, 36, 8, 99] should be 1", function () {
			expect( outputLowestValue( [1,4,5,6,11,7,36, 8, 99] ) ).toEqual( 1 );
		}) ;
	});
	
	describe("Testing high and low values and positions", function () {
		it("Find highest and lowest values in [1,4,5,6,11,7, 36, 8, 99] should be [[99, 9], [1,1]]", function () {
			expect( findHighestAndLowestValues( [1,4,5,6,11,7, 36, 8, 99] ) ).toEqual( [ [99,9], [1,1] ] );
		});
	});
	
	describe("Testing where it is", function () {
		it("Find 99 in [1,4,5,6,11,7, 36, 99, 99] should be [8,9]", function () {
			expect(findValueInSeries( 99, [1,4,5,6,11,7, 36, 99, 99] ) ).toEqual( [8,9] );
		});
	});

});