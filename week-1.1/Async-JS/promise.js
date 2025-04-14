/*Promise class gives u promise that, I will return u
something in the Future*/

/* A Promise in JavaScript is an object that represents the eventual completion (or failure) of an
asynchronous operation and its resulting value.*/

// similer the the callback function

function fn() {
	console.log("Jonny Sliverhand");
}

// setTimeout(fn, 5000);

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(2000).then(fn);

// console.log(setTimeoutPromisified(2000)); // returns the object oi the promise class


// easier vereion 
function setTimepromise(resolve, n) {
	setTimeout(resolve, n);
}

setTimepromise(fn, 3000);