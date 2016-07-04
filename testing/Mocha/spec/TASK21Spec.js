describe( "TASK Twenty-One: Input a series of letters. End with a 'rogue' of a full stop.Output the number of g’s entered (there may not be any).", function() {
    describe( "Test with an 'A'", function() {
        it( "isG ('A') should be false", function() {
            isG( 'A' ).should.equal( false );
        }); 
    });
    
    describe( "Test with an 'E'", function() {
        it( "isG ('E') should be false", function() {
            isG( 'E' ).should.equal( false );
        }); 
    });
    
    describe( "Test with a 'G'", function() {
        it( "isG ('G') should be true", function() {
            isG( 'G' ).should.equal( true );
        }); 
    });
	describe( "Test with a 'g'", function() {
        it( "isG ('g') should be true", function() {
            isG( 'g' ).should.equal( true );
        }); 
    });
    describe( "Test with 'eggs'", function() {
        it( "findG ('eggs') should equal 2", function() {
            findG( 'eggs' ).should.equal( 2 );
        }); 
    });
});