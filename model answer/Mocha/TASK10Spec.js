describe("TASK Ten: Output the integers 1 to 5 inclusive.", function () {
    
    describe("returns an array", function () {
        it("outputNumbers( 1, 5 ) should be an array", function () {
            outputNumbers(1,5).should.be.an('Array');
        }); 
    });
    
    describe("Output should be 1,2,3,4,5", function () {
        it("outputNumbers( 1, 5 ) should equal [1,2,3,4,5]", function () {
            outputNumbers( 1, 5 ).should.deep.equal( [1,2,3,4,5] );
        }); 
    });
});