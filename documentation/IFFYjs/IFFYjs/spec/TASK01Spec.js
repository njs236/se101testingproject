describe( "TASK One: Test using a single if whether the .toUpperCase of a letter is A.", function() {
    describe( "Test with A", function() {
        it( "isA( 'A' ) should be true", function() {
            expect( isA( 'A' ) ).toEqual( true );
        }); 
    });
    
    describe( "Test with a", function() {
        it( "isA( 'a' ) should be true", function() {
            expect( isA( 'a' ) ).toEqual( true );
        }); 
    });
    
    describe( "Test with E", function() {
        it( "isA( 'E' ) should be false", function() {
            expect( isA( 'E' ) ).toEqual( false );
        }); 
    });
});