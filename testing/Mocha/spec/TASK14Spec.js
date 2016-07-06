describe("TASK Fourteen: Input 10 numbers between 0 and 100. Output the lowest value.", function() {
    describe("Lowest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it("lower( 10, 20) should equal 10", function() {
           lower( 10, 20 ).should.equal( 10 );
        }); 
    });
    
    describe("Lowest value of 10,20,30,40,50,60,70,80,90,100", function() {
        it("the highest number should be 100", function() {
            isValidNumber(120).should.equal( 100 );
        }); 
		it("the lowest number should be 0", function() {
            isValidNumber(-100).should.equal( 0 );
        }); 
		it("should be a number", function() {
            isValidNumber('A').should.be.an('Number');
        }); 
		it("outputLowestValue([10,20,30,40,50,60,70,80,90,100]) should be 10", function() {
            outputLowestValue([10,20,30,40,50,60,70,80,90,100]).should.equal(10);
        }); 
		it("outputLowestValue([10,100,30,33,50,27,70,45,90,7]) should be 7", function() {
            outputLowestValue([10,100,30,33,50,27,70,45,90,7]).should.equal(7);
        });
    });
});