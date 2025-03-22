// how ususally we were writing the code
let x = 1; // type inferencing: automatic determination of data types by the JavaScript engine at runtime
console.log(x);

// the ts equivalent
let y: number = 1;
console.log(y);
// cannot direclty run this using nodeJS

// npx tsc -b, this'll convert the code to js code and we can run that.


// now we can't do this 
// y = "AShish"; we get, Type 'string' is not assignable to type 'number'.

// we can do this
let z: number | string = 45;
z = "Lucifer";

function gretting (name: String) {
	console.log("Hello ", name);
}

gretting(z);

let rmd: any = "Hodey";
rmd = true;
rmd = 45;

sumCal(rmd, 0);
// let tick: string = prompt("Enter smth: "); prompt return either string or null dumbass

function sumCal(a: number, b: number) { // this'll also return a number
// even if i dont give : number this'll return a number only cuz both para are of num type
	return a + b;
}
let ans = sumCal(4, 5); // this isn't giving error cuz, its type of feched by the function

function oldEnough(age: number) {
	console.log("Are you 18+: ", age > 18 ? true : false);
}

oldEnough(5);

// Create a function that takes another function as input. and runs it after 1 second.
function delayedCall(fn: () => void) {
	setTimeout(fn, 1000);
}

delayedCall(() => {
	console.log("Fuck you!");
});