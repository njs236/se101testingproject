describe("TASK Twelve: Output the integers from 20 to 25 inclusive and their sum.", function () {
    describe("output of 20 to 25", function () {
        it("outputNumbers( 20, 25) should equal return 20,21,22,23,24,25", function () {
            expect( outputNumbers( 20, 25 ) ).toEqual( [20,21,22,23,24,25] );
        }); 
    });
    
    describe("Sum of inclusive numbers of 20 to 25", function () {
        it("sum( 20, 21 ) should equal 41", function () {
            expect( calculateSum( 20, 21 ) ).toEqual( 41 );
        }); 
    });
    
    describe("Sum of 20 to 25", function () {
        it("listSum( list ) should equal 135", function () {
            expect( listSum( outputNumbers(20,25) ) ).toEqual( 135 );
        }); 
    });
});