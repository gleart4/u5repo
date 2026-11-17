let studenti s = { emri: "Era", mosha: 19, qyteti: "Prizren", viti: 2 };
let numerimi = 0;

for(let celesi in studenti){
    console.log(celesi + " : "+studenti[celesi]);
    numerimi++;
}

console.log("Numri i vetive: "+numerimi);