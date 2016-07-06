describe("TASK Twenty-three: Input a series of numbers. End with a 'rogue' of 999. Output the number of positive numbers in the series. Output the number of negative numbers in the series. Output the number of zeros in the series", function() {
    describe("Testing Positive Numbers", function() {
        it("isPositive( 4) should equal true", function() {
            expect( isPositive( 4 ) ).toEqual( true );
        }); 
    });
    
    describe("Testing Zero Numbers", function() {
        it("isZero( 4) should equal false", function() {
            expect( isZero( 4 ) ).toEqual( false );
        }); 
    });
    
    describe("Testing Negative Numbers", function() {
        it("isNegative( 4) should equal false", function() {
            expect( isNegative( 4 ) ).toEqual( false );
        }); 
    });
	
	describe("Testing positive Numbers", function() {
		it ("typeOfNumber([1,2,3,4,5,6,7,8,9,10]) should equal [0,0, 10]", function () {
			expect( typeOfNumber([1,2,3,4,5,6,7,8,9,10])).toEqual([0,0,10]);
		})
	})
	describe("Testing negative Numbers", function() {
		it ("typeOfNumber([1,-2,3,-4,5,-6,7,-8,9,-10]) should equal [0,5, 5]", function () {
			expect( typeOfNumber([1,-2,3,-4,5,-6,7,-8,9,-10])).toEqual([0,5,5]);
		})
	})
	describe("Testing zero Numbers", function() {
		it ("typeOfNumber([0,0,0,0,0,6,7,8,9,10]) should equal [0,0, 10]", function () {
			expect( typeOfNumber([0,0,0,0,0,6,7,8,9,10])).toEqual([5,0,5]);
		})
	})
});