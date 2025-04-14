const fs = require("fs");

function readThatShit(yeha_Bhajo) {
	fs.readFile("smp.txt", "utf-8", function(err, data) {
		yeha_Bhajo(data);
	})
}

function readFile() {
	return new Promise(readThatShit);
}

const p = readFile();

function callback(constent) {
	console.log(constent);
}

p.then(callback);