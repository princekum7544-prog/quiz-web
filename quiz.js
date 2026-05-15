let questions=[
    {
        question:"what html stand for !",
        options:[
            "hyper text markup language",
            "hyper text language",
            "hyper text manage language",
            "hello text markup language"
        ],
        correct:"hyper text markup language"
    },
    {
        question:"what js stand for",
        options:[
            "java style",
            "java sheet",
            "java script",
            "java syntax"
        ],
        correct:"java script"
    },
    {
        question:"what css stand for !",
        options:[
            "cascading style sheets",
            "calacute qure system",
            "control system",
            "cell sys tem sine"
        ],
        correct:"cascading style sheets"
    },
    {
        question:"what is mean of programing !",
        options:[
            "coding",
            "a set of coding",
            "that made for specific work",
            "non of them"
        ],
        correct:"that made for specific work"
    }
];

let questionb=document.querySelector(".question");
let option=document.querySelectorAll(".option");
let questioncount=document.querySelector(".question-count");
let nxtbtn=document.querySelector(".next-btn");
let scorebox= document.querySelector(".score");

let currentquestion=0;
let score=0;
let answer=false;


function showquestion(){
    answer=false;
   questionb.innerText=questions[currentquestion].question;

   option.forEach((el,index)=>{
    el.innerText=questions[currentquestion].options[index];
    el.style.backgroundColor="white";
    el.style.Color="black";
   })
  
   questioncount.innerText=`Question ${currentquestion+1} / ${questions.length}`

};

  showquestion();

  option.forEach((el)=>{
    el.addEventListener("click",function(){
          if(answer){
            return;
          }
        answer=true;
        console.log("hello world");
    if(el.innerText===questions[currentquestion].correct){
        el.style.backgroundColor="green";
        score++;

        scorebox.innerText=`Score : ${score}`;
        
    } 
    else{
        el.style.backgroundColor="red";
    }
    })
  })
   
    nxtbtn.addEventListener("click",function(){
      if(currentquestion <questions.length-1){
          currentquestion++;
        showquestion();
      }

      else{
       questionb.innerText = "Quiz Finished 🎉";



          option.forEach((el)=>{

              el.style.display = "none";

        });
        

       questioncount.innerText=`Final Score :${score}`;
        nxtbtn.style.display="none"
        scorebox.style.display="none";
      }
        
    })

