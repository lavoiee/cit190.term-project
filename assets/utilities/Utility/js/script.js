var quiz = {};

$(function(){
  $('li#submit').on('click', function(){
    var questionNumber = $('#questionNumber > option:selected').val();
    alert(questionNumber);
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
        alert('You have ben authenticated!');
      }
      else {
        alert('Password is incorrect.');
      }
    }
    else {
      alert("There is no user with that name in the system.");
    }
  });
});
