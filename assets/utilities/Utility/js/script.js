var quiz = {};
quiz.questions = new Array(8);
quiz.answers = [];
quiz.checkAnswers = function(){

};
var questionNumber;
var numberOfAnswers;
var answerNumber;
var question;
var answer;
var authenticated = false;
var correstAnswer = false;

$(function(){
  $('li#submit').on('click', function(){
    // Test to see if user has created an account or logged in.
    if (localStorage.authenticated) {
      // If so, pull all of the information from the form.
      questionNumber = $('#questionNumber option:selected').text();
      numberOfAnswers = $('#numberOfAnswers option:selected').text();
      answerNumber = $('#answerNumber option:selected').text();
      correctAnswer = $('#correctAnswer option:selected').text();
      question = $('#question').val();
      answer = $('#answer').val();

    }
    else {
      // In not, feedback to user.
      alert('You need to be authenticated before you can create a quiz.');
    }


  });
  $('li#finalize').on('click', function(){

  });

  // Event Listener for reset button. Reset form.
  $('li#reset').on('click', function(){
    $('#question').val('');
    $('#answer').val('');
  });

  // Event Listener for registration. Get information from user,
  // store in local storage.
  $('#register #register-btn').on('click', function(){
    var iUsername = $('#register #username').val();
    var iEmail = $('#register #email').val();
    var iPass = $('#register #password').val();
    localStorage.setItem('username', iUsername);
    localStorage.setItem('email', iEmail);
    localStorage.setItem('password', iPass);
  });

  // Event Lisener for Login. Check input against local storage.
  // Authenticate if match.
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
