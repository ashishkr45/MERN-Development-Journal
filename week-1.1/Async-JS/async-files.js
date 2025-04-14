const fs = require("fs");

function readFileAsync() {
	return new Promise( function(resolve, reject) {
		fs.readFile("files/a.txt", "utf-8", function(err, data) {
			if(err) {
				reject("File not Found");
			} else {
				resolve(data);
			}
		});
	});
}

readFileAsync()
	.then(function(data) {
		console.log("File read: ", data);
	})
	.catch(function(err) {
		console.log(err);
	});