describe("TASK Fifteen: Input 10 numbers between 0 and 100.Output the maximum, minimum and mean (average) values.", function () {
    describe("Mean value of 10,20,30,40,50,60,70,80,90,100 ", function () {
        it("mean( [10,20,30,40,50,60,70,80,90,100]) should equal 55", function () {
            mean([10,20,30,40,50,60,70,80,90,100]).should.equal( 55 );
        }); 
    });
	describe( "Highest value of 10,20,30,40,50,60,70,80,90,100 ", function () {
        it("ouputHighestValue( [10,20,30,40,50,60,70,80,90,100]) should equal 100", function () {
            outputHighestValue([10,20,30,40,50,60,70,80,90,100]).should.equal( 100);
        }); 
    });
	describe( "Lowest value of 10,20,30,40,50,60,70,80,90,100 ", function () {
        it("outputLowestValue( [10,20,30,40,50,60,70,80,90,100]) should equal 10", function () {
            outputLowestValue([10,20,30,40,50,60,70,80,90,100]).should.equal( 10 );
        }); 
    });
    
    describe( "the input should be valid", function () {
        it("the highest number should be 100", function () {
            parseNumber(120).should.equal( false );
        }); 
		it("the lowest number should be 0", function () {
            parseNumber(-100).should.equal( false );
        }); 
		it("should be a number", function () {
            parseNumber('A').should.equal( false );
        }); 
    });
});