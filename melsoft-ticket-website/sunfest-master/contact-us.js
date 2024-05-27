class FormValidator {
  constructor() {
    this.form = document.getElementById('form');
    this.nameInput = document.getElementById('name');
    this.emailInput = document.getElementById('email');
    this.phoneInput = document.getElementById('phone');
    this.subjectInput = document.getElementById('subject');
    this.messageInput = document.querySelector('textarea');
    this.nameError = document.getElementById('name-error');
    this.emailError = document.getElementById('email-error');
    this.phoneError = document.getElementById('phone-error');
    this.subjectError = document.getElementById('subject-error');
    this.sendButton = document.getElementById('send-button');
  }

  init() {
    this.sendButton.addEventListener('click', this.validate.bind(this));
  }

  validate(event) {
    event.preventDefault();
    const formData = this.getFormData();
    const errors = this.validateFormData(formData);

    if (errors.length > 0) {
      this.displayErrors(errors);
      return false;
    }

    this.displaySuccessMessage();
    console.log(formData);
  }

  getFormData() {
    return {
      name: this.nameInput.value.trim(),
      email: this.emailInput.value.trim(),
      phone: this.phoneInput.value.trim(),
      subject: this.subjectInput.value.trim(),
      message: this.messageInput.value.trim()
    };
  }

  validateFormData(formData) {
    const errors = [];

    if (formData.name === '') {
      errors.push('Please fill in your name');
      this.nameError.style.display = 'block';
    } else {
      this.nameError.style.display = 'none';
    }

    if (formData.email === '') {
      errors.push('Please fill in your email');
      this.emailError.style.display = 'block';
    } else {
      this.emailError.style.display = 'none';
    }

    if (formData.phone === '') {
      errors.push('Please fill in your phone number');
      this.phoneError.style.display = 'block';
    } else {
      this.phoneError.style.display = 'none';
    }

    if (formData.subject === '') {
      errors.push('Please fill in the subject');
      this.subjectError.style.display = 'block';
    } else {
      this.subjectError.style.display = 'none';
    }

    if (formData.message === '') {
      errors.push('Please fill in the message');
    }

    return errors;
  }

  displayErrors(errors) {
    alert(errors.join('\n'));
  }

  displaySuccessMessage() {
    alert('Thank you! We will get back to you as soon as possible');
  }
}

const formValidator = new FormValidator();
formValidator.init();