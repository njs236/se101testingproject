describe( "TASK Five: Input the temperature in degrees Centigrade and convert this to degrees Kelvin and degrees Fahrenheit and output the results. Do a Google search to find the formula for these conversions", function() {
    describe( "35 Degrees Celcius equals 308.15 Kelvin", function() {
        it( "ToKelvinInCelcius( 35) should equal 308.15", function() {
            expect( toKelvinInCelcius( 35 ) ).toEqual( 308.15 );
        }); 
    });
    
    describe( "35 Degrees Celcius equals 95 Fahrenheit", function() {
        it( "ToFahrenheitInCelcius( 35 ) should equal 95", function() {
            expect( toFahrenheitInCelcius( 35 ) ).toEqual( 95 );
        }); 
    });
    
    describe( "35 Degrees Celcius to Kelvin and Fahrenheit", function() {
		
        it( "FromCelcius( 15 ) should be 308.15 Kelvin", function() {
			var degrees = fromCelcius(15);
            expect( degrees[0] ).toEqual( 308.15 );
        }); 
		it( "FromCelcius( 15 ) should be 95 Fahrenheit", function() {
			var degrees = fromCelcius(15);
            expect( degrees[1] ).toEqual( 95);
        }); 
    });
});