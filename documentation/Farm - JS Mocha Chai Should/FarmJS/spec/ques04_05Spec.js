
/*globals describe beforeEach Controller it expect Farm, FarmWorker FarmAnimal*/
describe("Question Four and Question Five", function () {
    'use strict';
    describe("FarmAnimal", function () {
        var farmAnimal;
        beforeEach(function () {
            farmAnimal = new FarmAnimal();
        });
	
        it("should have a.type property", function () {
            farmAnimal.should.have.property('type');
        });

        it("should have a .food property", function () {
            farmAnimal.should.have.property('food');
        });

        it("should have a .totalNumber property", function () {
            farmAnimal.should.have.property('totalNumber');
        });

        it("should have a .breed property", function () {
            farmAnimal.should.have.property('breed');
        });
		
		it("should have a .canEatHuman property", function () {
            farmAnimal.should.have.property('canEatHuman');
        });
		
		it("should have a .myFarm property", function () {
            farmAnimal.should.have.property('myFarm');
        });
		
    });

    describe("write a Farm.addFarmAnimals function to add the FarmAnimals", function () {
        var theFarm;
        beforeEach(function () {
            var theController;
            theController = new Controller();
            theFarm = theController.setup();
        });

        it("should have added 5 FarmAnimals", function () {
			theFarm.allMyFarmAnimals.should.have.length(5);
        });


        it("should correctly set FarmAnimal details", function () {

            var aAnimal;
            aAnimal = theFarm.sortFarmAnimals();
		   
            aAnimal = theFarm.allMyFarmAnimals[0];
			aAnimal.myFarm.should.equal.theFarm;
			aAnimal.type.should.equal('Anaconda');
			aAnimal.food.should.equal('Meat');
			aAnimal.totalNumber.should.equal(5);
			aAnimal.breed.should.equal('Eunectes murinus');
			
			aAnimal = theFarm.allMyFarmAnimals[1];
			aAnimal.myFarm.should.equal.theFarm;
			aAnimal.type.should.equal('Crocodile');
			aAnimal.food.should.equal('Sheep');
			aAnimal.totalNumber.should.equal(50);
			aAnimal.breed.should.equal('Crocodylus porosus');
			
			aAnimal = theFarm.allMyFarmAnimals[2];
			aAnimal.myFarm.should.equal.theFarm;
			aAnimal.type.should.equal('Dog');
			aAnimal.food.should.equal('Meat');
			aAnimal.totalNumber.should.equal(10);
			aAnimal.breed.should.equal('Huntaway');
			
			aAnimal = theFarm.allMyFarmAnimals[3];
			aAnimal.myFarm.should.equal.theFarm;
			aAnimal.type.should.equal('Panda Ant');
			aAnimal.food.should.equal('Nectar/Meat');
			aAnimal.totalNumber.should.equal(1000);
			aAnimal.breed.should.equal('Mutillidae');
			
			aAnimal = theFarm.allMyFarmAnimals[4];
			aAnimal.myFarm.should.equal.theFarm;
			aAnimal.type.should.equal('Sheep');
			aAnimal.food.should.equal('Grass');
			aAnimal.totalNumber.should.equal(320);
			aAnimal.breed.should.equal('Merino');
        });
    });
});