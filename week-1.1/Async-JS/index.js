const lmg = require("fs");

const cont1 = lmg.readFileSync("files/a.txt", "utf-8");
const cont2 = lmg.readFileSync("files/b.txt", "utf-8");

console.log(cont1+ ", " + cont2);