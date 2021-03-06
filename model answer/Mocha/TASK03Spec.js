describe("TASK Three: Calculate the area of a rectangle given the formula Area = Length multiplied by Width. Input the Length and Width.", function () {
	
    describe("Area of 4 and 10", function () {
        it("calculateArea( 4, 10) should equal 40", function () {
            calculateArea( 4, 10 ).should.equal( 40 );
        }); 
    });
	describe("area of 4 and 10", function () {
        it("product( 4, 10) should equal 40", function () {
            calculateProduct( 4, 10 ).should.equal( 40 );
        }); 
    });
    
    describe("area of 4 and 10", function () {
		var rectangle;
		
		beforeEach(function () {
			rectangle = new Rectangle(4,10);
		});
		
        it("rectangle( 4, 10 ) should be a Rectangle", function () {
            rectangle.constructor.should.equal(Rectangle);
        }); 
		it("area of Rectangle should be 40", function () {
            rectangle.area().should.equal( 40 );
        });
    });
    
    describe("area of 4 and A", function () {
        it("calculateArea( 4, 'A' ) should fail", function () {
            calculateArea( 4, 'A' ).should.be.a('Number');
        }); 
    });
});