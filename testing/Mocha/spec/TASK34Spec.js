describe ("TASK Thirty-Four: Input a series of integers ended by a value of 100. Output the highest and lowest values found and their respective positions in the series. If equal values occur, you can output any one of the positions they were in.", function () {
	describe("Find highest value", function () {
		it("outputHighestValue([1,4,5,6,11,7, 36, 8, 99] ) should be 99", function () {
			outputHighestValue( [1,4,5,6,11,7,36, 8, 99] ).should.equal( 99 );
		}) ;
	});
	
	describe("Find lowest value", function () {
		it("outputLowestValue([1,4,5,6,11,7, 36, 8, 99] ) should be 1", function () {
			outputLowestValue( [1,4,5,6,11,7,36, 8, 99] ).should.equal( 1 );
		}) ;
	});
	
	describe("Testing high and low values and positions", function () {
		it("findHighestAndLowestValues([1,4,5,6,11,7, 36, 8, 99]) should be [[99, 9], [1,1]]", function () {
			findHighestAndLowestValues( [1,4,5,6,11,7, 36, 8, 99] ).should.deep.equal( [ [99,9], [1,1] ] );
		});
	});
	
	describe("Testing where it is", function () {
		it("findValueInSeries( 99, [1,4,5,6,11,7, 36, 99, 99]) should be [8,9]", function () {
			findValueInSeries( 99, [1,4,5,6,11,7, 36, 99, 99] ).should.deep.equal( [8,9] );
		});
		it("findValueInSeries( 99, [1,4,5,6,11,7, 36, 99, 99]) should be an array", function () {
			findValueInSeries( 99, [1,4,5,6,11,7, 36, 99, 99] ).should.be.an('Array');
		});
	});

});