class Monarch {
    constructor(id, ruler, marriedOn) {
		this.id = id;
		this.ruler = ruler;
		this.marriedOn = marriedOn;
		if (marriedOn != "") {
            this.married = true;
        }
		// run function that determines likelihood of survival.
        this.determineSurvival();
        this.allMyFiefdoms = [];
        
    }

    
    determineSurvival() {
		// store the likelihood of survival in the object.
		// If they are married, they have 100 likelihood of survival
		// if they are not married, then likelihood of survival is a random number between 0 and 100 (round to 0 d.p);
        this.likelihoodOfSurvival = 0;
        if (this.married) {
            this.likelihoodOfSurvival = 100;
        } else {
            this.likelihoodOfSurvival = Math.round(100 * Math.random());
        }
    }

}