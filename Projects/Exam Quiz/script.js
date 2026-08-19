const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hypermedia Markup Language",
            "Hypertext Machine Language",
            "Hypertext Marking Language"
        ],
        correct: 0 
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3 
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading System Sheets",
            "Control Style Sheets"
        ],
        correct: 1 
    }
];


const quiz = document.querySelector('#quiz');
const answerElm = document.querySelectorAll('.answer'); 
const questionElm = document.querySelector('#question'); 


const [option_1, option_2, option_3, option_4] = [
    document.querySelector('#option_1'),
    document.querySelector('#option_2'),
    document.querySelector('#option_3'),
    document.querySelector('#option_4')
];

const submitBtn = document.querySelector('#submit'); 


let currentQuiz = 0; 
let score = 0;       


const loadQuiz = () => {
    deselectAnswers(); 
    
    const { question, options } = quizData[currentQuiz];

   
    questionElm.innerText = `${currentQuiz + 1}. ${question}`;

    
    options.forEach((curOption, index) => {
        
        window[`option_${index + 1}`].innerText = curOption;
    });
};


const deselectAnswers = () => {
    answerElm.forEach((curElm) => {
        curElm.checked = false; 
    });
};


const getSelectedOption = () => {
   
    return Array.from(answerElm).findIndex((curElm) => curElm.checked);
};


submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption(); 

    
    if (selectedOptionIndex === -1) return;

   
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++; 

    
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else { 
        quiz.innerHTML = `
            <div class="result">
                <h2>🏆 Your Score: ${score}/${quizData.length}</h2>
                <p>Congratulations on completing the quiz!</p>
                <button onclick="location.reload()">Play Again</button>
            </div>
        `;
    }
});


loadQuiz();
       
       