const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel} = require("./database/db");
const { auth, JWT_SECRET } = require("./authentication/auth") 
const mongoose = require("mongoose"); // used for connection to db
const bcrypt = require('bcrypt'); // for hashing the pass
const { z } = require("zod"); // for input validation

const saltRounds = 10;
mongoose.connect("mongodb+srv://ashishkr45943:tm57o9yh88B9PRW9@cluster0.6uyzs.mongodb.net/todo-db");
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
	try {
		const reqBody = z.object({
			email: z.string().min(10).max(100).email(),
			name: z.string().min(3).max(50),
			password: z.string().min(8).max(50)
		});

		const pasrsdData = reqBody.safeParse(req.body);

		if(!pasrsdData.success) {
			res.json({
				message: "Incorrect formate",
				error: pasrsdData.error
			});
			return;
		}

		const email = req.body.email;
		const password = req.body.password;
		const name = req.body.name;
		const hasedPass = await bcrypt.hash(password, saltRounds)
		
		await UserModel.create({
			email: email,
			password: hasedPass,
			name: name
		});

		res.json({
			message: "You're Logged in!"
		});
	} catch (error) {
		res.status(500).json({
            message: "Error while signing up"            
        })
	}
});

app.post("/login", async function(req, res) {
	const email = req.body.email;
	const password = req.body.password;

	const user = await UserModel.findOne({
		email: email,
	});

	const passwordMatch = await bcrypt.compare(password, user.password);
	
	if(user && passwordMatch) {
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
        userId
    }).populate('userId').exec();

	res.json({ todos });
});

app.listen(3000);