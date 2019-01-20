var woord = words[randomWoord(words)]
var antwoord = {}
var grido = document.getElementById("grid");
var row = 1;

function randomWoord(items) {
  return [Math.floor(Math.random()*items.length)];
}

function showWoord() {
  console.log(woord)
}

showWoord()

lingo()

function lingo(){

for(var r = 1; r <= 5; r++){
  for(var l = 1; l <= 5; l++){
    var vakken = document.createElement("div");
    vakken.setAttribute("class", "letters");
    vakken.setAttribute("id", "letter" +l+ "row" +r );
    vakken.innerHTML = "$";
    grido.appendChild(vakken);
                             }
                          }
                  }

function controleren() {
  var schrijven = document.getElementById("schrijven").value;

  if (schrijven == woord) {
    alert("Je hebt het woord geraden");
    
                          }
                       }

function nieuwGame() {
  location.reload(); }
