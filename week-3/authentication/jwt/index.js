const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 	"luciferoAsh";
const app = express();
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	users.push({
		username,
		password
	});

	res.send({
		message: "You are signed in!"
	});
	console.log(users);
});

app.post("/signin", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const user = users.find((u) => {
		return u.username === username && u.password === password;
	})

	if(user) {
		// here we're encoding the username to a JWT token
		const token = jwt.sign({ // convert username to a JWT 
			username: username
		}, JWT_SECRET);

		// user.token = token; there's no need to store it to memory anymore `stateless`.

		res.send({
			token
		});
	} else {
		res.status(403).send({
			message: "Invalid username or password"
		});
	}
	console.log(users);
});

app.get("/me", (req, res) => {
	const token = req.headers.token; // this'll now be giving a JWT
	const decodedInfo = jwt.verify(token, JWT_SECRET); // this'll return the username

	const user = users.find(user => user.username === decodedInfo.username);

	if(user) {
		res.send({
			message: `You are authorized`,
			username: user.username,
			password: user.password
		});
	} else {
        res.status(401).send({
            message: `You are not authorized`
        });
    }
});

app.listen(3000);