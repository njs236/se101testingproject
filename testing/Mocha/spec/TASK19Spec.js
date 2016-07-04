describe( "TASK Nineteen: Input two positive integers. Assume that the 2nd is bigger than the 1st and output the sum of the integers between them.", function() {
    describe( "Should have two parameters", function() {
        it( "Format of first and list number", function() {
			var outputNumbers = outputNumbers(1, 5);
			var length = outputNumbers.arguments.length;
            expect( length ).toEqual( 2 );
        }); 
    });
    
    describe( "valid input", function() {
		it( "isValidNumber( 1 ) should equal 1", function() {
            expect( isValidNumber(1) ).toEqual( 1 );
        }); 
        it( "outputNumbers( 1, 5 ) should be an array", function() {
            expect( outputNumbers(1,5) ).toEqual( jasmine.any(Array) );
        }); 
    });
    
    describe( "Sum of numbers inputted", function() {
		it( "outputNumbers( 1, 5 ) should equal 1,2,3,4,5", function() {
            expect( outputNumbers( 1,5 ) ).toEqual( [1,2,3,4,5] );
        }); 
        it( "outputNumbers( 1, 5 ) should equal 1,2,3,4,5", function() {
            expect( listSum( [1,2,3,4,5] ) ).toEqual( 15 );
        }); 
    });
});