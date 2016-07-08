class Controller {
    constructor(view, world) {
        this.myView = view;
        this.myWorld = world;
    } 
    
    start() {
        // making families;
		this.myView.out(this.myWorld.question);
        this.myWorld.addFamily(1, "Ceratops", "Protruding horn", "Has a frill around its neck", this.myWorld);
        this.myWorld.addFamily(2, "Sauropod", "long neck", "The largest family of the dinosaurs", this.myWorld);
        this.myWorld.addFamily(3, "theropod", "small arms", "Walks on its hind legs", this.myWorld);
        this.myWorld.addFamily(4, "Ornithopod", "lizard like", "three-toed", this.myWorld);
        
        this.myView.out(this.myWorld.getFamilies());
		
		var family = this.myWorld.findFamily("Ceratops");
		family.addSpecies(1, "Triceratops", "veges", "three horns on its face", "7.9m to 9.0m", " 6.1–12.0 tonnes", family, this.myWorld);
		family.addSpecies(2, "Styracosaurus", "veges", "6 horns extending from its frill", "5.5 metres", " 2.7 tonnes", family, this.myWorld);
		family = this.myWorld.findFamily("Sauropod");
		family.addSpecies(1, "Brachiosaurus", "veges", "forelimbs longer than the hindlimbs", "20 metres", "35 - 56 tonnes", family, this.myWorld);
		family.addSpecies(2, "Brontosaurus", "veges", "smaller of the sauropods", "23 metres", "15 tonnes", family, this.myWorld);
		family = this.myWorld.findFamily("theropod");
		family.addSpecies(1, "Tyrannosaurus Rex", "meat", "largest biteforce among terrestrial animals", "12.3m", "9.5 tonnes", family, this.myWorld);
		family.addSpecies(2, "Velociraptor", "meat", "walks only on two toes, while has 4 toes. uses back two toes to walk", "2m", "15kg", family, this.myWorld);
		family = this.myWorld.findFamily("Ornithopod");
		family.addSpecies(1, "Hypsilophodont", "vege", "only one type of hypsilophodon", "1.5m - 2.3m", "20kg", family, this.myWorld);
		
        
		this.myView.out(this.myWorld.getSpeciesByFamily());
        
    }
}