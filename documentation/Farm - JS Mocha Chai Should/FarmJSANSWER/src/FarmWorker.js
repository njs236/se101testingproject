var FarmWorker = function (newFirstName, newLastName, newGender, newMainJob, theFarm) {
    'use strict';
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.gender = newGender;
	this.mainJob = newMainJob;
	this.myFarm = theFarm;
};

FarmWorker.prototype.toString = function () {
    'use strict';
    return this.firstName + ' ' + this.lastName + ': ' + this.mainJob;
};

