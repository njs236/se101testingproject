
const BLANK = "";
const STAR = "*";
const SPACE = "&nbsp;";
const NEWLINE = "<BR/>";

class View {
	setController(controller) {
		this.myController = controller;
	} 

clr () {
    document.body.style.fontFamily = 'Courier New';
    document.body.innerHTML = "";
};

out ( newText ) {
    document.body.innerHTML += newText;
};

question() {
	console.log(this);
	this.myController.myQuestion(this, document.getElementById('input').value)
}

in ( newText) {
	this.clr();
	console.log(this.myController);
	document.body.innerHTML += newText;
	var view = this;

	document.body.innerHTML += "<input id='input' type='text' value='' ></input>";
	document.getElementById('input').addEventListener("keydown", function (e) {
		console.log(e.key);
		
		if (e.key == "Enter"){
			view.question();
		}
	});
}

add ( newText ) {
    document.body.innerHTML += "<br/>" + newText;
};
}