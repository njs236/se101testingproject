class Controller {
    constructor(view, world) {
        this.myView = view;
        this.myWorld = world;
    } 
    
    start() {
        // making monarchs;
        this.myWorld.addMonarch(1, "Duke of Tosa", "");
        this.myWorld.addMonarch(2, "Queen of Zot", "King of Zot");
        this.myWorld.addMonarch(3, "Prince of Tellah", "Princess of Zot");
        this.myWorld.addMonarch(4, "King of Eithennis", "Queen of Emer");
        
        this.myView.out(this.myWorld.getMonarchs());
        
        
        var monarch = this.myWorld.findMonarch(1);
        monarch.addFiefdom(1, "Princess of Zot", 3000, 1000000, false);
        var monarch = this.myWorld.findMonarch(2);
        monarch.addFiefdom(1, "Princess of Zot", 2000, 1050000, false);
        var monarch = this.myWorld.findMonarch(3);
        monarch.addFiefdom(1, "Princess of Zot", 750, 500000, false);
        var monarch = this.myWorld.findMonarch(4);
        monarch.addFiefdom(1, "Princess of Zot", 3400, 2250000, false);
        
        this.myView.out(this.myWorld.getMonarchsAndFiefdoms());
    }
}