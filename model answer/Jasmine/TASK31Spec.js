describe( "TASK Thirty-One: For a group of employees, take in their name, hours, and pay rate. Calculate their gross pay, tax and nett pay(tax at 25% of gross), and output them. The delimiter is 'Quit' for the name.", function() {
	var employee;
	beforeEach(function () {
		employee = new Employee("Bill", 40, 40);
		employee.calculatePay()
		employee.calculateTax()
		employee.calculateNettPay();
	})
    describe( "Testing Pay", function() {
        it( "Given bill has 40 hours and $40 per hour, Pay should equal 1600", function() {
            expect( employee.getPay() ).toEqual( 1600 );
        }); 
    });
    
    describe( "Testing Tax", function() {
        it( "Given bill has 40 hours and $40 per hour, Tax should be 400", function() {
            expect( employee.getTax() ).toEqual( 400 );
        }); 
    });
	describe( "Testing Net Pay", function() {
        it( "Given bill has 40 hours and $40 per hour, NettPay should be 1200", function() {
            expect( ( employee.getNettPay() ) ).toEqual( 1200 );
        }); 
    });
	
	describe( "Testing Employee Database", function() {
        it( "Testing Employees, creating 4 employees", function() {
			var employeeDB = new EmployeeDatabase();
			employeeDB.createEmployee('Bill', 40, 40);
			employeeDB.createEmployee('Victoria', 40, 40);
			employeeDB.createEmployee('Andrew', 40, 40);
			employeeDB.createEmployee('Stephanie', 40, 40);
            expect( ( employeeDB.getMyEmployees().Length ) ).toEqual( 4 );
        }); 
    });
    
});