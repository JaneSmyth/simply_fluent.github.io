
var fullNameValid = false;
var confirmPassSame= false;


/* detects all changes in confirm password so to check they are equal */
$(document).ready(function(){
  $("#signUpConfirmPass, #signUpPassword").keyup(function() {
    var $pass = $('#signUpPassword').val();
    var $confirmPass = $('#signUpConfirmPass').val();
    if($pass !== $confirmPass){
      $('#signUpConfirmPass').css("border","2px solid red");
      confirmPassSame =false;
    }
    else{
      $('#signUpConfirmPass').css("border","none");
      confirmPassSame=true;
    }
  });
});
$(document).ready(function(){
  $("#signUpFullName").keyup(function() {
    var $fullName = $("#signUpFullName").val();
    var regexPattern = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
      if(!regexPattern.test($fullName)){
        $("#signUpFullName").css("border","2px solid red");
          fullNameValid=false;
      }
      else {
        $("#signUpFullName").css("border","none");
          fullNameValid=true;
      }
  });
});

function validateLogin(){
  var username = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  var isValidSoFar = true;
  return validateUsernamePassword(username,password,isValidSoFar);
}

function validateSignUp(){
  var fullName = document.getElementById("signUpFullName").value;
  var username = document.getElementById("signUpEmail").value;
  var password = document.getElementById("signUpPassword").value;
  var createAcIsValid = true;

  if(!fullNameValid){ //if user enters anything except letters (capital or lower) and spaces
    alert("Your name can contain alphabet characters and spaces only.");
    createAcIsValid=false;
  }
  else if(!fullName){
    alert("Please fill out all necessary fields.");
    createAcIsValid =false;
  }
  else if(confirmPassSame==false){ //pass and confirm pass not same
    alert("Passwords do not match. Please try again.");
    createAcIsValid =false;
  }
  else{
    creatAcIsValid =true;
  }
  validateUsernamePassword(username,password,creatAcIsValid)
}

function validateUsernamePassword(buttonClicked) {
  var username = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  var userLength = username.length;
  var passLength = password.length;

  if(username == "" && password == ""){
    alert("Please fill out all necessary fields.");
    return false;
  }
  else if(userLength < 12 && passLength < 8){
    alert("Username must be  12 characters or more. Password must be 8 characters or more.");
    return false;
  }
  else if(username == "" || userLength < 12) {
    alert("Your username email must have a minimum of 12 characters.");
    return false;
  }
  else if(password = ""|| passLength < 8){
    alert("Password must have 8 characters or more and contain at least one capital letter and at least one number.");
    return false;
  }
  else {
      if(buttonClicked == "signUpSubmit"){
        username = document.getElementById("signUpEmail").value;
        password = document.getElementById("signUpPassword").value;

        if(!fullNameValid){ //if user enters anything except letters (capital or lower) and spaces
          alert("Your name can contain alphabet characters and spaces only.");
          return false;
        }
        else if(!fullName){
          alert("Please fill out all necessary fields.");
          return false;
        }
        else if(!confirmPassSame){ //pass and confirm pass not same
          alert("Passwords do not match. Please try again.");
          return false;
        }
        else{
          return true;
        }
      }
      else{
        return true;
      }
  }

}
