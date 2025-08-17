console.log("Hello World");

// Assignment #1

function sum(a, b) {
	return a + b;
}

let sum1 = sum(35, 34);
let sum2 = sum("Lucifer"," is_Ashish");

console.log(sum1);
console.log(sum2);

// Assignment #2

function canVote (age) {
	if(age == "minor") {
		return true;
	}
	return age > 18;
}

console.log(canVote(sum1));
console.log(canVote(4));
console.log(canVote("minor"));