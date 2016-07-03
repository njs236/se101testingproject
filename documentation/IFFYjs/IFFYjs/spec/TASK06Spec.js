describe( "TASK SIX: Test the .indexOf the .toUpperCase of a character for the string AEIOU.", function() {
    
    describe( "Test with A and a. ", function() {
        it( "isVowelV5( 'A' ) should be true", function() {
            expect( isVowelV5( 'A' ) ).toEqual( true );
        });  
        
        it( "isVowelV5( 'a' ) should be true", function() {
            expect( isVowelV5( 'a' ) ).toEqual( true );
        });
    });

     describe( "Test with E and e. ", function() {

        it( "isVowelV5( 'E' ) should be true", function() {
            expect( isVowelV5( 'E' ) ).toEqual( true );
        });
        
        it( "isVowelV5( 'e' ) should be true", function() {
            expect( isVowelV5( 'e' ) ).toEqual( true );
        });
    });

    
     describe( "Test with I and i. ", function() {

        it( "isVowelV5( 'I' ) should be true", function() {
            expect( isVowelV5( 'I' ) ).toEqual( true );
        });
        
        it( "isVowelV5( 'i' ) should be true", function() {
            expect( isVowelV5( 'i' ) ).toEqual( true );
        });
        
    });
    

    describe( "Test with O and o. ", function() {

        it( "isVowelV5( 'O' ) should be true", function() {
            expect( isVowelV5( 'O' ) ).toEqual( true );
        });
        
        it( "isVowelV5( 'o' ) should be true", function() {
            expect( isVowelV5( 'o' ) ).toEqual( true );
        });
        
    });
    
    describe( "Test with U and u. ", function() {

        it( "isVowelV5( 'U' ) should be true", function() {
            expect( isVowelV5( 'U' ) ).toEqual( true );
        });
        
        it( "isVowelV5( 'u' ) should be true", function() {
            expect( isVowelV5( 'u' ) ).toEqual( true );
        });
        
    });

    describe( "Test with Z. ", function() {

        it( "isVowelV5( 'Z' ) should be false", function() {
            expect( isVowelV5( 'Z' ) ).toEqual( false );
        });
    });    
 

 
});