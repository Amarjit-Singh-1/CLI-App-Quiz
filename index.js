//console.log("Amarjit Singh")
var readlineSync = require('readline-sync')
var score=0;
var username = readlineSync.question("Tell us your name")
console.log("Welcome "+username)

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer===answer) {
    console.log("You are right")
    score+=1
  } else {
    console.log("You are wrong")
    score-=1
  }
  console.log("-----------------")
  console.log("Your Score is: "+score)
  console.log("-----------------")
}

var questions = [
  {
    question: "Is Amarjit older than 18? ",
    answer: "yes"
  },
  {
    question: "Where does Amarjit live? ",
    answer:"mumbai"
  },
  {
    question: "Does Amarjit like tea? ",
    answer: "no"
  }
]

for (var i=0;i<questions.length;i++){
  var currentquestion=questions[i]
  play(currentquestion.question,currentquestion.answer)
}



// var username = readlineSync.question("Tell us your name")
// console.log("Welcome "+username)

// var age = readlineSync.question("Are u older than 18")
// if (age==="yes") {
//   console.log("You are right")
//   score+=1
//   console.log("Score is: "+score)
// }
// else {
//   console.log("You are wrong")
//   score-=1
//   console.log("Score is: "+score)
// }