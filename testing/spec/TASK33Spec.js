describe( "TASK Thirty-Three: Runners in a race receive a handicap based on their age - 20% of their age is taken off their race time. The input for each person is their identifying number, age and race time. The input is ended by a “rogue” identifier number of 999. Output the winner’s identifying number. (You can assume there will always be at least 1 person competing.)", function() {
	var runner;
	beforeEach(function () {
		runner = new Runner("1", 40, 1800);
		runner.calculateFinishTime()
	})
    describe( "Testing Handicap", function() {
        it( "Given Runner 1 is 40 years old and took 1800 seconds to finish, handicap should be 1792", function() {
            expect( runner.getFinishTime() ).toEqual( 1792 );
        }); 
    });
	
	describe( "Testing Runner Database", function() {
		it( "Find Runner with 1087.6 as time", function() {
			var runnerDB = new RunnerDatabase();
			runnerDB.createRunner(1, 40, 1600);
			runnerDB.createRunner(2, 22, 1092);
			runnerDB.createRunner(3, 23, 1500);
			runnerDB.createRunner(4, 72, 2000);
            expect( ( runnerDB.findRunnerByFinishTime(1087.6).getNumber())).toEqual( 2);
        }); 
        it( "Winning time should be 1087.6, by runner 2", function() {
			var runnerDB = new RunnerDatabase();
			runnerDB.createRunner(1, 40, 1600);
			runnerDB.createRunner(2, 22, 1092);
			runnerDB.createRunner(3, 23, 1500);
			runnerDB.createRunner(4, 72, 2000);
            expect( ( runnerDB.findWinner())).toEqual( 2);
        }); 
    });
    
});