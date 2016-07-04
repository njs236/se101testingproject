
/*globals describe beforeEach Controller it expects Farm, FarmWorker FarmAnimal*/
describe("Question Seven", function () {
    'use strict';
    describe("Farm.getAnimalsThatCanEatHumans function", function () {
        var theFarm;
        beforeEach(
            function () {
                var theController;
                theController = new Controller();
                theFarm = theController.setup();
				
            }
        );

        it("should return a string", function () {
			theFarm.getAnimalsThatCanEatHumans().should.be.a('string');
        });

        it("should NOT be hard coded", function () {
            theFarm = new Farm();
            theFarm.getAnimalsThatCanEatHumans().should.be.defined;
        });

        it("should correctly report details of the FarmAnimals that can eat Humans", function () {
			
             theFarm.getAnimalsThatCanEatHumans().should.equal('<i>Eunectes murinus</i> (Anaconda). <br><i>Crocodylus porosus</i> (Crocodile). <br><i>Mutillidae</i> (Panda Ant). <br>');
        });

    });
});