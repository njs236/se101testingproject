describe( "TASK Thirteen: Input 10 numbers between 0 and 100. Output the highest value.", function() {
    describe( "Highest value of 10,20,30,40,50,60,70,80,90,100 ", function() {
        it( "Highest( 10, 20) should equal 20", function() {
            highest( 10, 20 ).should.equal( 20 );
        }); 
    });
    
    describe( "Highest value of 10,20,30,40,50,60,70,80,90,100", function() {
        it( "the highest number should be 100", function() {
            isValidNumber(120).should.equal( 100 );
        }); 
		it( "the lowest number should be 0", function() {
            isValidNumber(-100).should.equal( 0 );
        }); 
		it( "should be a number", function() {
            isValidNumber('A').should.be.an('Number');
        }); 
		it( "outputHighestValue([10,20,30,40,50,60,70,80,90,100]) should be 100", function() {
            outputHighestValue([10,20,30,40,50,60,70,80,90,100]).should.equal(100);
        }); 
		it("outputHighestValue([10,100,20,15,34,46,78,79,80,66]) should be 100", function () {
			outputHighestValue([10,100,20,15,34,46,78,79,80,66]).should.equal(100);
		})
    });
});