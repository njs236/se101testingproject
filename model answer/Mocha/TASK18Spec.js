describe( "TASK Eighteen: Input a series of numbers. End with a 'rogue' of 999.Output the maximum, minimum and mean (average) values.", function() {
    describe( "Mean value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Mean( [10,20,30,40,50,60,70,80,90,100]) should equal 55", function() {
           mean([10,20,30,40,50,60,70,80,90,100]).should.equal( 55 );
        }); 
    });
	describe( "Highest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Highest( [10,20,30,40,50,60,70,80,90,100]) should equal 100", function() {
            outputHighestValue([10,20,30,40,50,60,70,80,90,100]).should.equal( 100);
        }); 
    });
	describe( "Lowest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Lowest value( [10,20,30,40,50,60,70,80,90,100]) should equal 10", function() {
            outputLowestValue([10,20,30,40,50,60,70,80,90,100]).should.equal( 10 );
        }); 
    });
	describe("Mean should be an number", function () {
		it("Mean([10,20,30,40,50,60,70,80,90,100]) should be a number", function () {
			mean([10,20,30,40,50,60,70,80,90,100]).should.be.a('Number');
		})
	})
		describe( "Highest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Highest( [10,20,30,40,50,60,70,80,90,100]) should be a number", function() {
            outputHighestValue([10,20,30,40,50,60,70,80,90,100]).should.be.a('Number');
        }); 
    });
	describe( "Lowest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Lowest value( [10,20,30,40,50,60,70,80,90,100]) should be a number", function() {
            outputLowestValue([10,20,30,40,50,60,70,80,90,100]).should.be.a('Number');
        }); 
    });
    
    describe( "the input should be valid", function() {
		it( "should be a number", function() {
            isValidNumber('A').should.be.a('Number');
        }); 
    });
});