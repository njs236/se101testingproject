describe("TASK Six: Input a currency value in $NZ and convert to $US and $AU and output the results. Do a Google search to find some currency conversion rates.", function() {
    describe("uses a ratio for Aus", function() {
        it("I used a ratio of 0.96)", function() {
        }); 
    });
    
    describe("Uses a ratio for usd", function() {
        it("I used a ratio of 0.72", function() {
        }); 
    });
    
    describe("Returns an array", function() {
		var currency = 0;
		beforeEach(function() {
			currency = convertNZDToAUSandUSD(8);
		});
		
		afterEach(function() {
			currency = 0;
		});
        it("ConvertNZDTOAUSANDUSD( 8 ) should return two values and first value should be a Number;", function() {
            currency[0].should.be.a('Number');
        }); 
		it("ConvertNZDTOAUSANDUSD( 8 ) should return two values and second value should be a Number;", function() {
            currency[1].should.be.a('Number');
        });
		it ("should be an array", function () {
			currency.should.be.a('Array')
		})
    });
});