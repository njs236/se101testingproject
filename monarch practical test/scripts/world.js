class World {
    constructor () {
        this.allMyMonarchs = [];
    }
    
    addMonarch (id, ruler, marriedOn) {
        var monarch = new Monarch(id, ruler, marriedOn);
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
    
}