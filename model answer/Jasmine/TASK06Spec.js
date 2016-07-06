describe("TASK Six: Input a currency value in $NZ and convert to $US and $AU and output the results. Do a Google search to find some currency conversion rates.", function () {
    describe("I used a figure to calculate the exchange", function () {
        it("nzToAus() should equal 0.96", function () {
            expect( nzToAus() ).toEqual( 0.96 );
        }); 
    });
    
    describe("I used a figure to calculate the exchange", function () {
        it("nzToUSD() should equal 0.72", function () {
            expect( nzToUSD() ).toEqual( 0.72 );
        }); 
    });
    
    describe("Convert $8NZD to $5.74USD and 7.69AUS", function () {
		var currency = 0;
		beforeEach(function () {
			currency = convertNZDToAUSandUSD(8);
		});
		
		afterEach(function () {
			currency = 0;
		});
        it("ConvertNZDTOAUSANDUSD( 8 ) should return two values and the first should be a number", function () {
            expect( currency[0] ).toEqual( jasmine.any(Number));
        }); 
		it("ConvertNZDTOAUSANDUSD( 8 ) should return two values and the second should be a number", function () {
            expect( currency[1] ).toEqual( jasmine.any(Number) );
        });
		it("ConvertNZDTOAUSANDUSD(8) should return an array". function () {
			expect(currency).toEqual(jasmine.any(Array));
		})
    });
});