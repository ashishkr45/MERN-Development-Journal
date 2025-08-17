const p = new Promise(function(resolve) {
	let c = 0;
	for(let i = 0; i < 100000; i++) {
		c++;
	}
	resolve("The Synchronous Operation is Completed");
});

function callBack(str) {
	console.log("This message is after .then:\n", str);
}

p.then(callBack);