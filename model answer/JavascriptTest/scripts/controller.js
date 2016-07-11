class Controller {
    constructor(view, world) {
        this.myView = view;
        this.myWorld = world;
    } 
    
    start() {
        // making monarchs;
        this.myWorld.addMonarch(1, "Duke of Tosa", "");
        this.myWorld.addMonarch(2, "Queen of Zot", "01/28/6350");
        this.myWorld.addMonarch(3, "Prince of Tellah", "06/12/6320");
        this.myWorld.addMonarch(4, "King of Eithennis", "14/15/6321");
        
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