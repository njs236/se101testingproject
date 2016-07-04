describe( "TASK Twenty-Eight: If a sentence is a series of words ended by a full-stop, and word is a series of letters that is ended by either a space or a full-stop, then output how many letters there are in a sentence when it is input character by character.", function() {
    describe( "Testing 'Pig.'", function() {
        it( "testSentence ('Pig.') should equal 3", function() {
            expect( testSentence( 'Pig.' ) ).toEqual( 3 );
        }); 
    });
    
    describe( "Testing 'Pig. Hello'", function() {
        it( "testSentence ('Pig. Hello') should equal 3", function() {
            expect( testSentence( 'Pig. Hello' ) ).toEqual( 3 );
        }); 
    });
    
    describe( "Testing 'Hello Pig.'", function() {
        it( "testSentence ('Hello Pig.') should equal 8", function() {
            expect( testSentence( 'Hello Pig.' ) ).toEqual( 8 );
        }); 
    });
});