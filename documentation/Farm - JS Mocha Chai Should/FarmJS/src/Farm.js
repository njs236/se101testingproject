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


Farm.prototype.sortFarmAnimals = function () {
    "use strict";
    this.allMyFarmAnimals.sort(function (a, b) {
        return a.type > b.type;
    });
};

