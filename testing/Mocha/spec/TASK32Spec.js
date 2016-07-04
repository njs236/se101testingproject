describe( "TASK Thirty-Two: For a group of employees, take in their name, hours, and rate. Calculate their gross pay, tax and nett pay, and output them. Tax is at 25% on the first $100, with the remainder at 33%. The delimiter is “Quit” for the name. At the end, also output the number of employees, and the total nett pay and the total tax for the group.", function() {
	var employee;
	beforeEach(function () {
		employee = new Employee("Bill", 40, 40);
		employee.calculatePay();
		employee.calculateProgressiveTax();
		employee.calculateNettPay();
		var employeeDB = new EmployeeDatabase();
		employeeDB.createEmployee('Bill', 40, 40);
		employeeDB.createEmployee('Victoria', 40, 40);
		employeeDB.createEmployee('Andrew', 40, 40);
		employeeDB.createEmployee('Stephanie', 40, 40);
	})
	describe("there is an employee with this information loaded into the test", function () {
		it("employee = new Employee('Bill, 40,40);", function () {
			
		});
		it("employee.calculatePay();", function () {
			
		});
		it("employee.calculateProgressiveTax();", function () {
			
		});
		it("employee.calculateNettPay();", function () {
			
		});
	})
    describe( "Testing Pay", function() {
        it( "employee.getPay() should equal 1600", function() {
            employee.getPay().should.equal( 1600 );
        }); 
    });
    
    describe( "Testing Tax", function() {
        it( "employee.getTax() should be 525", function() {
            employee.getTax().should.equal( 525 );
        }); 
    });
	describe( "Testing Nett Pay", function() {
        it( "employee.getNettPay() should be 1075", function() {
            employee.getNettPay().should.equal( 1075 );
        }); 
    });
	
	describe( "Testing Employee Database", function() {
		it("Employee 0 is Bill, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[0].name.should.equal('Bill');
			employeeDB.getMyEmployees()[0].hours.should.equal(40);
			employeeDB.getMyEmployees()[0].payrate.should.equal(40);
		})
		it("Employee 1 is Victoria, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[1].name.should.equal('Victoria');
			employeeDB.getMyEmployees()[1].hours.should.equal(40);
			employeeDB.getMyEmployees()[1].payrate.should.equal(40);
		})
		it("Employee 2 is Andrew, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[2].name.should.equal('Andrew');
			employeeDB.getMyEmployees()[2].hours.should.equal(40);
			employeeDB.getMyEmployees()[2].payrate.should.equal(40);
		})
		it("Employee 3 is Stephanie, works 40 hours and is paid $40/hour", function () {
			employeeDB.getMyEmployees()[3].name.should.equal('Stephanie');
			employeeDB.getMyEmployees()[3].hours.should.equal(40);
			employeeDB.getMyEmployees()[3].payrate.should.equal(40);
		})
        it( "should have 4 employees", function() {
            employeeDB.getMyEmployees().Length.should.equal( 4 );
        }); 
    });
	
	describe("Testing Total Tax", function () {
		it("getTotalTax() should equal 2100", function () {
			employeeDB.getTotalTax().should.equal(2100);
		}) ;
	});
	describe("Testing Total Nett Pay", function () {
		it("getTotalNettPay() should equal 4300", function () {
			employeeDB.getTotalNettPay().should.equal(4300);
		}) ;
	});
});