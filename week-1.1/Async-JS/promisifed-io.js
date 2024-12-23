const fs = require("fs");

function sayMyName(resolve) {
	fs.readFile("files/a.txt", "utf-8", (err, data) => {
		if(err) {
			console.log("Error Occured: Unable to read the file!\n");
		} else {
			resolve(data);
		}
	});
}

function setTimeoutPromisified() {
	return new Promise(sayMyName);
}

function print(data) {
	console.log(data);
}

setTimeoutPromisified().then(print);