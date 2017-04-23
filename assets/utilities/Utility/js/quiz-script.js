// Hide the quiz-container div until the quiz has bee set up.
$('#quiz-container').hide();

$(function(){

  if (localStorage.getItem('quizReady') === null) {
    $('#quizNotReady').modal('toggle');
  }
  else {
    $('#quiz-container').show();
  }
});
