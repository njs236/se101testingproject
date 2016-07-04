

/*globals describe beforeEach Controller it expect Farm, FarmWorker FarmAnimal*/
describe("Question Three", function () {
    'use strict';
    describe("Farm.getAllFarmWorkers function", function () {
        var theFarm;
        beforeEach(function () {
            var theController;
            theController = new Controller();
            theFarm = theController.setup();
        });

        it("should return a string", function () {
			theFarm.getAllFarmWorkers().should.be.a('string');
        });

        it("should NOT be hard coded", function () {
            theFarm = new Farm();
			theFarm.getAllFarmWorkers().should.equal('');
        });

        it("should return correctly formatted data in the right order", function () {
            theFarm.getAllFarmWorkers().should.equal('Bobby Elba: Shearer<br>Idris Kim: Labourer<br>Selene Mocha: Labourer<br>Jasmine Patel: Farm Hand<br>');
        });
    });
});