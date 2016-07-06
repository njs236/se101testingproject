describe("TASK Twenty: Input a series of letters. End with a 'rogue' of a full stop.Output the number of letters entered.", function() {
    describe("Count a string of certain length", function() {
        it("countString( 'Baloo') should equal 5", function() {
            countString( 'Baloo' ).should.equal( 5 );
        }); 
    });
	
	describe("Must be a letter", function () {
		it ("isLetter(9) should be false", function () {
			isLetter(9).should.be.false;
		});
		it ("isLetter(a) should be true", function () {
			isLetter('a').should.be.true;
		});
	});
	
});