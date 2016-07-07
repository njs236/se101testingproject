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
        this.allMyMonarchs.sort(function (a,b) {
            if (a.likelihoodOfSurvival == false && b.likelihoodOfSurvival != false) {
                return -1;
            }
        })
        var n;
        var result = "";
        result += "<pre>";
        result += "Monarchs, according to who will survive or not<br/>";
        for (n=0; n<this.allMyMonarchs.length; n+=1) {
            result += this.allMyMonarchs[n].id + "      " + this.allMyMonarchs[n].ruler + "         " + this.allMyMonarchs[n].likelihoodOfSurvival +"<br/>";
        }
        result += "</pre>";
        return result;
    }
    
    getMonarchsAndFiefdoms() {
        var n;
        var result = "";
        result += "<pre>";
        result += "Monarchs and fiefdoms, according to who will survive or not";
        result += "<p>";
        for (n=0; n<this.allMyMonarchs.length; n+=1) {
            result += this.allMyMonarchs[n].id + "      " + this.allMyMonarchs[n].ruler + "         " + this.allMyMonarchs[n].likelihoodOfSurvival +"<br/>";
            if (this.allMyMonarchs[n].hasFiefdom()) {
                result += this.allMyMonarchs[n].getFiefdoms();
            }
        }
        result += "</p>";
        result += "</pre>";
        return result;
    }
}