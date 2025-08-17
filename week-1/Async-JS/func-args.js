function add(a, b) {
	return a+b;
}

function sub(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

function mod(a, b) {
	return a % b;
}

function doOperation(a, b, op) {
	return op(a, b);
}

console.log(doOperation(6, 9, mul));
console.log(doOperation(6, 9, add));
console.log(doOperation(6, 9, ubsd));