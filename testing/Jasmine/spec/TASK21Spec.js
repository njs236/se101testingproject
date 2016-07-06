describe("TASK Twenty-One: Input a series of letters. End with a 'rogue' of a full stop.Output the number of g’s entered (there may not be any).", function() {
    describe("Test with an 'A'", function() {
        it("isG ('A') should be false", function() {
            expect( isG( 'A' ) ).toEqual( false );
        }); 
    });
    
    describe("Test with an 'E'", function() {
        it("isG ('E') should be false", function() {
            expect( isG( 'E' ) ).toEqual( false );
        }); 
    });
    
    describe("Test with a 'G'", function() {
        it("isG ('G') should be true", function() {
            expect( isG( 'G' ) ).toEqual( true );
        }); 
    });
	describe("Test with a 'g'", function() {
        it("isG ('g') should be true", function() {
            expect( isG( 'g' ) ).toEqual( true );
        }); 
    });
    describe("Test with 'eggs'", function() {
        it("findG ('eggs') should equal 2", function() {
            expect( findG( 'eggs' ) ).toEqual( 2 );
        }); 
    });
});