class Monarch {
    constructor(id, ruler, marriedTo) {
		this.id = id;
		this.ruler = ruler;
		this.marriedTo = marriedTo;
		
		// needs to have a condition set whether married or not.
		if (marriedTo != "") {
            this.married = true;
        }
		// run function that determines likelihood of survival.
        this.determineSurvival();
        this.allMyFiefdoms = [];
        
    }
    
    addFiefdom(id, lord, numbersOfProperties, yearlyRevenue, doesTax) {
		// pass the function 
        var fiefdom = new Fiefdom(id, lord, numbersOfProperties, yearlyRevenue, doesTax)
        this.allMyFiefdoms.push(fiefdom);
    }
    
    hasFiefdom () {
        return this.allMyFiefdoms.length > 0;
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
    
    getFiefdoms() {
        var n;
        var result = "<p><em>Fiefdoms</em><br/></p>";
        result += "<p>";
        for (n=0; n<this.allMyFiefdoms.length; n+=1) {
            result += "    " + this.allMyFiefdoms[n].id + "    " + this.allMyFiefdoms[n].lord + "<br/>";
        }
        result += "</p>";
        return result;
    }
}