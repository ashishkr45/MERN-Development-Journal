const express = require("express");

const app = express(); // creating the server

function sum(n) {
	let ans = 0;

	for(let i = 0; i < n; i++) {
		ans += i; 
	}
	return ans;
}

app.get("/", function (req, res) {
    const a = req.query.a;    
	const ans = sum(a);
	res.send("The answer: " + ans);
});

app.listen(3000);