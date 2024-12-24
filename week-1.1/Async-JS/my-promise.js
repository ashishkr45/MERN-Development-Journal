const fs = require("fs");

class Promise {
	constructor(fn) {
		this.fn = fn;
		this.fn (() => {
			this.resolve();
		})
	}

	then(callback) {
		this.resolve = callback;
	}
}

function readThatShit(yeha_Bhajo) {
	fs.readFile("smp.txt", "utf-8", function(err, data) {
		yeha_Bhajo(data);
	})
}

function readFile() {
	return new Promise(readThatShit);
}

const p = readFile();

function callback() {
	console.log("CallBack is called");
}

p.then(callback)