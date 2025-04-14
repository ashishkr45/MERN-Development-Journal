const quizData = [
    {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "JavaScript",
        "correct": "d",
    },
    {
        "question": "What does CSS stand for?",
        "a": "Central Style Sheets",
        "b": "Cascading Style Sheets",
        "c": "Cascading Simple Sheets",
        "d": "Cars SUVs Sailboats",
        "correct": "b",
    },
    {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a",
    },
    {
        "question": "What year was JavaScript launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "none of the above",
        "correct": "b",
    },
	{
		"question": "What is the main purpose of the `this` keyword in JavaScript?",
		"a": "To refer to the current function",
		"b": "To refer to the global object",
		"c": "To refer to the current object",
		"d": "To refer to the parent object",
		"correct": "c"
	},
	{
		"question": "Which of the following is NOT a valid data type in JavaScript?",
		"a": "String",
		"b": "Number",
		"c": "Boolean",
		"d": "Float",
		"correct": "d"
	},
	{
		"question": "What does the `localStorage` object in JavaScript do?",
		"a": "Stores data temporarily",
		"b": "Stores data in the server",
		"c": "Stores data persistently in the browser",
		"d": "Stores data on the user's computer",
		"correct": "c"
	},
	{
		"question": "Which of the following is the correct syntax to add a comment in JavaScript?",
		"a": "// This is a comment",
		"b": "<!-- This is a comment -->",
		"c": "/* This is a comment */",
		"d": "Both a and c",
		"correct": "d"
	},
	{
		"question": "What does the `JSON.parse()` method do in JavaScript?",
		"a": "Converts a JavaScript object into a JSON string",
		"b": "Converts a JSON string into a JavaScript object",
		"c": "Formats a JSON string",
		"d": "Validates a JSON string",
		"correct": "b"
	},
	{
		"question": "Which of the following is a way to declare a variable in JavaScript?",
		"a": "let",
		"b": "const",
		"c": "var",
		"d": "All of the above",
		"correct": "d"
	},
	{
		"question": "What is the output of the following code?\n```javascript\nconsole.log(2 + '2');\n```",
		"a": "4",
		"b": "22",
		"c": "NaN",
		"d": "undefined",
		"correct": "b"
	},
	{
		"question": "Which method is used to find the length of an array in JavaScript?",
		"a": "array.size()",
		"b": "array.length()",
		"c": "array.length",
		"d": "array.size",
		"correct": "c"
	},
	{
		"question": "Which of the following is NOT a JavaScript framework or library?",
		"a": "React",
		"b": "Vue",
		"c": "Django",
		"d": "Angular",
		"correct": "c"
	},
	{
		"question": "What is the default value of an uninitialized variable in JavaScript?",
		"a": "undefined",
		"b": "null",
		"c": "0",
		"d": "NaN",
		"correct": "a"
	}
];

// accessing the html elem.
const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const submitButton = document.getElementById('submit-button');

// stats
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];

function loadQns() {
    const currQns = quizData[currentQuestionIndex];
    // console.log('Loading Question:', currQns);
    questionDiv.textContent = currQns.question;
    optionsDiv.innerHTML = '';

    for (let key of ['a', 'b', 'c', 'd']) {
        const optWrapper = document.createElement('div');
        const input = document.createElement('input');
        input.type = 'radio'; 
        input.name = 'answer'; 
        input.value = key;
		input.className = 'option';

        const label = document.createElement('label');
        label.textContent = currQns[key];

        optWrapper.appendChild(input);
        optWrapper.appendChild(label);
        optionsDiv.appendChild(optWrapper);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadQns();
});

submitButton.addEventListener('click', () => {
    console.log('Button clicked');
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        selectedAnswers.push(selectedOption.value);
    } else {
        selectedAnswers.push(null); 
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQns();
    } else {
        alert("we'll cook smth");
    }
});