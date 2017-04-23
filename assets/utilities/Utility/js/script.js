var quiz = {};
quiz.questions = new Array(8);
quiz.answers = [];
quiz.checkAnswers = function(){

};
var questionNumber;
var numberOfAnswers;
var answerNumber;
var authenticated = false;
var correstAnswer = false;

$(function(){
  $('li#submit').on('click', function(){
    if (localStorage.authenticated) {
      questionNumber = $('#questionNumber option:selected').text();
      numberOfAnswers = $('#numberOfAnswers option:selected').text();
      answerNumber = $('#answerNumber option:selected').text();
      correctAnswer = $('#correctAnswer option:selected').text();
    }
    else {
      alert('You need to be authenticated before you can create a quiz.');
    }


  });
  $('li#finalize').on('click', function(){

  });
  $('#register #register-btn').on('click', function(){
    var iUsername = $('#register #username').val();
    var iEmail = $('#register #email').val();
    var iPass = $('#register #password').val();
    localStorage.setItem('username', iUsername);
    localStorage.setItem('email', iEmail);
    localStorage.setItem('password', iPass);
  });
  $('#login #login-btn').on('click', function(){
    var iUsername = $('#login #username').val();
    if (iUsername === localStorage.username) {
      var iPass = $('#login #password').val();
      if (iPass === localStorage.password) {
        localStorage.setItem('authenticated', true);
      }
      else {
        alert('Password is incorrect.');
        localStorage.setItem('authenticated', false);
      }
    }
    else {
      alert("There is no user with that name in the system.");
      localStorage.setItem('authenticated', false);
    }
  });
});
