
const BLANK = "";
const STAR = "*";
const SPACE = "&nbsp;";
const NEWLINE = "<BR/>";

class View {


clr () {
    document.body.style.fontFamily = 'Courier New';
    document.body.innerHTML = "";
};

out ( newText ) {
    document.body.innerHTML += newText;
};

add ( newText ) {
    document.body.innerHTML += "<br/>" + newText;
};
}