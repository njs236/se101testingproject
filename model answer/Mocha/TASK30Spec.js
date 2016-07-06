describe("TASK Thirty: For each of a set of students, take in a name and mark. Output the name and mark of the best student. The delimiter is 'Quit' for the name.", function () {
    describe("Testing Grades", function () {
        it("outputHighestValue( [20,40,60,80,100]) should equal 100", function () {
            outputHighestValue( [20,40,60,80,100]).should.equal( 100 );
        }); 
    });
	
	describe ("Testing Grade Data", function () {
		it ("computeGrades([['Bill', 55], ['Alex', 75], ['Sarah', 67], ['Natasha', 99], ['Jacob', 99]]) should return [Natasha, 99]", function () {
			computeGrades([['Bill', 55], ['Alex', 75], ['Sarah', 67], ['Natasha', 99], ['Jacob', 99]]).should.deep.equal(["Natasha", 99]);
		})
		it ("computeGrades([['Bill', 55], ['Alex', 75], ['Sarah', 67], ['Natasha', 99], ['Jacob', 99]]) should be an array", function () {
			computeGrades([['Bill', 55], ['Alex', 75], ['Sarah', 67], ['Natasha', 99], ['Jacob', 99]]).should.be.an('Array');
		})
	})
    
    describe("the input should be valid", function () {
		it("should be a number", function () {
            parseNumber('A').should.equal( false );
        }); 
    });
    
});