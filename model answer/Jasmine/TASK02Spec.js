describe( "TASK Two: Input two numbers and output their sum and product.", function() {
    describe( "Sum of 4 and 10", function() {
        it( "Sum( 4, 10) should equal 14", function() {
            expect( calculateSum( 4, 10 ) ).toEqual( 14 );
        }); 
    });
    
    describe( "Product of 4 and 10", function() {
        it( "Product( 4, 10 ) should be 40", function() {
            expect( calculateProduct( 4, 10 ) ).toEqual( 40 );
        }); 
    });
    
    describe( "Sum and Product of 4 and 10", function() {
        it( "SumAndProduct( 4, 10 ) should return 14 and 40", function() {
			var sumandproduct = sumAndProduct(4, 10);
            expect( sumandproduct[0] ).toEqual( 14 );
			expect( sumandproduct[1] ).toEqual( 40 );
        }); 
    });
	 describe( "Sum and Product of 18 and 22", function() {
        it( "SumAndProduct( 18, 22) should return 40 and 396", function() {
			var sumandproduct = sumAndProduct(18, 22);
            expect( sumandproduct[0] ).toEqual( 40 );
			expect( sumandproduct[1] ).toEqual( 396 );
        }); 
    });
});