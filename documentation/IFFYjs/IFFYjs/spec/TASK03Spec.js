describe( "TASK Three test using multiple nested if - else if statements whether the .toUpperCase of a character is one of AEIOU.", function() {
    
    describe( "Test with A and a. ", function() {
        it( "isVowelV2( 'A' ) should be true", function() {
            expect( isVowelV2( 'A' ) ).toEqual( true );
        });  
        
        it( "isVowelV2( 'a' ) should be true", function() {
            expect( isVowelV2( 'a' ) ).toEqual( true );
        });
    });

     describe( "Test with E and e. ", function() {

        it( "isVowelV2( 'E' ) should be true", function() {
            expect( isVowelV2( 'E' ) ).toEqual( true );
        });
        
        it( "isVowelV2( 'e' ) should be true", function() {
            expect( isVowelV2( 'e' ) ).toEqual( true );
        });
    });

    
     describe( "Test with I and i. ", function() {

        it( "isVowelV2( 'I' ) should be true", function() {
            expect( isVowelV2( 'I' ) ).toEqual( true );
        });
        
        it( "isVowelV2( 'i' ) should be true", function() {
            expect( isVowelV2( 'i' ) ).toEqual( true );
        });
        
    });
    

    describe( "Test with O and o. ", function() {

        it( "isVowelV2( 'O' ) should be true", function() {
            expect( isVowelV2( 'O' ) ).toEqual( true );
        });
        
        it( "isVowelV2( 'o' ) should be true", function() {
            expect( isVowelV2( 'o' ) ).toEqual( true );
        });
        
    });
    
    describe( "Test with U and u. ", function() {

        it( "isVowelV2( 'U' ) should be true", function() {
            expect( isVowelV2( 'U' ) ).toEqual( true );
        });
        
        it( "isVowelV2( 'u' ) should be true", function() {
            expect( isVowelV2( 'u' ) ).toEqual( true );
        });
        
    });

    describe( "Test with Z. ", function() {

        it( "isVowelV2( 'Z' ) should be false", function() {
            expect( isVowelV2( 'Z' ) ).toEqual( false );
        });
    });    
 

 
});