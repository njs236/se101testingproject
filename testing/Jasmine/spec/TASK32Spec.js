describe("TASK Thirty-Two: For a group of employees, take in their name, hours, and rate. Calculate their gross pay, tax and nett pay, and output them. Tax is at 25% on the first $100, with the remainder at 33%. The delimiter is “Quit” for the name. At the end, also output the number of employees, and the total nett pay and the total tax for the group.", function () {
	describe("there is an employee with this information loaded into the test", function () {
		it("employee = new Employee('Bill, 40,40);", function () {		});
		it("employee.calculatePay();", function () {});
		it("employee.calculateProgressiveTax();", function () {});
		it("employee.calculateNettPay();", function () {});
	})
    describe("Testing Employee", function () {
		var employee;
		beforeEach(function () {
			employee = new Employee("Bill", 40, 40);
			employee.calculatePay();
			employee.calculateProgressiveTax();
			employee.calculateNettPay();
		});
        it("employee.getPay() should equal 1600", function () {
            expect(employee.getPay()).toEqual( 1600 );
        }); 
    
        it("employee.getTax() should be 525", function () {
            expect(employee.getTax()).toEqual( 525 );
        }); 
        it("employee.getNettPay() should be 1075", function () {
            expect(employee.getNettPay()).toEqual( 1075 );
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
			expect(employeeDB.getMyEmployees()[0].name).toEqual('Bill');
			expect(employeeDB.getMyEmployees()[0].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[0].payrate).toEqual(40);
		})
		it("Employee 1 is Victoria, works 40 hours and is paid $40/hour", function () {
			expect(employeeDB.getMyEmployees()[1].name).toEqual('Victoria');
			expect(employeeDB.getMyEmployees()[1].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[1].payrate).toEqual(40);
		})
		it("Employee 2 is Andrew, works 40 hours and is paid $40/hour", function () {
			expect(employeeDB.getMyEmployees()[2].name).toEqual('Andrew');
			expect(employeeDB.getMyEmployees()[2].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[2].payrate).toEqual(40);
		})
		it("Employee 3 is Stephanie, works 40 hours and is paid $40/hour", function () {
			expect(employeeDB.getMyEmployees()[3].name).toEqual('Stephanie');
			expect(employeeDB.getMyEmployees()[3].hours).toEqual(40);
			expect(employeeDB.getMyEmployees()[3].payrate).toEqual(40);
		})
        it("should have 4 employees", function () {
            expect(employeeDB.allMyEmployees.length).toEqual( 4 );
        }); 
    });
	
	describe("Testing Total Tax", function () {
		var employeeDB;
		beforeEach(function () {
			employeeDB = new EmployeeDatabase();
			employeeDB.createEmployee('Bill', 40, 40);
			employeeDB.createEmployee('Victoria', 40, 40);
			employeeDB.createEmployee('Andrew', 40, 40);
			employeeDB.createEmployee('Stephanie', 40, 40);
			employeeDB.calculateTotalPay();
			employeeDB.calculateTotalProgressiveTax();
			employeeDB.calculateTotalNettPay();
		});
		it("getTotalTax() should equal 2100", function () {
			expect(employeeDB.getTotalTax()).toEqual(2100);
		}) ;
		it("getTotalNettPay() should equal 4300", function () {
			expect(employeeDB.getTotalNettPay()).toEqual(4300);
		}) ;
	});
});