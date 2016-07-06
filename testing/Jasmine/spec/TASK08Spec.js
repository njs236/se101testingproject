describe( "TASK Eight: Input two numbers. If they have different values, output the higher value otherwise output a message saying they are equal.", function() {
    describe( "Higher of 10 and 10", function() {
        it( "isHigher(10, 10) should say 'Both are Equal'", function() {
            expect( isHigher( 10, 10 ) ).toEqual( 'Both are Equal' );
        }); 
    });
    
    describe( "Higher of 10 and 4", function() {
        it( "isHigher( 10, 4 ) should prompt 10", function() {
            expect( isHigher( 10, 4 ) ).toEqual( 10 );
        }); 
    });
    
    describe( "Higher of 10 and 'A'", function() {
        it( "isHigher( 10, 'A' ) should fail", function() {
            expect( isHigher( 10, 'A' ) ).toEqual( jasmine.any(Number));
        }); 
    });
});