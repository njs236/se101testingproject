

/*globals describe beforeEach it expects Farm, FarmWorker FarmAnimal*/
describe("Basic Check For Original Source Code", function () {
    
    describe("Farm", function () {
        var theFarm;
        beforeEach(function () {
            theFarm = new Farm();
        });

        describe("the .allMyFarmWorkers property", function () {
            it("should have an .allMyFarmWorkers property", function () {
                theFarm.should.have.property('allMyFarmWorkers');
            });
            it("should reference an array", function () {
                theFarm.allMyFarmWorkers.should.be.an('array');
            });
        });

        it("should have an .addFarmWorker function", function () {
            theFarm.addFarmWorker.should.be.a('function');
        });

        it("should have a .sortFarmWorkers function", function () {
			
            theFarm.sortFarmWorkers.should.be.a('function');
        });

        it("should have a .sortFarmAnimals function", function () {
            theFarm.sortFarmAnimals.should.be.a('function');
        });
    });

    describe("FarmWorker", function () {
        var theFarmWorker;
        beforeEach(function () {
            theFarmWorker = new FarmWorker();
        });

        it("should have an .firstName property", function () {
            theFarmWorker.should.have.property('firstName');
        });

        it("should have an .lastName property", function () {
            theFarmWorker.should.have.property('lastName');
        });

        it("should have an .gender property", function () {
            theFarmWorker.should.have.property('gender');
        });

         it("should have an .mainJob property", function () {
            theFarmWorker.should.have.property('mainJob');
        });

        it("should have an .myFarm property", function () {
            theFarmWorker.should.have.property('myFarm');
		});


        
    }); 
});