class Monarch {
    constructor(id, ruler, marriedTo) {
		this.id = id;
		this.ruler = ruler;
		this.marriedTo = marriedTo;
		if (marriedTo != "") {
            this.married = true;
        }
        this.determineSurvival();
        this.allMyFiefdoms = [];
        
    }
    
    addFiefdom(id, lord, numbersOfProperties, yearlyRevenue, doesTax) {
        var fiefdom = new Fiefdom(id, lord, numbersOfProperties, yearlyRevenue, doesTax)
        this.allMyFiefdoms.push(fiefdom);
    }
    
    hasFiefdom () {
        return this.allMyFiefdoms.length > 0;
    }
    
    determineSurvival() {
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