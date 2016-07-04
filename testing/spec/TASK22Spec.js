describe( "TASK Twenty-two: Input a 'target' letter, followed by a series of letters. End with a 'rogue' of a full stop. Output the number of times the target letter was entered in the series.", function() {

    describe( "Test with 'eggs'", function() {
        it( "findLetter ('eggs', 'E') should equal 1", function() {
            expect( findG( 'eggs', 'E' ) ).toEqual( 1 );
        }); 
    });
});