describe( "TASK Eleven: Output the even integers between 0 and 10.", function() {
    describe( "Should return an array", function() {
        it( "outputEvenNumbers( 0, 10 ) should be an array", function() {
            outputEvenNumbers( 0,10 ).should.be.an('Array');
        }); 
    });
    
    describe( "should output even numbers", function() {
        it( "outputEvenNumbers( 0, 10 ) should return 0,2,4,6,8,10 ", function() {
            outputEvenNumbers( 0, 10 ).should.equal( [0,2,4,6,8,10] );
        }); 
    });
});