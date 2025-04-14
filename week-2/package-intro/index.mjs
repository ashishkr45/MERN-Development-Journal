import chalk from "chalk";

function addPow(a, b) {
	return (a*a) + (b*b);
}

console.log(chalk.bgCyan("The Anwers is: "));
console.log(chalk.red.bold(addPow(3, 5)));