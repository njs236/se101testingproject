describe("TASK Twenty-Seven: Input a series of numbers. End with a “rogue” of 999. Output the message “Series in sequence” if the series is in ascending sequence, or the message “Series not in sequence” if the series isn’t. Note that if adjacent values are equal, the series is still in ascending sequence.", function () {
    describe("Testing 0 and 4", function () {
        it("isAscending( 0, 4) should equal true", function () {
            isAscending( 0, 4 ).should.equal( true );
        }); 
    });
    
    describe("Testing 0 and 0", function () {
        it( "isAscending( 0, 0) should equal true", function () {
            isAscending( 0, 0 ).should.equal( true );
        }); 
    });
    
    describe("Testing 0 and 4", function () {
        it("isAscending( 0, -4) should equal false", function () {
            isAscending( 0, -4 ).should.equal( false);
        }); 
    });
	
	describe("Testing [0,1,-2,3,4]", function () {
        it("testAscendingSequence( [0,1,-2,3,4] ) should equal false", function () {
            testAscendingSequence( [0,1,-2,3,4] ).should.equal( false );
        }); 
    });
	
	describe("the input should be valid", function () {
		it("should be a number", function () {
            parseNumber('A').should.equal( false );
        }); 
    });
});