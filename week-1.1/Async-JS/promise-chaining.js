function setTimeoutPromisified(time) {
	return new Promise( function(resolve) {
		setTimeout(resolve, time);
	});
}

setTimeoutPromisified(1000)
.then( ()=> {
	console.log("Hello");
	return setTimeoutPromisified(2000); // here this fn is returning a promise 
}).then( () => { // so we can handel that outside also
	console.log("How's everything ?");
	return setTimeoutPromisified(3000);
}).then( () => {
	console.log("Silver Elo rivels Player");
});