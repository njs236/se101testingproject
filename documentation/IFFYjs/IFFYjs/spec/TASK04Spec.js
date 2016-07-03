describe( "TASK Four: Test using a single if statement with multiple or || operators in the condition whether the .toUpperCase of a character is one of AEIOU.", function() {
    
    describe( "Test with A and a. ", function() {
        it( "isVowelV3( 'A' ) should be true", function() {
            expect( isVowelV3( 'A' ) ).toEqual( true );
        });  
        
        it( "isVowelV3( 'a' ) should be true", function() {
            expect( isVowelV3( 'a' ) ).toEqual( true );
        });
    });

     describe( "Test with E and e. ", function() {

        it( "isVowelV3( 'E' ) should be true", function() {
            expect( isVowelV3( 'E' ) ).toEqual( true );
        });
        
        it( "isVowelV3( 'e' ) should be true", function() {
            expect( isVowelV3( 'e' ) ).toEqual( true );
        });
    });

    
     describe( "Test with I and i. ", function() {

        it( "isVowelV3( 'I' ) should be true", function() {
            expect( isVowelV3( 'I' ) ).toEqual( true );
        });
        
        it( "isVowelV3( 'i' ) should be true", function() {
            expect( isVowelV3( 'i' ) ).toEqual( true );
        });
        
    });
    

    describe( "Test with O and o. ", function() {

        it( "isVowelV3( 'O' ) should be true", function() {
            expect( isVowelV3( 'O' ) ).toEqual( true );
        });
        
        it( "isVowelV3( 'o' ) should be true", function() {
            expect( isVowelV3( 'o' ) ).toEqual( true );
        });
        
    });
    
    describe( "Test with U and u. ", function() {

        it( "isVowelV3( 'U' ) should be true", function() {
            expect( isVowelV3( 'U' ) ).toEqual( true );
        });
        
        it( "isVowelV3( 'u' ) should be true", function() {
            expect( isVowelV3( 'u' ) ).toEqual( true );
        });
        
    });

    describe( "Test with Z. ", function() {

        it( "isVowelV3( 'Z' ) should be false", function() {
            expect( isVowelV3( 'Z' ) ).toEqual( false );
        });
    });    
 

 
});