var Farm = function () {
    "use strict";
    this.allMyFarmWorkers = [];
    this.allMyFarmAnimals = [];
};

Farm.prototype.addFarmWorker = function (newFirstName, newLastName, newGender, newMainJob) {
    "use strict";
    var newFarmWorker = new FarmWorker(newFirstName, newLastName, newGender, newMainJob, this);
	this.allMyFarmWorkers.push(newFarmWorker);
	};
	
Farm.prototype.sortFarmWorkers = function () {
    "use strict";
    this.allMyFarmWorkers.sort(function (a, b) {
        return a.lastName > b.lastName;
    });
};

Farm.prototype.addFarmAnimal = function (newType, newFood, newTotalNumber, newBreed, newCanEatHuman) {
    "use strict";
    var newFarmAnimal = new FarmAnimal(newType, newFood, newTotalNumber, newBreed, newCanEatHuman, this);
    this.allMyFarmAnimals.push(newFarmAnimal);
};

Farm.prototype.sortFarmAnimals = function () {
    "use strict";
    this.allMyFarmAnimals.sort(function (a, b) {
        return a.type > b.type;
    });
};

Farm.prototype.getAllFarmWorkers = function () {
    "use strict";
    var aWorker, out;
    out = '';
    this.sortFarmWorkers();
    for (aWorker of this.allMyFarmWorkers) {
        out += aWorker.toString() + '<br>';
    }
    return out;
};

Farm.prototype.getAnimalsThatCanEatHumans = function () {
    "use strict";
    var aAnimal, out;
    this.sortFarmAnimals();
    out = '';
    for (aAnimal of this.allMyFarmAnimals) {
        if (aAnimal.hasHumanFlesh()) {
            out += aAnimal.toString() + '<br>';
        }
    }
    return out;
};

