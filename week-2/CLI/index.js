const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
	.name('word-counter')
	.description('Counts all the words in a file and returns the result')
	.version('0.8.0')

program
	.command('wordcount')
	.description('Counts all the words in file and returns')
	.argument('<file>', 'file to count')
	.action ((file) => {
		fs.readFile(file, "utf-8", (err, data) => {
			if(err) {
				console.log(err);
			} else {
				const words = data.trim().split(/\s+/);
				let count = words.length;
				console.log(`There are ${count} words in the ${file}`);
			}
		});
	});

program
	.command('linecount')
	.description('gives the count of the lines')
	.argument('<file>', 'file to count')
	.action( (file) => {
		fs.readFile(file, "utf-8", (err, data) => {
			if(err) {
				console.log(err);
			} else {
				let count = data.trim().split('\n');
				console.log(`There's total ${count.length} lines in the ${file}`);
			}
		});
	});

program.parse();