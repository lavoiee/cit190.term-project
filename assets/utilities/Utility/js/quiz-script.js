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

var quiz = new Quiz();

$(function(){

  if (localStorage.getItem('quizReady') === null) {
    $('#quizNotReady').modal('toggle');
  }
  else {
    $('#quiz-container').show();
    quiz = JSON.parse(localStorage.quiz);
    
  }
});
