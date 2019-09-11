//© Pieter Huisman 99047256
//Applicatie en media ontwikkelaar

var formaatklein = prompt("hoeveel kleine pizza's wilt u hebben?");
var formaatmedium = prompt("hoeveel medium pizza's wilt u hebben?");
var formaatgroot = prompt("hoeveel grootte pizza's wilt u hebben?");
document.write(formaatklein, " kleine pizza's" + "<br>");
document.write(formaatmedium, " medium pizza's" + "<br>");
document.write(formaatgroot, " grootte pizza's" + "<br>");

document.write("<br>");

const prijsklein = 3;
const prijsmedium = 5;
const prijsgroot = 7;
document.write("prijs klein €", formaatklein * prijsklein + "<br>");
document.write("prijs medium €", formaatmedium * prijsmedium + "<br>");
document.write("prijs groot €", formaatgroot * prijsgroot + "<br>");

document.write("<br>");

var totaalprijs = (formaatklein * prijsklein + formaatmedium * prijsmedium + formaatgroot * prijsgroot);
document.write("totaalprijs €", totaalprijs);
