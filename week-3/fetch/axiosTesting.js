const axios = require("axios");

async function dump() {
	const response = await axios.post(
		"https://httpdump.app/dumps/261486f3-e6a0-48fb-baae-d12d4e17aefe", {
			username: "Lucifer",
			password: "diamonion"
		},
		{
			headers: {
				Authenticator: "Lucifero45943"
			},
		}	
	);
	console.log(response.data);
}

dump();

async function cleanMtd() {
	const response = await axios({
		url: "https://httpdump.app/dumps/261486f3-e6a0-48fb-baae-d12d4e17aefe",
		method: "POST",
		headers: {
			Authorization: "Lucifer0123"
		}, 
		data: {
			username: "lucifer45943",
			password: "ashish123",
			dependencys: "4"
		}
	});
	console.log(response.data);
}

cleanMtd();