class World {
    constructor (question) {
        this.allMyFamilies = [];
		this.question = question;
    }
    
    addFamily (id, name, feature, size) {
        var family = new Family(id, name, feature, size);
        this.allMyFamilies.push(family);
    }
    
    findFamily(name) {
        var n;
        for (n=0; n<this.allMyFamilies.length; n+=1) {
            if (this.allMyFamilies[n].name == name) {
                return this.allMyFamilies[n];
            }
        }
    }

}