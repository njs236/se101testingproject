describe("TASK Eleven: Output the even integers between 0 and 10.", function () {
    
    describe("Should return an array", function () {
        it("outputEvenNumbers( 0, 10 ) should be an array", function () {
            expect( outputEvenNumbers( 0,10 )).toEqual( jasmine.any(Array));
        }); 
    });
    
    describe("should output even numbers", function () {
        it("outputEvenNumbers( 0, 10 ) should return 0,2,4,6,8,10 ", function () {
            expect( outputEvenNumbers( 0, 10 )).toEqual( [0,2,4,6,8,10] );
        }); 
    });
});