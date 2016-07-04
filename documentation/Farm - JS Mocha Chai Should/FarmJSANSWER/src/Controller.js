var Controller = function () {
    'use strict';
};

Controller.prototype.setup = function () {
    'use strict';
    var theFarm;
    theFarm = new Farm();
    // ADD CODE HERE TO CREATE THE FARM WORKERS

      /*
       First Name  Last Name  Main Job Gender       
       Bobby		Elba      shearer	M		
	   Selene		Mocha     labourer  F
	   Idris 		Kim		  farmhand  M
	   Jasmine 		Patel	  labourer  F	    
	  */
   
   theFarm.addFarmWorker('Bobby', 'Elba', 'M', 'Shearer'); 
   theFarm.addFarmWorker('Selene', 'Mocha', 'F', 'Labourer'); 
   theFarm.addFarmWorker('Jasmine', 'Patel', 'F', 'Farm Hand'); 
   theFarm.addFarmWorker('Idris', 'Kim', 'M', 'Labourer'); 

   //ADD CODE HERE TO CREATE THE FARM ANIMALS
	
	/*
	
        Type    	Food   		Total No  Breed     			Eats Humans 
        Sheep   	Grass    	320       Merino     			false
		Crocodile	sheep    	50		  Crocodylus Porosus	true
		Panda Ant	Nectar/meat 1000	  Mutillidae			true
		Dog			Meat		10		  Huntaway				false
		Anaconda	Meat		5		  Eunectes murinus		true
		
 */
    theFarm.addFarmAnimal('Sheep', 'Grass', 320, 'Merino', false);
    theFarm.addFarmAnimal('Crocodile', 'Sheep', 50, 'Crocodylus porosus', true);
    theFarm.addFarmAnimal('Panda Ant', 'Nectar/Meat', 1000, 'Mutillidae', true);
    theFarm.addFarmAnimal('Dog', 'Meat', 10, 'Huntaway', false);
    theFarm.addFarmAnimal('Anaconda', 'Meat', 5, 'Eunectes murinus', true);
 
    return theFarm;
};