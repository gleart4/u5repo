const menyja = { espresso: 1, kapucino: 1.5, caj: 0.8, uje: 0.5 };

let meIShtrenjtiEmri = "";
let cmimiMeILarte = -Infinity;

for (const produkti in menyja) {
  const cmimi = menyja[produkti];
  console.log(produkti+":"cmimi+"$" );

  if (cmimi > cmimiMeILarte) {
    cmimiMeILarte = cmimi;
    meIShtrenjtiEmri = produkti;
  }
}

console.log("Me i shtrenjti: "+meIShtrenjtiEmri);