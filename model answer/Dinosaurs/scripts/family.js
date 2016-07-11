class Family {
    constructor(id, name, feature, size) {
		this.id = id;
		this.name = name;
		this.feature = feature;
		this.size = size;
        this.allMySpecies = [];
        
    }
	   
    addSpecies(id, name, size, weight, family) {
		// pass the function 
        var species = new Species(id, name, size, weight, family)
        this.allMySpecies.push(species);
    }
    
    hasSpecies () {
        return this.allMySpecies.length > 0;
    }

    
    getSpecies() {
        var n;
		var longest = 0;
		for (n=0; n< this.allMySpecies.length ; n+=1) {
			if (this.allMySpecies[n].name.length > longest) longest = this.allMySpecies[n].name.length;
		};
		if (longest%4 == 0) longest += 1;
		while (longest % 4 != 0) {
				longest+=1;
		}
        var result = "<p><em>Species</em><br/></p>";
        result += "<p>";
        for (n=0; n<this.allMySpecies.length; n+=1) {
            result += "\t";
			result += this.allMySpecies[n].id;
			result += "\t";
			result += this.allMySpecies[n].name;
			var tabs;
			for (tabs = 0 ; tabs < Math.round(((longest-this.allMySpecies[n].name.length)/4)); tabs+=1){
				
				result += "\t";
			}
			result += this.allMySpecies[n].size;
			result += "\t";
			result += this.allMySpecies[n].weight;
			result += "\n";
        }
        result += "</p>";
        return result;
    }
}