describe( "TASK One: Output the sum and product of 4 and 10.", function() {
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
    
    describe( "Sum of 4 and A", function() {
        it( "Sum( 4, 'A' ) should fail", function() {
            expect( calculateSum( 4, 'A' ) ).toEqual( false );
        }); 
    });
});