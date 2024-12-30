const express = require("express");
const app = express();

const user = [{
	name: "Luci",
	Kidneys: [{
		healthy: true
	}]
}];

app.get("/", function(req, res) {
	const userKidneys = user[0].Kidneys;
	const noOfKidneys = user[0].Kidneys.length;
	let noHealthyKidneys = 0;
	for(let i = 0; i < noOfKidneys; i++) {
		if(userKidneys[i].healthy) {
			noHealthyKidneys++;
		}
	}
	const noUnhealthyKidneys = userKidneys - noHealthyKidneys;
	res.json({
		noOfKidneys,
		noHealthyKidneys,
		noUnhealthyKidneys
	})
});

app.post("/", function(req, res) {
	const isHealthy = req.body.isHealthy;
	user[0].Kidneys.push({
		healthy: isHealthy
	});

	res.json ({
		msg: "Done!"
	})
});


app.listen(3000);