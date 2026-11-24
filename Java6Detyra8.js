const studentet = [
  { emri: "Era", nota: 9 },
  { emri: "Arber", nota: 5 },
  { emri: "Dua", nota: 7 }
];

let kaluan = 0;

for (const student of studentet) {
  const statusi = student.nota >= 6 ? "kaloi" : "nuk kaloi";
  console.log("student.emri: "+ statusi);

  if (student.nota >= 6) {
    kaluan++;
  }
}

console.log("Kaluan: "+kaluan+ " nga "+studentet.length);