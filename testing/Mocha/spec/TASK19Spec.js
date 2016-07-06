describe("TASK Nineteen: Input two positive integers. Assume that the 2nd is bigger than the 1st and output the sum of the integers between them.", function () {
    
    describe("valid input", function () {
		it("parseNumber( 1 ) should equal 1", function () {
            parseNumber(1).should.equal( 1 );
        }); 
        it("outputNumbers( 1, 5 ) should be an array", function () {
            outputNumbers(1,5).should.be.an('Array');
        }); 
    });
    
    describe("Sum of numbers inputted", function () {
		it("outputNumbers( 1, 5 ) should equal 1,2,3,4,5", function () {
            outputNumbers( 1,5 ).should.deep.equal( [1,2,3,4,5] );
        }); 
        it("listSum( [1,2,3,4,5] ) should equal 15 ", function () {
            listSum( [1,2,3,4,5] ).should.equal( 15 );
        }); 
    });
});