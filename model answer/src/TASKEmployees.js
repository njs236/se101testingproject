class Employee {
	constructor(name, hours, payrate) {
		this.name = name;
		this.hours = hours;
		this.payrate = payrate;
	}
	
	calculatePay() {
		this.pay = this.hours*this.payrate;
	}
	
	getPay() {
		return this.pay;
	}
	
	calculateFlatTax() {
		var flat = 0.25;
		this.tax = this.pay*flat;
	}

	calculateProgressiveTax() {
		// Ensure that the Tax is charged at 25% for first 100, and 33% after that.
		var flat = 25;
		var progressive = this.pay - 100;
		return this.tax = flat + progressive/3;
	}
	
	getTax() {
		return this.tax;
	}

	calculateNettPay() {
		this.nettpay = this.pay - this.tax;
	}
	
	getNettPay() {
		return this.nettpay;
	}
}

class EmployeeDatabase {
	constructor() {
		this.allMyEmployees = [];
	}
	
	createEmployee(name, hours, payrate) {
		var employee = new Employee(name, hours, payrate);
		this.allMyEmployees.push(employee);
	}
	
	getMyEmployees() {
		return this.allMyEmployees;
	}
	calculateTotalFlatTax() {
		var n;
		for (n=0; n<this.allMyEmployees.length; n++) {
			this.allMyEmployees[n].calculateFlatTax();
		}
	}
	
	calculateTotalProgressiveTax() {
		var n;
		for (n=0; n<this.allMyEmployees.length; n++) {
			this.allMyEmployees[n].calculateProgressiveTax();
		}
	}
	
	calculateTotalPay() {
		var n;
		for (n=0; n<this.allMyEmployees.length; n++) {
			this.allMyEmployees[n].calculatePay();
		}
	}
		
	calculateTotalNettPay() {
		var n;
		for (n=0; n<this.allMyEmployees.length; n++) {
			this.allMyEmployees[n].calculateNettPay();
		}
	}
	
	getTotalTax() {
		var n;
		var tax = 0;
		for (n=0; n<this.allMyEmployees.length; n++) {
			tax += this.allMyEmployees[n].getTax();
		}
		return tax;
	}
	
	getTotalNettPay() {
		var n;
		var nettpay = 0;
		for (n=0; n<this.allMyEmployees.length; n++) {
			nettpay += this.allMyEmployees[n].getNettPay();
		}
		return nettpay;
	}
}