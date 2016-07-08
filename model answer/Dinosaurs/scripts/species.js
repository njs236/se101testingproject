class Species {
    constructor (id, name, eats, answer, size, weight, family, world) {
        this.id = id;
        this.name = name;
        this.eats = eats;
        this.answer = answer;
        this.size = size;
		this.weight = weight;
		this.myFamily = family;
		this.myWorld = world;
    }
	
	question () {
		return this.myWorld.question;
	}
    
    
}