// Hide the quiz-container div until the quiz has bee set up.
$('#quiz-container').hide();

// Object to hold the JSON quiz information that
// was stored in localStorage from the script.js file.
function Quiz(){
  this.q1Array = [];
  this.q2Array = [];
  this.q3Array = [];
  this.q4Array = [];
  this.q5Array = [];
  this.q6Array = [];

  this.checkAnswers = function(){

  };
}

function CorrectAnswers(){
  this.a1 = null;
  this.a2 = null;
  this.a3 = null;
  this.a4 = null;
  this.a5 = null;
  this.a6 = null;
}

function RandomizedAnswers(){
  this.q1Answers = new Array(4);
  this.q2Answers = new Array(4);
  this.q3Answers = new Array(4);
  this.q4Answers = new Array(4);
  this.q5Answers = new Array(4);
  this.q6Answers = new Array(4);
}

function Answers(){
  this.q1Answers = new Array(4);
  this.q2Answers = new Array(4);
  this.q3Answers = new Array(4);
  this.q4Answers = new Array(4);
  this.q5Answers = new Array(4);
  this.q6Answers = new Array(4);
}

function Questions(){
  this.q1 = null;
  this.q2 = null;
  this.q3 = null;
  this.q4 = null;
  this.q5 = null;
  this.q6 = null;
}

var quiz = new Quiz();
var correctAnswers = new CorrectAnswers();
var questions = new Questions();
var randomizedAnswers = new RandomizedAnswers();
var answers = new Answers();
var sp = "&nbsp;&nbsp;&nbsp;&nbsp;";


$(function(){

  if (localStorage.getItem('quizReady') === null) {
    $('#quizNotReady').modal('toggle');
  }
  else {
    $('#quiz-container').fadeIn(5000);
    quiz = JSON.parse(localStorage.quiz);
    alert(JSON.stringify(quiz));
    extractCorrectAnswers(quiz);
    extractQuestions(quiz);
    randomizeAnswers(quiz);

    // Write Questions and Answers to the Quiz page.
    $('#q1').append(sp + questions.q1);
    $('#q1').after("<li>" +  randomizedAnswers.q1Answers + "</li>");
  }
});

function extractCorrectAnswers(x){
  correctAnswers.a1 = quiz.q1Array[1];
  correctAnswers.a2 = quiz.q2Array[1];
  correctAnswers.a3 = quiz.q3Array[1];
  correctAnswers.a4 = quiz.q4Array[1];
  correctAnswers.a5 = quiz.q5Array[1];
  correctAnswers.a6 = quiz.q6Array[1];
}

function extractQuestions(x){
  questions.q1 = quiz.q1Array[0];
  questions.q2 = quiz.q2Array[0];
  questions.q3 = quiz.q3Array[0];
  questions.q4 = quiz.q4Array[0];
  questions.q5 = quiz.q5Array[0];
  questions.q6 = quiz.q6Array[0];
}

function randomizeAnswers(x){
  // Remove the questions from the arrays.
  quiz.q1Array.shift();
  quiz.q2Array.shift();
  quiz.q3Array.shift();
  quiz.q4Array.shift();
  quiz.q5Array.shift();
  quiz.q6Array.shift();

  //Randomize all of the answer arrays.
  randomizedAnswers.q1Answers = shuffle(quiz.q1Array);
  randomizedAnswers.q2Answers = shuffle(quiz.q2Array);
  randomizedAnswers.q3Answers = shuffle(quiz.q3Array);
  randomizedAnswers.q4Answers = shuffle(quiz.q4Array);
  randomizedAnswers.q5Answers = shuffle(quiz.q5Array);
  randomizedAnswers.q6Answers = shuffle(quiz.q6Array);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
