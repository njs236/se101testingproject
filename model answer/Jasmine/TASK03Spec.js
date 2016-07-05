describe( "TASK Three: Calculate the area of a rectangle given the formula Area = Length multiplied by Width. Input the Length and Width.", function() {
	
    describe( "Area of 4 and 10", function() {
        it( "area( 4, 10) should equal 40", function() {
            expect( area( 4, 10 ) ).toEqual( 40 );
        }); 
    });
	describe( "area of 4 and 10", function() {
        it( "product( 4, 10) should equal 40", function() {
            expect( product( 4, 10 ) ).toEqual( 40 );
        }); 
    });
    
    describe( "area of 4 and 10", function() {
		var rectangle;
		
		beforeEach(function() {
			rectangle = new Rectangle(4,10);
		});
		
        it( "rectangle( 4, 10 ) should be a Rectangle", function() {
            expect( rectangle( 4, 10 ) ).toBe( Rectangle );
        }); 
		it( "area of Rectangle should be a 40", function() {
            expect( rectangle.area() ).toEqual( 40 );
        });
    });
    
    describe( "area of 4 and A", function() {
        it( "area( 4, 'A' ) should fail", function() {
            expect( area( 4, 'A' ) ).toThrow();
        }); 
    });
});