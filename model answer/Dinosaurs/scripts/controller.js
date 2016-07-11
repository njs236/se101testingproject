class Controller {
    constructor(view, world) {
        this.myView = view;
        this.myWorld = world;
		this.answer = "";
    } 
    
    start() {
        // making families;
		this.myView.out(this.myWorld.question);
        this.myWorld.addFamily(1, "Ceratops", "Protruding horn", "5.5m");
        this.myWorld.addFamily(2, "Sauropod", "long neck", "31.3m");
        this.myWorld.addFamily(3, "theropod", "small arms", "5.5m");
        this.myWorld.addFamily(4, "Ornithopod", "lizard like", "7.25m");
        
        this.myView.out(this.myWorld.getFamilies());
		
		var family = this.myWorld.findFamily("Ceratops");
		family.addSpecies(1, "Triceratops", "7.9m to 9.0m", "6.1 – 12.0 tonnes");
		family.addSpecies(2, "Styracosaurus", "5.5 metres", "2.7 tonnes");
		family = this.myWorld.findFamily("Sauropod");
		family.addSpecies(1, "Brachiosaurus", "20 metres", "35 - 56 tonnes");
		family.addSpecies(2, "Brontosaurus", "23 metres", "15 tonnes");
		family = this.myWorld.findFamily("theropod");
		family.addSpecies(1, "Tyrannosaurus Rex", "12.3m", "9.5 tonnes");
		family.addSpecies(2, "Velociraptor", "2m", "15kg");
		family = this.myWorld.findFamily("Ornithopod");
		family.addSpecies(1, "Hypsilophodont", "1.5m - 2.3m", "20kg");
		
        
		this.myView.out(this.myWorld.getSpeciesByFamily());	
        
    }
	
}