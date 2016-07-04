describe( "TASK Fourteen: Input 10 numbers between 0 and 100. Output the lowest value.", function() {
    describe( "Lowest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Lowest( 10, 20) should equal 10", function() {
            expect( Lowest( 10, 20 ) ).toEqual( 10 );
        }); 
    });
    
    describe( "Lowest value of 10,20,30,40,50,60,70,80,90,100", function() {
        it( "the highest number should be 100", function() {
            expect( isValidNumber(120) ).toEqual( 100 );
        }); 
		it( "the lowest number should be 0", function() {
            expect( isValidNumber(-100) ).toEqual( 0 );
        }); 
		it( "should be a number", function() {
            expect( isValidNumber('A') ).toEqual(jasmine.any(Number) );
        }); 
		it( "Lowest Value of 10,20,30,40,50,60,70,80,90,100 should be 10", function() {
            expect( OutputLowestValue([10,20,30,40,50,60,70,80,90,100]) ).toEqual(10);
        }); 
    });
});