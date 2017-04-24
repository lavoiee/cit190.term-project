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

$(function(){

  if (localStorage.getItem('quizReady') === null) {
    $('#quizNotReady').modal('toggle');
  }
  else {
    $('#quiz-container').show();
    quiz = JSON.parse(localStorage.quiz);
    alert(JSON.stringify(quiz));
    extractAnswers(quiz);
    extractQuestions(quiz);

  }
});

function extractAnswers(x){
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
