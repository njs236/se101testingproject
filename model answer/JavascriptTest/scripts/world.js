class World {
    constructor () {
        this.allMyMonarchs = [];
    }
    
    addMonarch (id, ruler, marriedTo) {
        var monarch = new Monarch(id, ruler, marriedTo);
        this.allMyMonarchs.push(monarch);
    }
    
    findMonarch(id) {
        var n;
        for (n=0; n<this.allMyMonarchs.length; n+=1) {
            if (this.allMyMonarchs[n].id == id) {
                return this.allMyMonarchs[n];
            }
        }
    }
    
    getMonarchs() {
		
		// write a sort method that returns the Monarchs from top to bottom based on their likelihood of survival property. 
        this.allMyMonarchs.sort(function (a,b) {
            if (a.likelihoodOfSurvival > b.likelihoodOfSurvival) {
                return -1;
            }
			if (a.likelihoodOfSurvival < b.likelihoodOfSurvival) {
                return 1;
            }
			if (a.likelihoodOfSurvival == b.likelihoodOfSurvival) {
                return 0;
            }
        });
        var n;
		var longest = 0;
		for (n=0; n< this.allMyMonarchs.length; n+=1) {
			if (this.allMyMonarchs[n].ruler.length > longest) longest = this.allMyMonarchs[n].ruler.length;
		};
		while (longest % 4 != 0) {
				longest+=1;
		}
        var result = "";
        result += "<pre>";
        result += "Monarchs, according to who will survive or not<br/>";
        for (n=0; n<this.allMyMonarchs.length; n+=1) {
            result += this.allMyMonarchs[n].id;
			result += "    ";
			result += this.allMyMonarchs[n].ruler;
			var lengthOfTabs;
			for (lengthOfTabs =this.allMyMonarchs[n].ruler.length; lengthOfTabs < longest; lengthOfTabs+=1){
				result += " ";
			}
			result += this.allMyMonarchs[n].likelihoodOfSurvival
			result += "<br/>";
        }
        result += "</pre>";
        return result;
    }
    
    getMonarchsAndFiefdoms() {
        var n;
		var longest = 0;
		for (n=0; n< this.allMyMonarchs.length; n+=1) {
			if (this.allMyMonarchs[n].ruler.length > longest) longest = this.allMyMonarchs[n].ruler.length;
		};
		while (longest % 4 != 0) {
				longest+=1;
		}
        var result = "";
        result += "<pre>";
        result += "Monarchs and fiefdoms, according to who will survive or not";
        result += "<p>";
        for (n=0; n<this.allMyMonarchs.length; n+=1) {
            result += this.allMyMonarchs[n].id;
			result += "    ";
			result += this.allMyMonarchs[n].ruler;
			var lengthOfTabs;
			for (lengthOfTabs =this.allMyMonarchs[n].ruler.length; lengthOfTabs < longest; lengthOfTabs+=1){
				result += " ";
			}
			result += this.allMyMonarchs[n].likelihoodOfSurvival
			result += "<br/>";
            if (this.allMyMonarchs[n].hasFiefdom()) {
                result += this.allMyMonarchs[n].getFiefdoms();
            }
        }
        result += "</p>";
        result += "</pre>";
        return result;
    }
}