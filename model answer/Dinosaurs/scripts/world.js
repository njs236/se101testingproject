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
    
    getFamilies() {
		
		// write a sort method that returns the Families from top to bottom based on their average size
        this.allMyFamilies.sort(function (a,b) {
            if (parseInt(a.size) > parseInt(b.size)) {
                return -1;
            }
			if (parseInt(a.size) < parseInt(b.size)) {
                return 1;
            }
			if (parseInt(a.size) == parseInt(b.size)) {
                return 0;
            }
        });
        var n;
		var longest = 0;
		for (n=0; n< this.allMyFamilies.length; n+=1) {
			if (this.allMyFamilies[n].name.length > longest) longest = this.allMyFamilies[n].name.length;
		};
		if (longest%4 == 0) longest += 4;
		while (longest % 4 != 0) {
				longest+=1;
		}
        var result = "";
        result += "<pre>";
        result += "Families, according to their average size<br/>";
        for (n=0; n<this.allMyFamilies.length; n+=1) {
            result += this.allMyFamilies[n].id;
			result += "    ";
			result += this.allMyFamilies[n].name;
			var lengthOfTabs;
			for (lengthOfTabs =this.allMyFamilies[n].name.length; lengthOfTabs < longest; lengthOfTabs+=1){
				result += " ";
			}
			result += this.allMyFamilies[n].size;
			result += "<br/>";
        }
        result += "</pre>";
        return result;
    }
	
	    getSpeciesByFamily() {
        var n;
		var longest = 0;
		for (n=0; n< this.allMyFamilies.length; n+=1) {
			if (this.allMyFamilies[n].name.length > longest) longest = this.allMyFamilies[n].name.length;
		};
		if (longest%4 == 0) longest += 4;
		while (longest % 4 != 0) {
				longest+=1;
		}
        var result = "";
        result += "<pre>";
        result += "Species by Families, according to their average size<br/>";
        for (n=0; n<this.allMyFamilies.length; n+=1) {
            result += this.allMyFamilies[n].id;
			result += "    ";
			result += this.allMyFamilies[n].name;
			var lengthOfTabs;
			for (lengthOfTabs =this.allMyFamilies[n].name.length; lengthOfTabs < longest; lengthOfTabs+=1){
				result += " ";
			}
			result += this.allMyFamilies[n].size;
			result += "<br/>";
			if (this.allMyFamilies[n].hasSpecies()) {
				result += this.allMyFamilies[n].getSpecies();
			}
        }
        result += "</pre>";
        return result;
    }
}