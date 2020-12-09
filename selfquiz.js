//installing libraries
var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;


console.log(chalk.bgCyan("WELCOME!!"))
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + chalk.yellowBright.bold(" to DO YOU KNOW ANAGHA!"));

//creating a function
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  {  
    console.log(chalk.greenBright("You are right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.redBright("You are wrong!"));
   
  }

  console.log("Current score is: ",score);
}




//creating an object of question and answers inside an array 
var questions =[
  {
    question:
    `Is she an introvert?
    A.Yes
    B.No
    C.Ambivert \n`,
    answer: "C"
  },
  {
    question:
    `Is she a beach or a mountain person? 
    A.Beach
    B.Mountain \n`,
    answer: "B"
  },
  {
    question:
    `Where does she stay?
    A.Thane
    B.Navi Mumbai
    C.Pune \n`,
    answer: "A"
  },
  {
    question:
    `Does she watch anime?
    A.Yes
    B.No \n`,
    answer:"B"
  },
  {
    question:
    `Favourite spot?
    A.Sikkim
    B.Pune
    C.Tibet \n`,
    answer: "A"
  }
]

//for loop to access every question from array
for(i=0 ; i<questions.length ; i++)
{
  quiz(questions[i].question, questions[i].answer)//
}

console.log("---------------------")
console.log("Amazing!!!FINAL SCORE is: ",score)
console.log(chalk.yellowBright("THANK YOU for playing the game"))