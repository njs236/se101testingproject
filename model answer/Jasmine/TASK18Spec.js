describe( "TASK Eighteen: Input a series of numbers. End with a 'rogue' of 999.Output the maximum, minimum and mean (average) values.", function() {
    describe( "Mean value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Mean( [10,20,30,40,50,60,70,80,90,100]) should equal 55", function() {
            expect( mean([10,20,30,40,50,60,70,80,90,100]) ).toEqual( 55 );
        }); 
    });
	describe( "Highest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Highest( [10,20,30,40,50,60,70,80,90,100]) should equal 100", function() {
            expect( outputHighestValue([10,20,30,40,50,60,70,80,90,100]) ).toEqual( 100);
        }); 
    });
	describe( "Lowest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Lowest value( [10,20,30,40,50,60,70,80,90,100]) should equal 10", function() {
            expect( outputLowestValue([10,20,30,40,50,60,70,80,90,100]) ).toEqual( 10 );
        }); 
    });
    
    describe( "the input should be valid", function() {
		it( "should be a number", function() {
            expect( isValidNumber('A') ).toEqual(jasmine.any(Number) );
        }); 
    });
});