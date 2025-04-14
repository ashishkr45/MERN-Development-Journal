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
	if(dumbFuckCheck()) {
		res.status(411).json({
			msg: "You dumb Fuck, no Spoiled kidneys to fix"
		})
	} else {
		for(let i = 0; i < user[0].Kidneys.length; i++) {
			user[0].Kidneys[i].healthy = true;
		}
		res.json ({
			msg: "kidneys Helthified!"
		})
	}
});

function dumbFuckCheck() {
	for (let i = 0; i < user[0].Kidneys.length; i++) {
		if (!user[0].Kidneys[i].healthy) {
			return false;
		}
	}
	return true;
}


app.delete("/", function(req, res) {
	if(dumbFuckCheck()) {
		res.status(411).json({
			msg: "You dumb Fuck, no Spoiled kidneys to remove"
		})
	} else {
		const newKidneys = [];
		for(let i = 0; i < user[0].Kidneys.length; i++) {
			if(user[0].Kidneys[i].healthy) {
				newKidneys.push({
					healthy: true
				});
			}
		}
		user[0].Kidneys = newKidneys;
		res.json ({
			msg: "Unhealthy Kidneys Removed!"
		})
	}
});

app.listen(3000);