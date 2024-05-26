//Only redirect form to the page if all fields are filled 
function validateForm(event) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill all the fields.");
    event.preventDefault(); // Prevent form submission
  }
}

// function validate(form) {
//   if (valid) $("#form").submit();
//   else alert("Validation error");
// }
