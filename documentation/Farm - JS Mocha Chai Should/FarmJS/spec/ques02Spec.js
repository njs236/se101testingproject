

/*globals describe beforeEach Controller it expect Farm, FarmWorker FarmAnimal*/
describe("Question Two", function () {
   // 'use strict';
    describe("adding the four FarmWorkers", function () {
        var theFarm;
        beforeEach(function () {
            var theController = new Controller();
            theFarm = theController.setup();
        });

        it("should have added 4 FarmWorkers", function () {
            theFarm.should.have.property('allMyFarmWorkers').with.length(4);
        });

        it("should have correctly set details for each FarmWorker", function () {
            var aWorker;
            aWorker = theFarm.sortFarmWorkers();

            aWorker = theFarm.allMyFarmWorkers[0];
			aWorker.should.be.defined;
			aWorker.firstName.should.equal('Bobby');
			aWorker.lastName.should.equal('Elba');
            aWorker.gender.should.equal('M');
			aWorker.mainJob.should.equal('Shearer');
			
			aWorker = theFarm.allMyFarmWorkers[1];
			aWorker.should.be.defined;
			aWorker.firstName.should.equal('Idris');
			aWorker.lastName.should.equal('Kim');
            aWorker.gender.should.equal('M');
			aWorker.mainJob.should.equal('Labourer');
			
			aWorker = theFarm.allMyFarmWorkers[2];
			aWorker.should.be.defined;
			aWorker.firstName.should.equal('Selene');
			aWorker.lastName.should.equal('Mocha');
            aWorker.gender.should.equal('F');
			aWorker.mainJob.should.equal('Labourer');
			
			aWorker = theFarm.allMyFarmWorkers[3];
			aWorker.should.be.defined;
			aWorker.firstName.should.equal('Jasmine');
			aWorker.lastName.should.equal('Patel');
            aWorker.gender.should.equal('F');
			aWorker.mainJob.should.equal('Farm Hand');
			
        });
    });
});