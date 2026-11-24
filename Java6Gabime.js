let mosha = 17;
if (mosha = 18) { //mosha >=
 console.log("Je madhor");
} else {
 console.log("Je i mitur");
}
// Rezultati: "Je i mitur"



let kafja = "espresso";
switch (kafja) {
 case "espresso":
 console.log("Cmimi: 1 $");
 // duhet te shtohet break;
 break;
 case "kapucino":
 console.log("Cmimi: 1.50 $");
 break;
 default:
 console.log("Nuk e kemi");
}
// Rezultati: "Cmimi: 1 $"



let shuma = 0;
for (let i = 1; i <= 10; i++) { // duhet te perfshihet <= 10
 shuma += i;
}
console.log("Shuma 1-10:", shuma);
// Rezultati: Shuma 1-10: 55


const notat = [8, 10, 6];
let shuma = 0;
for (let n in notat) {//duhet te jet let of notat
 shuma += n;
}
console.log(shuma);
// Rezultati: 24