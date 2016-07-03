describe( "TASK Two: Test using multiple un-nested if statements whether the .toUpperCase of a character is one of AEIOU.", function() {
    
    describe( "Test with A and a. ", function() {
        it( "isVowelV1( 'A' ) should be true", function() {
            expect( isVowelV1( 'A' ) ).toEqual( true );
        });  
        
        it( "isVowelV1( 'a' ) should be true", function() {
            expect( isVowelV1( 'a' ) ).toEqual( true );
        });
    });

     describe( "Test with E and e. ", function() {

        it( "isVowelV1( 'E' ) should be true", function() {
            expect( isVowelV1( 'E' ) ).toEqual( true );
        });
        
        it( "isVowelV1( 'e' ) should be true", function() {
            expect( isVowelV1( 'e' ) ).toEqual( true );
        });
    });

    
     describe( "Test with I and i. ", function() {

        it( "isVowelV1( 'I' ) should be true", function() {
            expect( isVowelV1( 'I' ) ).toEqual( true );
        });
        
        it( "isVowelV1( 'i' ) should be true", function() {
            expect( isVowelV1( 'i' ) ).toEqual( true );
        });
        
    });
    

    describe( "Test with O and o. ", function() {

        it( "isVowelV1( 'O' ) should be true", function() {
            expect( isVowelV1( 'O' ) ).toEqual( true );
        });
        
        it( "isVowelV1( 'o' ) should be true", function() {
            expect( isVowelV1( 'o' ) ).toEqual( true );
        });
        
    });
    
    describe( "Test with U and u. ", function() {

        it( "isVowelV1( 'U' ) should be true", function() {
            expect( isVowelV1( 'U' ) ).toEqual( true );
        });
        
        it( "isVowelV1( 'u' ) should be true", function() {
            expect( isVowelV1( 'u' ) ).toEqual( true );
        });
        
    });

    describe( "Test with Z. ", function() {

        it( "isVowelV1( 'Z' ) should be false", function() {
            expect( isVowelV1( 'Z' ) ).toEqual( false );
        });
    });    
 

 
});