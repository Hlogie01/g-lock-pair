//this function validates the password
class PasswordValidator {
  constructor(
    passwordInputId,
    confirmPassInputId,
    wrongPassAlertId,
    createButtonId
  ) {
    this.passwordInput = document.getElementById(passwordInputId);
    this.confirmPassInput = document.getElementById(confirmPassInputId);
    this.wrongPassAlert = document.getElementById(wrongPassAlertId);
    this.createButton = document.getElementById(createButtonId);

    this.passwordInput.addEventListener("input", () => this.validatePassword());
    this.confirmPassInput.addEventListener("input", () =>
      this.validatePassword()
    );

    this.createButton.addEventListener("click", () =>
      this.validateFieldsAndSubmit()
    );
  }

  validatePassword() {
    const pass = this.passwordInput.value;
    const confirmPass = this.confirmPassInput.value;

    if (pass !== confirmPass) {
      this.wrongPassAlert.style.color = "grey";
      this.wrongPassAlert.innerHTML = "Use the same password";
      this.createButton.disabled = true;
      this.createButton.style.opacity = 0.4;
    } else if (pass.length < 8) {
      this.wrongPassAlert.style.color = "grey";
      this.wrongPassAlert.innerHTML =
        "Password must be at least 8 characters long.";
      this.createButton.disabled = true;
      this.createButton.style.opacity = 0.4;
    } else if (!/\d/.test(pass)) {
      this.wrongPassAlert.style.color = "grey";
      this.wrongPassAlert.innerHTML =
        "Password must include at least one number.";
      this.createButton.disabled = true;
      this.createButton.style.opacity = 0.4;
    } else {
      this.wrongPassAlert.style.color = "grey";
      this.wrongPassAlert.innerHTML = "Passwords match";
      this.createButton.disabled = false;
      this.createButton.style.opacity = 1;
    }
  }
  //checksform before submitting
  validateFieldsAndSubmit() {
    const pass = this.passwordInput.value.trim();
    const confirmPass = this.confirmPassInput.value.trim();

    if (pass === "" || confirmPass === "") {
      alert("Please fill all the fields.");
      event.preventDefault(); // prevents form from submitting
    } else if (pass !== confirmPass) {
      alert("Passwords do not match.");
      event.preventDefault();
    } else if (pass.length < 8) {
      alert("Password must be at least 8 characters long.");
      event.preventDefault();
    } else if (!/\d/.test(pass)) {
      alert("Password must include at least one number.");
      event.preventDefault();
    } else {
      // If all validation passes, submit the form
      const form = document.getElementById("form");
      form.submit();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const passwordValidator = new PasswordValidator(
    "pass",
    "confirm_pass",
    "wrong_pass_alert",
    "create"
  );
});

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

//functio to validate the username as the user types
class UsernameValidator {
  constructor(usernameInputId, errorSpanId) {
    this.usernameInput = document.getElementById(usernameInputId);
    this.errorSpan = document.getElementById(errorSpanId);

    // Add event listeners to perform validation while typing
    this.usernameInput.addEventListener("input", () => this.validate());
  }

  validate() {
    const username = this.usernameInput.value.trim();
    let message = "";

    if (username === "") {
      message = "Username is required.";
    } else if (username.length < 5) {
      message = "Username must be at least 5 characters long.";
    } else if (/\d/.test(username)) {
      message = "Username must not include numbers.";
    }

    // Display validation message
    this.errorSpan.textContent = message;
  }
}

// Instantiate the validator object
const usernameValidator = new UsernameValidator("userName", "usernameError");

//after validating, the button should direct user to another page
//funnction for button
// function validate(form) {
//   if (valid) $("#form").submit();
//   else alert("Validation error");
// }
