const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel} = require("./database/db");
const { auth, JWT_SECRET } = require("./authentication/auth") 
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ashishkr45943:tm57o9yh88B9PRW9@cluster0.6uyzs.mongodb.net/todo-db");
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
	const email = req.body.email;
	const password = req.body.password;
	const name = req.body.name;

	await UserModel.create({
		email: email,
		password: password,
		name: name
	});

	res.json({
		message: "You're Logged in!"
	});
});

app.post("/login", async function(req, res) {
	const email = req.body.email;
	const password = req.body.password;

	const user = await UserModel.findOne({
		email: email,
		password: password
	});

	if(user) {
		const token = jwt.sign({
			id: user._id.toString()
		}, JWT_SECRET);

		res.json({
			token: token
		});

	} else {
		res.status(403).json({
			message: "Worng Credentials"
		});
	}
});

app.post("/todo", auth, async function(req, res) {
	const userId = req.userId;
	const todo = req.body.todo;

	await TodoModel.create({
		userId: userId,
		title: todo,
		done: false
	});

	res.status(200).json({
		message: "Todo Created"
	});
});

app.get('/todos', auth, async function(req, res) {
	const userId = req.userId;
	const todos = await TodoModel.find({
		userId: userId
	});

	res.json({ todos });
});

app.listen(3000);