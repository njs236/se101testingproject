describe("TASK Five: Input the temperature in degrees Centigrade and convert this to degrees Kelvin and degrees Fahrenheit and output the results. Do a Google search to find the formula for these conversions", function () {
    describe("35 Degrees Celcius equals 308.15 Kelvin", function () {
        it("ToKelvinInCelcius( 35) should equal 308.15 (no rounding necessary)", function () {
            toKelvinFromCelcius( 35 ).should.equal( 308.15 );
        }); 
    });
    
    describe("35 Degrees Celcius equals 95 Fahrenheit", function () {
        it("ToFahrenheitInCelcius( 35 ) should equal 95 (0 decimal places)", function () {
            toFahrenheitFromCelcius( 35 ).should.equal( 95 );
        }); 
    });
    
    describe("35 Degrees Celcius to Kelvin and Fahrenheit", function () {
		var degrees;
		beforeEach(function () {
			degrees = fromCelcius(35);
		});
		it("should return an array", function () {
			degrees.should.be.an('array');
		});
        it("FromCelcius( 15 ) should be 308.15 Kelvin", function () {
            degrees[0].should.equal( 308.15 );
        }); 
		it("FromCelcius( 15 ) should be 95 Fahrenheit", function () {
            degrees[1].should.equal( 95);
        }); 
    });
});