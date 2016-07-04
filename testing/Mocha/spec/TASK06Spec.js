describe( "TASK Six: Input a currency value in $NZ and convert to $US and $AU and output the results. Do a Google search to find some currency conversion rates.", function() {
    describe( "Convert $15NZD to $14.41AUS", function() {
        it( "nzToAus( 15) should equal $14.41", function() {
            nzToAus( 15 ).should.equal( 14.41 );
        }); 
    });
    
    describe( "Convert $15NZD to $10.76USD", function() {
        it( "nzToUSD( 15 ) should be $10.76USD", function() {
            nzToUSD( 15 ).should.equal( 10.76 );
        }); 
    });
    
    describe( "Convert $8NZD to $5.74USD and 7.69AUS", function() {
		var currency = 0;
		beforeEach(function() {
			currency = convertNZDToAUSandUSD(8);
		});
		
		afterEach(function() {
			currency = 0;
		});
        it( "ConvertNZDTOAUSANDUSD( 8 ) should get $5.74USD", function() {
            currency[0].should.equal( 5.74 );
        }); 
		it( "ConvertNZDTOAUSANDUSD( 8 ) should get $7.69AUS", function() {
            currency[1].should.equal( 7.69 );
        });
    });
});