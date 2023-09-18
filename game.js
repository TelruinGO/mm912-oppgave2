let maxLimit = 100;
let minLimit = 0;
const randNr = Math.round(Math.random() * (maxLimit - minLimit)) + minLimit;
const guesss = document.getElementById("guess");

function check() {
    const nr = document.getElementById("inputNumber").value;
    guesss.innerHTML = "You guessed ".concat(nr);
    const beginning = "It is ";
    let ending ="";
    if (nr==randNr){ending = "CORRECT!"}
    else if (nr<randNr) {ending = "too low"}
    else if (nr>randNr) {ending = "too high"}
    else {ending = "Error"}
    ending = beginning.concat(ending);
    document.getElementById("verrify").innerHTML = ending;
}
