function promiseMeToCall(resolve) { // wrapper function which is just using setTimeout to call a function which it's taken in para 
	setTimeout(resolve, 3000);
}

function setTimeoutPromisified() { // returns a object of the class promise which is taking a function as para
	return new Promise(promiseMeToCall);
}

function sayMyName() { // this is just loging
	console.log("Jonny Silverhand");
}

setTimeoutPromisified().then(sayMyName); // this'll call the fn after .then after the resolve fn is called.
// resolve fn call (signal)-> call sayMyName