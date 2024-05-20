let FormValidator = {
    init: function() {
      document.getElementById('send-button').addEventListener('click', this.validate);
    },
  
    //validating the forms data
    validate: function(event) {
      event.preventDefault();
  
      //getting the form data
      let name = document.getElementById('name').value.trim();
      let email = document.getElementById('email').value.trim();
      let phone = document.getElementById('phone').value.trim();
      let subject = document.getElementById('subject').value.trim();
      let message = document.querySelector('textarea').value.trim();
  
      //initializing an aray to store error messages
      let errors = [];
  
  
      
      if (name === '') {
        errors.push('Please fill in your name');
        document.getElementById('name-error').style.display = 'block';
      } else {
        document.getElementById('name-error').style.display = 'none';
      }
  
      if (email === '') {
        errors.push('Please fill in your email');
        document.getElementById('email-error').style.display = 'block';
      } else {
        document.getElementById('email-error').style.display = 'none';
      }
  
      if (phone === '') {
        errors.push('Please fill in your phone number');
        document.getElementById('phone-error').style.display = 'block';
      } else {
        document.getElementById('phone-error').style.display = 'none';
      }
  
      if (subject === '') {
        errors.push('Please fill in the subject');
        document.getElementById('subject-error').style.display = 'block';
      } else {
        document.getElementById('subject-error').style.display = 'none';
      }
  
      if (message === '') {
        errors.push('Please fill in the message');
      }
  
      if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
      }
  
      alert('Thank you! We will get back to you as soon as possible');
  
      console.log({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
      });
    }
  };
  
  FormValidator.init();