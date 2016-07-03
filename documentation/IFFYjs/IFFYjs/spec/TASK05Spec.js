describe( "TASK FIVE: Test using the switch statement and associated case statements whether the .toUpperCase of a character is one of AEIOU.", function() {
    
    describe( "Test with A and a. ", function() {
        it( "isVowelV4( 'A' ) should be true", function() {
            expect( isVowelV4( 'A' ) ).toEqual( true );
        });  
        
        it( "isVowelV4( 'a' ) should be true", function() {
            expect( isVowelV4( 'a' ) ).toEqual( true );
        });
    });

     describe( "Test with E and e. ", function() {

        it( "isVowelV4( 'E' ) should be true", function() {
            expect( isVowelV4( 'E' ) ).toEqual( true );
        });
        
        it( "isVowelV4( 'e' ) should be true", function() {
            expect( isVowelV4( 'e' ) ).toEqual( true );
        });
    });

    
     describe( "Test with I and i. ", function() {

        it( "isVowelV4( 'I' ) should be true", function() {
            expect( isVowelV4( 'I' ) ).toEqual( true );
        });
        
        it( "isVowelV4( 'i' ) should be true", function() {
            expect( isVowelV4( 'i' ) ).toEqual( true );
        });
        
    });
    

    describe( "Test with O and o. ", function() {

        it( "isVowelV4( 'O' ) should be true", function() {
            expect( isVowelV4( 'O' ) ).toEqual( true );
        });
        
        it( "isVowelV4( 'o' ) should be true", function() {
            expect( isVowelV4( 'o' ) ).toEqual( true );
        });
        
    });
    
    describe( "Test with U and u. ", function() {

        it( "isVowelV4( 'U' ) should be true", function() {
            expect( isVowelV4( 'U' ) ).toEqual( true );
        });
        
        it( "isVowelV4( 'u' ) should be true", function() {
            expect( isVowelV4( 'u' ) ).toEqual( true );
        });
        
    });

    describe( "Test with Z. ", function() {

        it( "isVowelV4( 'Z' ) should be false", function() {
            expect( isVowelV4( 'Z' ) ).toEqual( false );
        });
    });    
 

 
});