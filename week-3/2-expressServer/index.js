const express = require("express");
const app = express();

// parseInt => converts string to integer

// url to pass nd use inputs => "http://localhost:3000/multiply/5/2";
app.get('/multiply/:argrumnetA/:argrumnetb', (req, res) => { 
    const a = parseInt(req.params.argrumnetA);
    const b = parseInt(req.params.argrumnetb);
    res.json({
		answer: a * b
	});
});

// http://localhost:3000/add/5/2
app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
		answer: a + b
	});
});

// http://localhost:3000/divide/5/2
app.get('/divide/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
		answer: a / b
	});
});

// http://localhost:3000/substract/5/2
app.get('/substract/:a/:b', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
		answer: a - b
	});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
