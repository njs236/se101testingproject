describe("TASK Four: Calculate the Cost of a product given the formula Cost = Quantity multiplied Unit Price and Total Cost is given by the formula Total Cost = Cost multiplied by 0.125 plus Cost. Input the Quantity and the Unit Price.", function () {
    describe("Cost with Price of $15 and quantity of 1 million", function () {
        it("calculateCost( 1000000, 15 ) should equal 15000000", function () {
            calculateCost( 1000000 , 15 ).should.equal( 15000000 );
        }); 
    });
    
    describe("Total Cost of Teddy Bear with quantity of 1 million and Price of $15", function () {
        it("TotalCost( 1000000, 15 ) should equal 16875000", function () {
            totalCost( 1000000 , 15).should.equal( 16875000 );
        }); 
		it ("Cost(1000000, 15) should equal 15000000", function () {
			calculateCost(1000000, 15).should.equal(15000000);
		});
    });
    
    describe("valid UnitPrice", function () {
        it("parseUnitPrice( 15 ) should equal 15", function () {
            parseUnitPrice( 15 ).should.equal( 15 );
        }); 
    });
	
	describe("valid Quantity", function () {
        it("parseQuantity( 100 ) should equal 100", function () {
            parseQuantity( 100 ).should.equal( 100);
        }); 
    });
	
	describe("invalid Quantity", function () {
        it("parseQuantity( 10.5 ) should be false", function () {
            parseQuantity( 10.5 ).should.equal( false );
        }); 
    });
	
	describe("invalid Price", function () {
        it("parseUnitPrice( -10 ) should be false", function () {
            parseUnitPrice( -10 ).should.equal( false );
        }); 
    });
});