describe("TASK Twenty-Six: Input a series of integers. End with a 'rogue' of 999. Output the number of times the “next” integer is twice the previous integer.", function() {
    describe("Testing 32 and 64", function() {
        it("isDouble( 32, 64) should equal true", function() {
            isDouble( 32, 64 ).should.equal( true );
        }); 
    });
    
    describe("Testing 32 and 43", function() {
        it( "isDouble( 32, 64) should equal false", function() {
            isDouble( 32, 43 ).should.equal( false );
        }); 
    });
    
    describe("Testing 32 and 128", function() {
        it( "isDouble( 32, 128) should equal false", function() {
            isDouble( 32, 128).should.equal( false );
        }); 
    });
	describe("Testing [32,64,128,256,512]", function() {
        it( "countDoubles( [32,64,128,256,512]) should equal 4", function() {
            countDoubles( [32,64,128,256,512]).should.equal( 4 );
        }); 
    });
});