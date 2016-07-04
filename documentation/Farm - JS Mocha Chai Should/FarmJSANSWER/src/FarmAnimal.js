var FarmAnimal = function (newType, newFood, newTotalNumber, newBreed, newCanEatHuman, theFarm) {
    'use strict';
    this.type = newType;
    this.food = newFood;
    this.totalNumber = newTotalNumber;
    this.breed = newBreed;
    this.canEatHuman = newCanEatHuman;
    this.myFarm = theFarm;
};

FarmAnimal.prototype.toString = function () {
    'use strict';
    return "<i>" + this.breed + "</i> (" + this.type + '). ';
};

FarmAnimal.prototype.hasHumanFlesh = function () {
    "use strict";
    return this.canEatHuman === true;
}; 