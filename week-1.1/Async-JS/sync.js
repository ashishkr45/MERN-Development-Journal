const lmg = require("fs");

/*for converting the files from binary to readable string then mention 
encoding along with the file loc.
const cont1 = lmg.readFileSync("files/a.txt", "utf-8");

*/
const cont1 = lmg.readFileSync("files/a.txt"); // Synchronous
const cont2 = lmg.readFileSync("files/b.txt");
/*
const cont2 = lmg.readFile("files/b.txt"); -> Asynchronous
*/

/*here js is conveting the code to string form binary*/
console.log(cont1+ ", " + cont2);

/*with out encoding the ouput will be in binary*/
console.log(cont1);
console.log(cont2);

/* 
-I/O bound task
	const cont2 = lmg.readFileSync("files/b.txt");
	it's asking the os to read the file and retuen the cont.

-CPU boud task
	let ans = 0;
	for (let i = 0; i <= 10; i++) {
		ans += i;
	}
	consol.log(ans);
	here cpu is req. to perform the above task and output ans.
*/

