describe( "TASK Thirty-One: For a group of employees, take in their name, hours, and pay rate. Calculate their gross pay, tax and nett pay(tax at 25% of gross), and output them. The delimiter is 'Quit' for the name.", function() {
	describe("there is an employee with this information loaded into the test", function () {
		it("employee = new Employee('Bill', 40,40);", function () {});
		it("employee.calculatePay();", function () {});
		it("employee.calculateFlatTax();", function () {});
		it("employee.calculateNettPay();", function () {});
	});
    describe("Testing Employee", function() {
		var employee;
		beforeEach(function () {
			employee = new Employee("Bill", 40, 40);
			employee.calculatePay();
			
			employee.calculateFlatTax();
			employee.calculateNettPay();

		});

        it("employee.getPay() should equal 1600", function() {
            expect(employee.getPay()).toEqual( 1600 );
        }); 

        it("employee.getTax() should be 400", function() {
            expect(employee.getTax()).toEqual( 400 );
        }); 
		
        it("employee.getNettPay() should be 1200", function() {
            expect(employee.getNettPay()).toEqual( 1200 );
        }); 
    });
	
	describe("Testing Employee Database", function() {
		var employeeDB;
		beforeEach(function () {
			employeeDB = new EmployeeDatabase();
			employeeDB.createEmployee('Bill', 40, 40);
			employeeDB.createEmployee('Victoria', 40, 40);
			employeeDB.createEmployee('Andrew', 40, 40);
			employeeDB.createEmployee('Stephanie', 40, 40);
		});
		
		it("Employee 0 is Bill, works 40 hours and is paid $40/hour", function () {
			expect(employeeDB.getMyEmployees()[0].name).toEqual('Bill');
			expect(employeeDB.getMyEmployees()[0].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[0].payrate).toEqual(40);
		});
		
		it("Employee 1 is Victoria, works 40 hours and is paid $40/hour", function () {
			expect(employeeDB.getMyEmployees()[1].name).toEqual('Victoria');
			expect(employeeDB.getMyEmployees()[1].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[1].payrate).toEqual(40);
		});
		
		it("Employee 2 is Andrew, works 40 hours and is paid $40/hour", function () {
			expect(employeeDB.getMyEmployees()[2].name).toEqual('Andrew');
			expect(employeeDB.getMyEmployees()[2].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[2].payrate).toEqual(40);
		});
		
		it("Employee 3 is Stephanie, works 40 hours and is paid $40/hour", function () {
			expect(employeeDB.getMyEmployees()[3].name).toEqual('Stephanie');
			expect(employeeDB.getMyEmployees()[3].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[3].payrate).toEqual(40);
		});
		
        it( "should have 4 employees", function() {
            expect(employeeDB.allMyEmployees.length).toEqual( 4 );
        }); 
    });
	
});