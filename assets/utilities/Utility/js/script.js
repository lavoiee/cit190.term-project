


$(function(){
  $('li#submit').on('click', function(){

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

  });
});
