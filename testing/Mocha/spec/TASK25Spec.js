describe("TASK Twenty-Five: Modify problem 24 above so that any positive integer can be entered from the keyboard and the times table for that number will be printed (up to 5 times) e.g. What times table do", function () {
    
    describe("product of 4 and 10", function () {
        it( "product( 4, 10 ) should be 40", function () {
            calculateProduct( 4, 10 ).should.equal( 40 );
        }); 
    });
    
    describe("Product of 4 and A", function () {
        it( "product( 4, 'A' ) should fail", function () {
            calculateProduct( 4, 'A' ).should.be.a('nan');
        }); 
    });
});