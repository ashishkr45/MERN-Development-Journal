const express = require("express");
const fs = require("fs");
const { title } = require("process");
const app = express();
app.use(express.json());

// Route handler: Display the todo
app.get('/', function(req, res) {
    fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error reading the data.");
        } else {
            let todos = JSON.parse(data);
            let disp = todos.map(todo => todo.title).join('\n');
            res.send(disp || "No todos available.");
        }
    });
});

app.post('/', (req, res) => {
	const todoTitle = req.body.title;
	fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
			console.log(err);
        	res.status(500).send("Error reading the data.");
        }

        let todos = [];
        todos = JSON.parse(data);
        
        const newTask = {
          	id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        	title: todoTitle,
        };

        todos.push(newTask);
        fs.writeFile("data.json", JSON.stringify(todos, null, 2), 'utf-8', (err) => {
        	if (err) {
            	console.log(err);
        		res.status(500).send("Error writing the data.");
          	} else {
            	res.json ({
					msg: "Done!"
				});
          	}
        });
    });
});

app.put('/', (req, res) => {
	const todoTitle = req.body.title;
	const todoId = req.body.id;
	fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
			console.log(err);
        	res.status(500).send("Error reading the data.");
        }
		
		let todos = []; // making a place to store the content temp. 
        todos = JSON.parse(data); // converting json to js object

		const task = todos.find(todo => todo.id === todoId);

        if (!task) {
            return res.status(404).json({
                msg: "Task not found with the provided id."
            });
        }

        task.title = todoTitle;

        fs.writeFile("data.json", JSON.stringify(todos, null, 2), 'utf-8', (err) => {
        	if (err) {
            	console.log(err);
        		res.status(500).send("Error writing the data.");
          	} 
			res.json({
                msg: "Task updated successfully.",
                updatedTask: task  // Send the updated task in the response
            });
        });
    });
});

app.delete('/', (req, res) => {
	const todoTitle = req.body.title;
	fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
			console.log(err);
        	res.status(500).send("Error reading the data.");
        }
		
		let todos = []; // making a place to store the content temp. 
        todos = JSON.parse(data); // converting json to js object

		const findTitle = todos.findIndex(todo => todo.title === todoTitle);
        if (findTitle === -1) {
            return res.status(404).send("Task not found.");
        }
        
        let updatedTodos = todos.filter(todo => todo.title !== todoTitle)

        fs.writeFile("data.json", JSON.stringify(updatedTodos, null, 2), 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Error writing the data.");
            } else {
                res.json({
                    msg: "Task deleted successfully."
                });
            }
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
