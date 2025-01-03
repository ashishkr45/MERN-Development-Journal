const express = require("express");
const app = express();

// using middlewares
function isOldEnoughMiddleware(req, res, next) {
	const age = req.query.age;
	if(age >= 18) {
		next(); // calling for the next middleware
	} else {
		res.json({
			msg: "Sorry try for different ride."
		});
	}
}

/*
if there is a cetain middleware which need to go in all the routs then,
app.use(isOldEnoughMiddleware);
*/

app.get("/", isOldEnoughMiddleware, function (req, res) {
		res.json({
			msg: "Please enjoy the ride."
		});
	});

app.listen(3000);