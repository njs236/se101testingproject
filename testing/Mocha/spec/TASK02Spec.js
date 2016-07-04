describe( "TASK Two: Input two numbers and output their sum and product.", function() {
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
    
    describe( "Sum and Product of 4 and 10", function() {
		it( "SumAndProduct( 4, 10 ) should give an array", function() {
			var sumandproduct = sumAndProduct(4, 10);
            sumandproduct.should.be.an.array;
        }); 
        it( "SumAndProduct( 4, 10 ) should return 14 and 40", function() {
			var sumandproduct = sumAndProduct(4, 10);
            sumandproduct[0].should.equal( 14 );
			sumandproduct[1].should.equal( 40 );
        }); 
    });
	 describe( "Sum and Product of 18 and 22", function() {
        it( "SumAndProduct( 18, 22) should return 40 and 396", function() {
			var sumandproduct = sumAndProduct(18, 22);
            sumandproduct[0].should.equal( 40 );
			sumandproduct[1].should.equal( 396 );
        }); 
    });
});