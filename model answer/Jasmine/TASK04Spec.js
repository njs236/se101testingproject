describe("TASK Four: Calculate the Cost of a product given the formula Cost = Quantity multiplied Unit Price and Total Cost is given by the formula Total Cost = Cost multiplied by 0.125 plus Cost. Input the Quantity and the Unit Price.", function () {
    describe("Cost with Price of $15 and quantity of 1 million", function () {
        it("Cost( 1000000, 15 ) should equal 15000000", function () {
            expect( calculateCost( 1000000 , 15 ) ).toEqual( 15000000 );
        }); 
    });
    
    describe("Total Cost of Teddy Bear with quantity of 1 million and Price of $15", function () {
        it("TotalCost( 1000000, 15 ) should equal 16875000", function () {
            expect( totalCost( 1000000 , 15) ).toEqual( 16875000 );
        }); 
		it ("Cost(1000000, 15) should equal 15000000", function () {
			expect (calculateCost(1000000, 15)).toEqual(15000000);
		});
    });
    
    describe("valid UnitPrice", function () {
        it("parseUnitPrice( 15 ) should be true", function () {
            expect( parseUnitPrice( 15 ) ).toEqual( 15);
        }); 
    });
	
	describe("valid Quantity", function () {
        it("parseQuantity( 100 ) should be true", function () {
            expect( parseQuantity( 100 ) ).toEqual( 100 );
        }); 
    });
	
	describe("invalid Quantity", function () {
        it("parseQuantity( 10.5 ) should be false", function () {
            expect( parseQuantity( 10.5 ) ).toEqual( false );
        }); 
    });
	
	describe("invalid Price", function () {
        it("parseUnitPrice( -10 ) should be false", function () {
            expect( parseUnitPrice( -10 ) ).toEqual( false );
        }); 
    });
});