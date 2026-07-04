let startbtn=document.getElementById("start-btn");
let quizcontainer=document.getElementById("quiz-container");
let questiondiv=document.getElementById("question");
let optionslist=document.getElementById("options");
let nextbtn=document.getElementById("nextbtn");
startbtn.addEventListener("click",()=> {

    quizcontainer.classList.remove("hidden");
    startbtn.classList.add("hidden");
    showquestion();
});


let currentQuestionIndex = 0;
let total=0;

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "background-color"
    ],
    answer: "color"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "var",
      "let",
      "const",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which method is used to print something in the browser console?",
    options: [
      "console.print()",
      "print()",
      "console.log()",
      "log.console()"
    ],
    answer: "console.log()"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
      "<!-- -->",
      "/* */",
      "//",
      "#"
    ],
    answer: "//"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: [
      "pop()",
      "shift()",
      "push()",
      "unshift()"
    ],
    answer: "push()"
  },
  {
    question: "Which company developed JavaScript?",
    options: [
      "Microsoft",
      "Google",
      "Netscape",
      "Apple"
    ],
    answer: "Netscape"
  }
];
 

function showquestion(){

    questiondiv.innerHTML = "";
    optionslist.innerHTML = "";


    let question=document.createElement("h2");
    question.textContent=`${quizQuestions[currentQuestionIndex].question}`;
    questiondiv.appendChild(question);

    
    let options = quizQuestions[currentQuestionIndex].options;

    options.forEach((option) => {
    let opt = document.createElement("li");
    opt.textContent = option;
        opt.classList.add("opt");
    opt.addEventListener("click", () => {

    
    [...optionslist.children].forEach(option => {//spread opperator to convert the HTMLCollection into an array
        option.classList.remove("selected");
    });

    
    opt.classList.add("selected");

    let selected = opt.textContent;
    checkanswer(selected);
    if(currentQuestionIndex < quizQuestions.length-1 ){
    currentQuestionIndex++;
    showquestion();
}
else{
     nextbtn.classList.add("hidden");
     restartbtn.classList.remove("hidden");
     showresult();
}

});

    optionslist.appendChild(opt);
});
};

function checkanswer(selected){

    if(selected==quizQuestions[currentQuestionIndex].answer){
        total++;
      
    }
    
}

nextbtn.addEventListener("click",()=>{

    if(currentQuestionIndex < quizQuestions.length-1 ){
    currentQuestionIndex++;
    showquestion();
}
else{
     nextbtn.classList.add("hidden");
     restartbtn.classList.remove("hidden");
     showresult();
}

});

function showresult(){
    questiondiv.innerHTML = "";
    optionslist.innerHTML = "";
   
    optionslist.classList.add("hidden");
    let result=document.createElement("h2");
    result.textContent=`Your score is ${total} out of ${quizQuestions.length}`;
    questiondiv.appendChild(result);

}
restartbtn.addEventListener("click",()=>{
    currentQuestionIndex=0;
    total=0;
    showquestion();
    nextbtn.classList.remove("hidden");
    optionslist.classList.remove("hidden");
    
    restartbtn.classList.add("hidden");});