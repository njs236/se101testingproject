describe( "TASK Thirty-Three: Runners in a race receive a handicap based on their age - 20% of their age is taken off their race time. The input for each person is their identifying number, age and race time. The input is ended by a “rogue” identifier number of 999. Output the winner’s identifying number. (You can assume there will always be at least 1 person competing.)", function() {
	var runner;
	beforeEach(function () {
		runner = new Runner(1, 40, 1800);
		runner.calculateFinishTime()
	})
	describe("there is a Runner with this information loaded into the test", function () {
		it("runner = new Runner(1, 40, 1800)", function () {
			
		});
		it("runner.calculateFinishTime()", function () {
			
		});
	})
    describe( "Testing Handicap", function() {
        it( "runner.getFinishTime() should be 1792", function() {
            runner.getFinishTime().should.equal( 1792 );
        }); 
    });
	
	describe( "Testing Runner Database", function() {
		beforeEach(function () {
			var runnerDB = new RunnerDatabase();
			runnerDB.createRunner(1, 40, 1600);
			runnerDB.createRunner(2, 22, 1092);
			runnerDB.createRunner(3, 23, 1500);
			runnerDB.createRunner(4, 72, 2000);
		})
		it("Runner 0 is number 1, is 40 years old and took 1600 seconds to finish", function () {
			runnerDB.allMyRunners[0].number.should.equal('Bill');
			runnerDB.allMyRunners[0].age.should.equal(40);
			runnerDB.allMyRunners[0].time.should.equal(40);
		})
		it("Runner 1 is number 2, is 22 years old and took 1092 seconds to finish", function () {
			runnerDB.allMyRunners[1].number.should.equal('Victoria');
			runnerDB.allMyRunners[1].age.should.equal(40);
			runnerDB.allMyRunners[1].time.should.equal(40);
		})
		it("Runner 2 is number 3, is 23 years old and took 1500 seconds to finish", function () {
			runnerDB.allMyRunners[2].number.should.equal('Andrew');
			runnerDB.allMyRunners[2].age.should.equal(40);
			runnerDB.allMyRunners[2].time.should.equal(40);
		})
		it("Runner 3 is number 4, is 72 years old and took 2000 seconds to finish", function () {
			runnerDB.allMyRunners[3].number.should.equal('Stephanie');
			runnerDB.allMyRunners[3].age.should.equal(40);
			runnerDB.allMyRunners[3].time.should.equal(40);
		})
        it( "should have 4 Runners", function() {
            runnerDB.allMyRunners.Length.should.equal( 4 );
        }); 
		it( "Find Runner with 1087.6 as time", function() {

            runnerDB.findRunnerByFinishTime(1087.6).number.should.equal( 2);
        }); 
        it( "Winning time should be 1087.6, by runner 2", function() {
            runnerDB.findWinner().should.equal( 2);
        }); 
    });
    
});