describe("TASK Nine: Input three numbers. Output the highest value even if they are all equal.", function() {
    describe("Higher of 3, 9, 10", function() {
        it("threeHigher( 3, 9, 10) should equal 10", function() {
            threeHigher( 3, 9, 10 ).should.equal( 10 );
        }); 
    });
    
    describe( "Higher of 15,15,15", function() {
        it("threeHigher( 15, 15, 15 ) should be 15", function() {
            threeHigher( 15, 15, 15 ).should.equal( 15 );
        }); 
    }); 
});