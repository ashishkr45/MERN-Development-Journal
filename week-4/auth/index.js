const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const JWT_SECRET = "AshLucifer";
const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send({
                message: "Unable to read the file"
            });
        }

        let users = [];

        // Handle empty or non-existent file
        try {
            users = JSON.parse(data);
        } catch (error) { 
            users = [];
        }

        // Check if user already exists
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(400).send({
                message: "User already exists"
            });
        }

        const token = jwt.sign({ username }, JWT_SECRET);

        const newUser = {
            username: username,
            password: password,
            token: token
        };

		res.send(newUser);
        users.push(newUser);

        fs.writeFile("data.json", JSON.stringify(users, null, 2), "utf-8", (err) => {
            if (err) {
                return res.status(500).send({
                    message: "Error writing the data."
                });
            }
            res.send({
                message: "You are signed up successfully",
                user: newUser
            });
        });
    });
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send({
                message: "Unable to read the file"
            });
        }

        let users = [];
        try {
            users = JSON.parse(data);
        } catch (error) {
            users = [];
        }

        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
			const token = jwt.sign({ username }, JWT_SECRET);
			return res.send({
				message: "Login successful",
				user: {
					username: user.username,
					token: token
				}
			});
		} else {
			return res.status(403).send({
				message: "Invalid username or password"
			});
		}
    });
});

app.get("/me", (req, res) => {
    const token = req.headers.authorization; // Use `authorization` or the correct header name

    if (!token) {
        return res.status(401).send({
            message: "Token not provided"
        });
    }

    try {
        // Verify the token
        const decodedInfo = jwt.verify(token, JWT_SECRET); // Extracts the username from the token

        fs.readFile("data.json", "utf-8", (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: "Unable to read the file"
                });
            }

            let users = [];
            try {
                users = JSON.parse(data);
            } catch (error) {
                users = [];
            }

            const user = users.find((u) => u.username === decodedInfo.username);

            if (user) {
                return res.send({
                    message: "User authorized",
                    user: {
                        username: user.username,
                        password: user.password
                    }
                });
            } else {
                return res.status(403).send({
                    message: "Invalid token"
                });
            }
        });
    } catch (error) {
        return res.status(401).send({
            message: "Invalid token"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});