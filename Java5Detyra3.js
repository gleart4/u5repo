let piket = 67;
let nota;

if (piket >= 91 && piket <= 100) {
    nota = 10;
}else if(piket >= 81){
    nota = 9;
}else if(piket >= 71){
    nota = 8;
}else if(piket >= 61){
    nota = 7;
}else if(piket >= 51){
    nota = 6;
}else{
    nota = 5;
}

console.log("Piket: " +piket+ " ,Nota: " +nota);
