describe( "TASK Seventeen: Calculate the Cost of a product given the formula Cost = Quantity multiplied Unit Price and Total Cost is given by the formula Total Cost = Cost multiplied by 0.125 plus Cost. Input the Quantity and the Unit Price until a rogue Quantity of -99 is entered. Output the sum of all the Total Costs calculated", function() {
    describe( "Cost of Teddy Bear of price $15 and quantity of 1000000", function() {
        it( "cost( 1000000, 15 ) should equal 15000000", function() {
            calculateCost( 1000000, 15 ).should.equal( 15000000 );
        }); 
    });
	
	describe( "Total Cost of Teddy Bear of price $15 and quantity of 1000000", function() {
        it( "totalCost( 1000000, 15 ) should equal 16875000", function() {
            totalCost( 1000000, 15 ).should.equal( 16875000);
        }); 
    });
	
	describe( "Total Cost of Toys", function() {
		it("listSum([totalCost( 2,15 ), totalCost( 8,4 ), totalCost( 2,32 )]) should equal $141.75", function () {
			listSum([totalCost( 2,15 ), totalCost( 8,4 ), totalCost( 2,32 )]).should.equal(141.75);
		});
	});
});