describe( "TASK Thirteen: Input 10 numbers between 0 and 100. Output the highest value.", function() {
    describe( "Highest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Highest( 10, 20) should equal 20", function() {
            expect( higher( 10, 20 ) ).toEqual( 20 );
        }); 
    });
    
    describe( "Highest value of 10,20,30,40,50,60,70,80,90,100", function() {
        it( "the highest number should be 100", function() {
            expect( isValidNumber(120) ).toEqual( 100 );
        }); 
		it( "the lowest number should be 0", function() {
            expect( isValidNumber(-100) ).toEqual( 0 );
        }); 
		it( "should be a number", function() {
            expect( isValidNumber('A') ).toEqual(jasmine.any(Number) );
        }); 
		it( "highestValue of 10,20,30,40,50,60,70,80,90,100 should be 100", function() {
            expect( outputHighestValue([10,20,30,40,50,60,70,80,90,100]) ).toEqual(100);
        }); 
    });
});