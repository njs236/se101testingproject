describe( "TASK One: Output the sum and product of 4 and 10.", function() {
    describe( "Sum of 4 and 10", function() {
        it( "Sum( 4, 10) should equal 14", function() {
            sum( 4, 10 ).should.equal( 14 );
        }); 
    });
    
    describe( "Product of 4 and 10", function() {
        it( "Product( 4, 10 ) should be 40", function() {
            product( 4, 10 ).should.equal( 40 );
        }); 
    });
    
    describe( "Sum of 4 and A", function() {
        it( "Sum( 4, 'A' ) should fail", function() {
            sum( 4, 'A' ).should.not.pass;
        }); 
    });
});