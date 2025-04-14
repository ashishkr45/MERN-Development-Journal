const fs = require("fs");

// function promise(resolve) {
// 	fs.readFile("smp.txt", "utf-8", (err, data) => {
// 		if (err) {
// 			console.log("Error Occure: Unable to read the file\n");
// 		} else {
// 			const updatedCont = data.trim();

// 			fs.writeFile("files/a.txt", updatedCont, "utf-8", (err) => {
// 				if (err) {
// 					console.log("Error Occure: Unable to write in file\n");
// 				} else {
// 					console.log("File Successfull Updated");
// 					resolve(updatedCont);
// 				}
// 			});
// 		}
// 	});
// }

// function setTimeoutPromisified() {
// 	return new Promise(promise);
// }

// setTimeoutPromisified()
// 	.then((data) => {
// 		console.log("The Updated Content: ", data);
// 	});

fs.readFile("smp.txt", "utf-8", (err, data) => {
		if (err) {
			console.log("Error Occure: Unable to read the file\n");
		} else {
			const updatedCont = data.trim();

			fs.writeFile("files/a.txt", updatedCont, "utf-8", (err) => {
				if (err) {
					console.log("Error Occure: Unable to write in file\n");
				} else {
					console.log("File Successfull Updated");
				}
			});
		}
});