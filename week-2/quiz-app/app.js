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
    }
]

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