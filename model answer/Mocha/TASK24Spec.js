describe("TASK Twenty-Four: Produce the 2 times table (to 5 x 2) in the form 1 x 2 = 2 2 x 2 = 4 3 x 2 = 6 4 x 2 = 8 5 x 2 = 10", function () {
    
    describe("product of 4 and 10", function () {
        it( "product( 4, 10 ) should be 40", function () {
            calculateProduct( 4, 10 ).should.equal( 40 );
        }); 
    });
    
    describe("Product of 4 and A", function () {
        it( "product( 4, 'A' ) should fail", function () {
            calculateProduct( 4, 'A' ).should.be.a('Number');
        }); 
    });
});