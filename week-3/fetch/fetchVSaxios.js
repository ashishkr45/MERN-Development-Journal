const axios = require("axios");

// method: 1 (way to use fetch)
console.log("This is from fetch");
// function main1() {
// 	fetch("https://dog.ceo/api/breeds/image/random")
// 		.then(async (response) => {
// 			const json = await response.json();
// 			console.log(json);
// 		});
// }

// method: 2 (way to use fetch)
async function main2() {
	const response = await fetch("https://dog.ceo/api/breeds/image/random", {
		method: "GET"
	});
	const ouput = await response.json();
	console.log(ouput);
}

// main1();
main2();

console.log("We'll Axios now!");

async function axMain() {
	const response = await axios.get("https://dog.ceo/api/breeds/image/random");
	console.log(response.data.lenght);
}

axMain();