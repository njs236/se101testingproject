class Runner {
	constructor(number, age, racetime) {
		this.number = number;
		this.age = age;
		this.racetime = racetime;
	}
	
	getNumber() {
		return this.number;
	}
	
	calculateFinishTime() {
		var agehandicap = this.age/5;
		this.finishtime = this.racetime - agehandicap;
	}
	
	getFinishTime() {
		return this.finishtime;
	}

}

class RunnerDatabase {
	constructor() {
		this.allMyRunners = [];
	}
	
	createRunner(number, age, racetime) {
		var runner = new Runner(number, age, racetime);
		this.allMyRunners.push(runner);
	}
	
	calculateFinishTimes() {
		var n;
		for (n=0; n< this.allMyRunners.length; n++) {
			this.allMyRunners[n].calculateFinishTime();
		}
	}
	
	findRunnerByFinishTime(time) {
		var n;
		for (n=0; n < this.allMyRunners.length; n++) {
			if (this.allMyRunners[n].getFinishTime() == time) return this.allMyRunners[n].getNumber();
		}
		return;
	} 

	findWinner() {
		var n;
		var tempArray = []
		for (n=0; n<this.allMyRunners.length; n++) {
			tempArray.push(this.allMyRunners[n].getFinishTime())
		}
		var quickesttime = outputLowestValue(tempArray);
		
		return this.findRunnerByFinishTime(quickesttime);
	}
}