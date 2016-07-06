describe("TASK Fourteen: Input 10 numbers between 0 and 100. Output the lowest value.", function () {
    describe("Lowest value of 10,20,30,40,50,60,70,80,90,100 ", function () {
        it("Lowest( 10, 20) should equal 10", function () {
            expect( lower( 10, 20 ) ).toEqual( 10 );
        }); 
    });
    
    describe("Lowest value of 10,20,30,40,50,60,70,80,90,100", function () {
        it("the highest number should be 100", function () {
            expect( parseNumber(120) ).toEqual( false);
        }); 
		it("the lowest number should be 0", function () {
            expect( parseNumber(-100) ).toEqual( false );
        }); 
		it("should be a number", function () {
            expect( parseNumber('A') ).toEqual(false );
        }); 
		it("Lowest Value of 10,20,30,40,50,60,70,80,90,100 should be 10", function () {
            expect( outputLowestValue([10,20,30,40,50,60,70,80,90,100]) ).toEqual(10);
        }); 
    });
});