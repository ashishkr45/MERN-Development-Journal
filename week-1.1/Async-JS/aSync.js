const fs = require("fs");

function print(err, data) {
	if(err) {
		console.log("File not Found!");
	} else {
		console.log(data);
	}
}

fs.readFile("files/a.txt", "utf-8", print);

fs.readFile("filerfb.txt", "utf-8", print);

console.log("Done!");

setTimeout(function timeOut() {
	console.log("Time out function call");
}, 150000); // 10 Millisecond