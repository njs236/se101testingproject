describe("TASK Thirty: For each of a set of students, take in a name and mark. Output the name and mark of the best student. The delimiter is 'Quit' for the name.", function () {
    describe("Testing Grades", function () {
        it("outputHighestValue( [20,40,60,80,100]) should equal 100", function () {
            expect( outputHighestValue( [20,40,60,80,100]) ).toEqual( 100 );
        }); 
    });
	
	describe ("Testing Grade Data", function () {
		it ("computeGrades([[Bill, 55], [Alex, 75], [Sarah, 67], [Natasha, 99], [Jacob, 99]]) should return [Natasha, 99]", function () {
			expect ( computeGrades([["Bill", 55], ["Alex", 75], ["Sarah", 67], ["Natasha", 99], ["Jacob", 99]]) ).toEqual(["Natasha", 99]);
		})
	})
    
    describe("the input should be valid", function () {
		it("should be a number", function () {
            expect( parseNumber('A') ).toEqual(false );
        }); 
    });
    
});