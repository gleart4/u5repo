let notat n = [8, 6, 10, 5, 9, 7];

let shuma =0;
let teLarta = 0;
let tePakaluara = 0;


for (let nota of notat) {
    shuma +=nota;

    if(nota==9 || nota==10){
        teLarta++;
    }
    if(nota==5){
        tePakaluara++;
    }
}

let mesatarja = shuma / notat.length;

console.log("Mesatarja: " + mesatarja.toFixed(2));
console.log("Nota e larta: " + notaTeLarta);
console.log("Provime te pakaluara: " + provimeTePakaluara);