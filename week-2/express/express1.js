const express = require("express");
const app = express();

const user = [{
	name: "Luci",
	Kidneys: [{
		healthy: true
	}]
}];

app.use(express.json());

app.get("/", function(req, res) {
	const userKidneys = user[0].Kidneys;
	const noOfKidneys = user[0].Kidneys.length;
	let noHealthyKidneys = 0;
	for(let i = 0; i < noOfKidneys; i++) {
		if(userKidneys[i].healthy) {
			noHealthyKidneys++;
		}
	}
	const noUnhealthyKidneys = noOfKidneys - noHealthyKidneys;
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

app.put("/", function(req, res) {
	for(let i = 0; i < user[0].Kidneys.length; i++) {
		user[0].Kidneys[i].healthy = true;
	}
	res.json ({
		msg: "kidneys Helthified!"
	})
});

app.delete("/", function(req, res) {
	for(let i = 0; i < user[0].Kidneys.length; i++) {
		if(!user[0].Kidneys[i].healthy) {
			user[0].Kidneys.splice(i, 1);
		}
	}
	res.json ({
		msg: "Unhealthy Kidneys Removed!"
	})
});

app.listen(3000);