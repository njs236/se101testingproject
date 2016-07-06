describe( "TASK Seven: Input two numbers. Assume they are different and output the higher value of the two numbers.", function() {
    describe( "Higher of 4 and 10", function() {
        it( "Higher( 4, 10) should equal 10", function() {
            higher( 4, 10 ).should.equal( 10 );
        }); 
    });
    
    describe( "Higher of 10 and 4", function() {
        it( "Higher( 10, 4 ) should equal 10", function() {
            higher( 10, 4 ).should.equal( 10 );
        }); 
    });
    
    describe( "Higher of -100 and 4", function() {
        it( "Higher( -100, 4 ) should be 4", function() {
            higher( -100, 4 ).should.equal( 4 );
        }); 
    });
	
	describe( "Higher of -100 and A", function() {
        it( "Higher( -100, A ) should fail", function() {
           higher( -100, 'A' );
        }); 
    });
});