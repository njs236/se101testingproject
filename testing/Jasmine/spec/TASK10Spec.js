describe( "TASK Ten: Output the integers 1 to 5 inclusive.", function() {
    describe( "Should have two parameters", function() {
        it( "Format of first and list number", function() {
			var outputNumbers = outputNumbers(1, 5);
			var length = outputNumbers.arguments.length;
            expect( length ).toEqual( 2 );
        }); 
    });
    
    describe( "returns an array", function() {
        it( "outputNumbers( 1, 5 ) should be an array", function() {
            expect( outputNumbers(1,5) ).toEqual( jasmine.any(Array) );
        }); 
    });
    
    describe( "Output should be 1,2,3,4,5", function() {
        it( "outputNumbers( 1, 5 ) should equal 1,2,3,4,5", function() {
            expect( outputNumbers( 1, 5 ) ).toEqual( [1,2,3,4,5] );
        }); 
    });
});