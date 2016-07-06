describe( "TASK Thirty-One: For a group of employees, take in their name, hours, and pay rate. Calculate their gross pay, tax and nett pay(tax at 25% of gross), and output them. The delimiter is 'Quit' for the name.", function () {
	describe("there is an employee with this information loaded into the test", function () {
		it("employee = new Employee('Bill', 40,40);", function () {});
		it("employee.calculatePay();", function () {});
		it("employee.calculateFlatTax();", function () {});
		it("employee.calculateNettPay();", function () {});
	});
    describe("Testing Employee", function () {
		var employee;
		beforeEach(function () {
			employee = new Employee("Bill", 40, 40);
			employee.calculatePay();
			
			employee.calculateFlatTax();
			employee.calculateNettPay();

		});

        it("employee.getPay() should equal 1600", function () {
            employee.getPay().should.equal( 1600 );
        }); 

        it("employee.getTax() should be 400", function () {
            employee.getTax().should.equal( 400 );
        }); 
		
        it("employee.getNettPay() should be 1200", function () {
            employee.getNettPay().should.equal( 1200 );
        }); 
    });
	
	describe("Testing Employee Database", function () {
		var employeeDB;
		beforeEach(function () {
			employeeDB = new EmployeeDatabase();
			employeeDB.createEmployee('Bill', 40, 40);
			employeeDB.createEmployee('Victoria', 40, 40);
			employeeDB.createEmployee('Andrew', 40, 40);
			employeeDB.createEmployee('Stephanie', 40, 40);
		});
		
		it("Employee 0 is Bill, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[0].name.should.equal('Bill');
			employeeDB.getMyEmployees()[0].hours.should.equal(40);
			employeeDB.getMyEmployees()[0].payrate.should.equal(40);
		});
		
		it("Employee 1 is Victoria, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[1].name.should.equal('Victoria');
			employeeDB.getMyEmployees()[1].hours.should.equal(40);
			employeeDB.getMyEmployees()[1].payrate.should.equal(40);
		});
		
		it("Employee 2 is Andrew, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[2].name.should.equal('Andrew');
			employeeDB.getMyEmployees()[2].hours.should.equal(40);
			employeeDB.getMyEmployees()[2].payrate.should.equal(40);
		});
		
		it("Employee 3 is Stephanie, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[3].name.should.equal('Stephanie');
			employeeDB.getMyEmployees()[3].hours.should.equal(40);
			employeeDB.getMyEmployees()[3].payrate.should.equal(40);
		});
		
        it("should have 4 employees", function () {
            employeeDB.should.have.property('allMyEmployees').with.length( 4 );
        }); 
    });
	
});