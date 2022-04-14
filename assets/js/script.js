const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswers = document.querySelector(".correct-answers");
const seeResultBtn = document.querySelector(".see-result-btn");
const remainingTime = document.querySelector(".remaining-time");
const timeUpText = document.querySelector(".time-up-text");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const quizHomeBox = document.querySelector(".quiz-home-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
const goHomeBtn = document.querySelector(".go-home-btn");
// const startQuizBtn = document.querySelector(".start-quiz-btn");
const categoryBox = document.querySelector(".category-box");
const categoryText = document.querySelector(".category-text");
const totalScore = document.querySelector(".total-score");

let attempt=0;
let questionIndex=0;
let number=0;
let score=0;
let myArray=[];
let interval;
let categoryIndex;
let numCorrect=0;

myApp=[
{
     category:"Quick Math",
    quizWrap:[
        {
        question:"2 x 3 = ?",
        options:["5","2","4","6"],
        answer:3,
        },
        {
        question:"12 : ? = 3",
        options:["4","6","3","0"],
        answer:0,
        },
        {
        question:"3 x 3 = ?",
        options:["6","1","9","0"],
        answer:2,
        },
        {
        question:"67 - ? = 34",
        options:["33","43","17","23"],
        answer:0,
        },
        {
        question:"? : 4 = 8",
        options:["12","2","32","8"],
        answer:2,
        },
        {
        question:"4 = ? + 2",
        options:["4","2","1","0"],
        answer:1,
        },
        {
        question:"4 + 8 = ?",
        options:["12","11","6","13"],
        answer:0,
        },
        {
        question:"? - 8 = 1",
        options:["6","19","9","7"],
        answer:2,
        },
        {
        question:"5 + 8 = ?",
        options:["13","18","19","3"],
        answer:0,
        },
        {
        question:"36 = 53 - ?",
        options:["13","0","17","23"],
        answer:2,
        },
           
    ]
},
{
    category:"True or False",
    quizWrap:[
        {
        question:"2 x 3 = 6",
        options:["True","False"],
        answer:0,
        },
        {
        question:"36 : 4 - 2 = 18",
        options:["True","False"],
        answer:1,
        },
        {
        question:"12 + 4 = 18",
        options:["True","False"],
        answer:1,
        },
        {
        question:"3 x 3 - 3 : 3 = 8",
        options:["True","False"],
        answer:0,
        },
        {
        question:"18 = 16 : 4 * 9",
        options:["True","False"],
        answer:0,
        },
        {
        question:"100 : 4 = 4 x 5",
        options:["True","False"],
        answer:1,
        },
        {
        question:"1 + 1 = 12 : 6",
        options:["True","False"],
        answer:0,
        },
        {
        question:"32 : 8 = 3",
        options:["True","False"],
        answer:1,
        },
        {
        question:"0 = 1 + 1 x 0",
        options:["True","False"],
        answer:1,
        },
        {
        question:"36 : 8 = 4",
        options:["True","False"],
        answer:1,
        },
    ]
},
{
    category:"Hard Math",
    quizWrap:[
        {
            question:"3 x 12 = ?",
            options:["14","26","36","66"],
            answer:2,
        },
        {
            question:"? + (3 x 4) = 24",
            options:["12","8","9","6"],
            answer:0,
        },
        {
            question:"25 : 5 = ?",
            options:["20","1","0","5"],
            answer:3,
        },
        {
            question:"(4 + ?) x 10 = 60",
            options:["5","2","6","10"],
            answer:1,
        },
        {
            question:"24 : 8 + 12 : 4 = ?",
            options:["5","9","6","10"],
            answer:2,
        },
        {
            question:"5 : 5 + 7 x 5 = ?",
            options:["6","36","26","63"],
            answer:1,
        },
        {
            question:"40 = (3 + ?) x 5",
            options:["6","1","7","5"],
            answer:3,
        },
        {
            question:"16 + 2 - 7 = ?",
            options:["11","14","21","3"],
            answer:0,
        },
        {
            question:"27 : ? = 3",
            options:["2","9","6","7"],
            answer:1,
        },
        {
            question:"36 : 6 - 100 : ? = 1",
            options:["5","10","15","20"],
            answer:3,
        },
        {
            question:"12 x ? : 4 = 9",
            options:["1","6","3","5"],
            answer:2,
        },
        
    ]
},
{
    category:"Balance",
    quizWrap:[
        {
            question:"Which one is larger???",
            options:["4","equals","2"],
            answer:0,
        },
        {
            question:"Which one is larger???",
            options:["11","equals","11"],
            answer:1,
        },
        {
            question:"Which one is smaller???",
            options:["7","equals","6"],
            answer:2,
        },
        {
            question:"Which one is smaller???",
            options:["1 + 2","equals","3"],
            answer:1,
        },
        {
            question:"Which one is smaller???",
            options:["3 - 1","equals","4 - 2"],
            answer:1,
        },
        {
            question:"Which one is larger???",
            options:["12","equals","17"],
            answer:2,
        },
        {
            question:"Which one is larger???",
            options:["20","equals","4 x 5"],
            answer:1,
        },
        {
            question:"Which one is smaller???",
            options:["9","equals","11"],
            answer:0,
        },
        {
            question:"Which one is smaller???",
            options:["27 : 3","equals","8"],
            answer:2,
        },
        {
            question:"Which one is larger???",
            options:["30","equals","28 - 12"],
            answer:0,
        },
    ]
}
            ]


function createCategory(){
    //console.log(myApp[0].category);
    for(let i=0; i<myApp.length; i++){
        const categoryList=document.createElement("div");
        categoryList.innerHTML=myApp[i].category;
        categoryList.setAttribute("data-id",i);
        categoryList.setAttribute("onclick","selectedCategory(this)");
        categoryBox.appendChild(categoryList);
    }
}  

function selectedCategory(ele){
    categoryIndex=ele.getAttribute("data-id");
    //console.log(categoryIndex);
    categoryText.innerHTML=myApp[categoryIndex].category;
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
}

function load(){
    number++;
    questionText.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].question;
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + "/" + myApp[categoryIndex].quizWrap.length;
}

function createOptions(){
    optionBox.innerHTML="";
    let animationDelay=0.2;
    for(let i=0; i<myApp[categoryIndex].quizWrap[questionIndex].options.length; i++)
    {
      const option=document.createElement("div");
      option.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].options[i];
      option.classList.add("option");
      option.id=i;
      option.style.animationDelay=animationDelay + "s";
      animationDelay=animationDelay+0.2;
      option.setAttribute("onclick","check(this)");
      optionBox.appendChild(option);
    }
}

function check(ele){
    const id=ele.id;
    if(id==myApp[categoryIndex].quizWrap[questionIndex].answer){
        ele.classList.add("correct");
        score +=10;
        numCorrect++;
        scoreBoard();
    }
    else{
        ele.classList.add("wrong");
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();

    if(number == myApp[categoryIndex].quizWrap.length){
        quizOver();
    }
}

function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
    let hitDuplicate=0;
    //console.log(randomNumber);
    //console.log(myArray.length);
    if(myArray.length ==0){
        questionIndex=randomNumber;
    }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
               //console.log("duplicate random Number:"+ randomNumber);
               hitDuplicate=1;
               //console.log("duplicate found:"+randomNumber);
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    myArray.push(randomNumber);
    console.log(myArray);
    load();
}

function timeIsUp(){
    showTimeUpText();
    for(let i=0; i<optionBox.children.length; i++){
        if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer){
            optionBox.children[i].classList.add("show-correct");
        }
    }
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
}

function startTimer(){
    let timeLimit=10;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
            remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].classList.add("already-answered");
    }
}

function showAnswerDescription(){
    if(typeof myApp[categoryIndex].quizWrap[questionIndex].description !== 'undefined'){
        answerDescription.classList.add("show");
    answerDescription.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].description;
    }
}

function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}

function showTimeUpText(){
    timeUpText.classList.add("show");
}

function hideTimeUpText(){
    timeUpText.classList.remove("show");
}

function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
    generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}

function resetQuiz(){
    attempt=0;
    //questionIndex=0;
    score=0;
    number=0;
    myArray=[];
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}

function quizResult(){
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=numCorrect;
    document.querySelector(".total-wrong").innerHTML=attempt-numCorrect;
    document.querySelector(".total-score").innerHTML=score;
    const percentage = (numCorrect/myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML= percentage.toFixed(2) + "%";
}

seeResultBtn.addEventListener("click",()=>{
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
   quizOverBox.classList.add("show");
   quizResult();
})

startAgainQuizBtn.addEventListener("click",()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

goHomeBtn.addEventListener("click",()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show");
    resetQuiz();
})



// startQuizBtn.addEventListener("click",()=>{
//     quizHomeBox.classList.remove("show");
//     quizBox.classList.add("show");
//     nextQuestion();
// })

window.onload=()=>{
   createCategory();
}