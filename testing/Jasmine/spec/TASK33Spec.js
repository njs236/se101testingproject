describe("TASK Thirty-Three: Runners in a race receive a handicap based on their age - 20% of their age is taken off their race time. The input for each person is their identifying number, age and race time. The input is ended by a “rogue” identifier number of 999. Output the winner’s identifying number. (You can assume there will always be at least 1 person competing.)", function() {

	describe("there is a Runner with this information loaded into the test", function () {
		it("runner = new Runner(1, 40, 30)", function () {});
		it("runner.calculateFinishTime()", function () {});
	});
    describe("Testing Runner", function() {
		var runner;
		beforeEach(function () {
			runner = new Runner(1, 40, 30);
			runner.calculateFinishTime();
		});
        it("runner.getFinishTime() should be 22", function() {
            expect(runner.getFinishTime()).toEqual( 22 );
        }); 
    });
	
	describe("Testing Runner Database", function() {
		var runnerDB;
		beforeEach(function () {
			runnerDB = new RunnerDatabase();
			runnerDB.createRunner(1, 40, 27);
			runnerDB.createRunner(2, 22, 17);
			runnerDB.createRunner(3, 23, 25);
			runnerDB.createRunner(4, 72, 33);
			runnerDB.calculateFinishTimes();
		})
		it("Runner 0 is number 1, is 40 years old and took 27 minutes to finish", function () {
			expect(runnerDB.allMyRunners[0].number).toEqual(1);
			expect(runnerDB.allMyRunners[0].age).toEqual(40);
			expect(runnerDB.allMyRunners[0].racetime).toEqual(27);
		})
		it("Runner 1 is number 2, is 22 years old and took 17 minutes to finish", function () {
			expect(runnerDB.allMyRunners[1].number).toEqual(2);
			expect(runnerDB.allMyRunners[1].age).toEqual(22);
			expect(runnerDB.allMyRunners[1].racetime).toEqual(17);
		})
		it("Runner 2 is number 3, is 23 years old and took 25 minutes to finish", function () {
			expect(runnerDB.allMyRunners[2].number).toEqual(3);
			expect(runnerDB.allMyRunners[2].age).toEqual(23);
			expect(runnerDB.allMyRunners[2].racetime).toEqual(25);
		})
		it("Runner 3 is number 4, is 72 years old and took 33 minutes to finish", function () {
			expect(runnerDB.allMyRunners[3].number).toEqual(4);
			expect(runnerDB.allMyRunners[3].age).toEqual(72);
			expect(runnerDB.allMyRunners[3].racetime).toEqual(33);
		})
        it("should have 4 Runners", function() {
            expect(runnerDB.allMyRunners.length).toEqual( 4 );
        }); 
		it("Find Runner with 12.6 as time", function() {
            expect(runnerDB.findRunnerByFinishTime(12.6)).toEqual( 2);
        }); 
        it("Winning time should be 12.6, by runner 2", function() {
            expect(runnerDB.findWinner()).toEqual( 2);
        }); 
    });
    
});