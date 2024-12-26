// function setTimeoutPromisified(ms) {
// 	return new Promise (resolve => setTimeout(resolve, ms));
// }

function setTimeoutPromisified(time) {
	return new Promise( function(resolve) {
		setTimeout(resolve, time);
	});
}

async function solve() {
	await setTimeoutPromisified(5000);
		console.log("Hello");
	await setTimeoutPromisified(1000);
		console.log("How's everything ?");
	await setTimeoutPromisified(2000);
		console.log("Silver Elo rivels Player");
}

solve();

console.log("After the fn call")