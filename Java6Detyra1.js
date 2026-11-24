let mosha = 12;
let cmimi=0;

if (mosha < 6) {
  cmimi = 0;
} else if (mosha >=6 && <= 17) {
  cmimi = 2;
} else if (mosha >=17 && <= 64) {
  cmimi = 5;
} else {
  cmimi = 3;
}
console.log("Mosha+ " +mosha+ " : bileta kushton + "cmimi" + "$");