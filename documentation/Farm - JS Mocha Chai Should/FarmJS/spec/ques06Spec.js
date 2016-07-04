
/*globals describe beforeEach Controller it expect Farm, FarmWorker FarmAnimal*/
describe("Question Six", function () {
    'use strict';
    describe("FarmAnimal.hasHumanFlesh function", function () {
        var aAnimal;
        beforeEach(function () {
            aAnimal = new FarmAnimal();
        });

        it("should exist", function () {
			aAnimal.hasHumanFlesh.should.exist;
        });

        it("should return a boolean", function () {
            aAnimal.hasHumanFlesh().should.be.a('boolean');
        });
		
		it("should return false if a FarmAnimal doesn't eat HumanFlesh", function () {
		    aAnimal = new FarmAnimal('null', 'null', 6, 'null', false);
			aAnimal.hasHumanFlesh().should.be.false;
        });

		 it("should return true if a FarmAnimal does eat HumanFlesh", function () {
			aAnimal = new FarmAnimal('null', 'null', null, 'null', true);
			aAnimal.hasHumanFlesh().should.be.true;
        }); 
       
    });
});