const quizDate= [
    {
        question: "what is my name",
        a:"Ahmed",
        b:"Mahmoud",
        c:"Ali",
        d:"Mahmoud",
        correct:"c",
    },
    {
        question: "what is my Fav color",
        a:"red",
        b:"blue",
        c:"black",
        d:"white",
        correct:"c",
    },
    {
        question: "what is my fav food",
        a:"meat",
        b:"chicken",
        c:"rice",
        d:"soup",
        correct:"b",
    },
    {
        question: "what is my fav program language",
        a:"C#",
        b:"Asp",
        c:"php",
        d:"javaScript",
        correct:"d",
    },
];
const quiz = document.getElementById("quiz");
const answerELs = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text  = document.getElementById("a-text"); 
const b_text  = document.getElementById("b-text"); 
const c_text  = document.getElementById("c-text"); 
const d_text  = document.getElementById("d-text");  
const submitBtn = document.getElementById("btn");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
let currentQuestion = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswers();
    questionEl.innerHTML = quizDate[currentQuestion].question;
    a_text.innerHTML = quizDate[currentQuestion].a;
    b_text.innerHTML = quizDate[currentQuestion].b;
    c_text.innerHTML = quizDate[currentQuestion].c;
    d_text.innerHTML = quizDate[currentQuestion].d;
}

function getSelected(){
    let answer = undefined;
    answerELs.forEach((answerEl) =>{
        if ( answerEl.checked){
            answer=answerEl.id
        }
    });
    return answer;

}
function deselectAnswers(){
    answerELs.forEach((answerEl)=>{
        answerEl.checked=false;
    })   
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    if (answer){
        if(answer===quizDate[currentQuestion].correct){
            score++
        }
        currentQuestion++;
        if ( currentQuestion < quizDate.length){
            loadQuiz();
        }else{
            quiz.innerHTML= `<h2>You have answered correctly
             at ${score}/${quizDate.length} questions.</h2>
             <button onclick="location.reload()">Reload</button>`;
        }
       
    }
    
});
