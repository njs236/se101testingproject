describe("TASK Four: Calculate the Cost of a product given the formula Cost = Quantity multiplied Unit Price and Total Cost is given by the formula Total Cost = Cost multiplied by 0.125 plus Cost. Input the Quantity and the Unit Price.", function() {
    describe("Cost with Price of $15 and quantity of 1 million", function() {
        it("calculateCost( 1000000, 15 ) should equal 15000000", function() {
            calculateCost( 1000000 , 15 ).should.equal( 15000000 );
        }); 
    });
    
    describe("Total Cost of Teddy Bear with quantity of 1 million and Price of $15", function() {
        it("TotalCost( 1000000, 15 ) should equal 16875000", function() {
            totalCost( 1000000 , 15).should.equal( 16875000 );
        }); 
		it ("Cost(1000000, 15) should equal 15000000", function() {
			calculateCost(1000000, 15).should.equal(15000000);
		});
    });
    
    describe("valid UnitPrice", function() {
        it("isUnitPrice( 15 ) should be true", function() {
            isUnitPrice( 15 ).should.equal( true );
        }); 
    });
	
	describe("valid Quantity", function() {
        it("isQuantity( 100 ) should be true", function() {
            isQuantity( 100 ).should.equal( true );
        }); 
    });
	
	describe("invalid Quantity", function() {
        it("isQuantity( 10.5 ) should be false", function() {
            isQuantity( 10.5 ).should.equal( false );
        }); 
    });
	
	describe("invalid Price", function() {
        it("isUnitPrice( -10 ) should be false", function() {
            isUnitPrice( -10 ).should.equal( false );
        }); 
    });
});