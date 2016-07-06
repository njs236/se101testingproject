describe("TASK One: Output the sum and product of 4 and 10.", function () {
    describe("Sum of 4 and 10", function () {
        it("calculateSum( 4, 10) should equal 14", function () {
            calculateSum( 4, 10 ).should.equal( 14 );
        }); 
    });
    
    describe("Product of 4 and 10", function () {
        it("calculateProduct( 4, 10 ) should be 40", function () {
            calculateProduct( 4, 10 ).should.equal( 40 );
        }); 
    });
    
    describe("Sum of 4 and A", function () {
        it("Sum( 4, 'A' ) should fail", function () {
            calculateSum( 4, 'A' ).should.not.pass;
        }); 
    });
});