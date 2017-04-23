// Global quiz object.
var quiz = {};
quiz.q1Array = [];
quiz.q2Array = [];
quiz.q3Array = [];
quiz.q4Array = [];
quiz.q5Array = [];
quiz.q6Array = [];

// Method to score the quiz
quiz.checkAnswers = function(){

};

// Global variables.
var questionNumber;
var question;
var answer;
var questionNumber = 0;
var authenticated = false;
var correctAnswer;
var inCorrectAnswer1;
var inCorrectAnswer2;
var inCorrectAnswer3;

// On ready Event Listener.
$(function(){
  $('li#submit').on('click', function(){
    // Test to see if user has created an account or logged in.
    if (localStorage.authenticated) {
      // If so, pull all of the information from the form.
      questionNumber = $('#questionNumber option:selected').text();
      question = $('#question').val();
      correctAnswer = $('#correctAnswer').val();
      inCorrectAnswer1 = $('#inCorrectAnswer1').val();
      inCorrectAnswer2 = $('#inCorrectAnswer2').val();
      inCorrectAnswer3 = $('#inCorrectAnswer3').val();
      // Switch on the question number the user chooses from
      // the drop dropdown.
      switch (questionNumber) {
        case "1":
          quiz.q1Array.push(question);
          quiz.q1Array.push(correctAnswer);
          quiz.q1Array.push(inCorrectAnswer1);
          quiz.q1Array.push(inCorrectAnswer2);
          quiz.q1Array.push(inCorrectAnswer3);
          break;
        case "2":
          quiz.q2Array.push(question);
          quiz.q2Array.push(correctAnswer);
          quiz.q2Array.push(inCorrectAnswer1);
          quiz.q2Array.push(inCorrectAnswer2);
          quiz.q2Array.push(inCorrectAnswer3);
          break;
        case "3":
          quiz.q3Array.push(question);
          quiz.q3Array.push(correctAnswer);
          quiz.q3Array.push(inCorrectAnswer1);
          quiz.q3Array.push(inCorrectAnswer2);
          quiz.q3Array.push(inCorrectAnswer3);
          break;
        case "4":
          quiz.q4Array.push(question);
          quiz.q4Array.push(correctAnswer);
          quiz.q4Array.push(inCorrectAnswer1);
          quiz.q4Array.push(inCorrectAnswer2);
          quiz.q4Array.push(inCorrectAnswer3);
          break;
        case "5":
          quiz.q5Array.push(question);
          quiz.q5Array.push(correctAnswer);
          quiz.q5Array.push(inCorrectAnswer1);
          quiz.q5Array.push(inCorrectAnswer2);
          quiz.q5Array.push(inCorrectAnswer3);
          break;
        case "6":
          quiz.q6Array.push(question);
          quiz.q6Array.push(correctAnswer);
          quiz.q6Array.push(inCorrectAnswer1);
          quiz.q6Array.push(inCorrectAnswer2);
          quiz.q6Array.push(inCorrectAnswer3);
          break;
        default:

      }
      // Reset the form after all of the information has-feedback
      // has been extracted.
      $('#question').val('');
      $('#correctAnswer').val('');
      $('#inCorrectAnswer1').val('');
      $('#inCorrectAnswer2').val('');
      $('#inCorrectAnswer3').val('');
    }
    else {
      // In not, feedback to user.
      alert('You need to be authenticated before you can create a quiz.');
    }


  });
  $('li#finalize').on('click', function(){
    localStorage.setItem("quiz", JSON.stringify(quiz));
    alert(localStorage.quiz);
  });

  // Event Listener for reset button. Reset form.
  $('li#reset').on('click', function(){
    $('#question').val('');
    $('#correctAnswer').val('');
    $('#inCorrectAnswer1').val('');
    $('#inCorrectAnswer2').val('');
    $('#inCorrectAnswer3').val('');
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
