//this function validates the password
function validate_password() {
  let pass = document.getElementById("pass").value;
  let confirm_pass = document.getElementById("confirm_pass").value;
  if (pass != confirm_pass) {
    document.getElementById("wrong_pass_alert").style.color = "grey";
    document.getElementById("wrong_pass_alert").innerHTML = "Use same password";
    document.getElementById("create").disabled = true;
    document.getElementById("create").style.opacity = 0.4;
  } else {
    document.getElementById("wrong_pass_alert").style.color = "grey";
    document.getElementById("wrong_pass_alert").innerHTML = "Passwords Match";
    document.getElementById("create").disabled = false;
    document.getElementById("create").style.opacity = 1;
  }
}
function wrong_pass_alert() {
  if (
    document.getElementById("pass").value != "" &&
    document.getElementById("confirm_pass").value != ""
  ) {
  } else {
    alert("Please fill all the fields");
  }
}

//funtion used to validate email.
function validateEmailInput() {
  const emailInput = document.getElementById("emailInput").value;
  const feedbackElement = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = "";
  } else {
    feedbackElement.textContent = "Please enter a valid email address";
  }
}
//after validating, the button should direct user to another page
//funnction for button
function validate(form) {
  if (valid) $("#form").submit();
  else alert("Validation error");
}
