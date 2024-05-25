// PaymentForm class
class PaymentForm {
    constructor() {
        this.cardNumberInput = document.getElementById("card-number");
        this.cardNameInput = document.getElementById("card-name");
        this.expiryDateInput = document.getElementById("expiry-date");
        this.cvvInput = document.getElementById("cvv");
        this.form = document.getElementById("payment-form");

        // Add event listeners
        this.cardNumberInput.addEventListener("input", this.validateCardNumber.bind(this));
        this.cardNameInput.addEventListener("input", this.validateCardName.bind(this));
        this.expiryDateInput.addEventListener("input", this.formatExpiryDate.bind(this));
        this.cvvInput.addEventListener("input", this.validateCVV.bind(this));
        this.form.addEventListener("submit", this.onSubmit.bind(this));
    }

    // Validation methods
    validateCardNumber() {
        this.cardNumberInput.value = this.cardNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters
        let cardNumber = this.cardNumberInput.value;
        if (cardNumber.length < 16) {
            this.cardNumberInput.classList.add("input-error");
            this.cardNumberInput.classList.remove("input-success");
        } else {
            this.cardNumberInput.classList.remove("input-error");
            this.cardNumberInput.classList.add("input-success");
        }
    }

    validateCardName() {
        // Validation for card name (if needed)
    }

    validateCVV() {
        this.cvvInput.value = this.cvvInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    }

    formatExpiryDate() {
        let expiryDate = this.expiryDateInput.value;
    expiryDate = expiryDate.replace(/\D/g, ''); // Remove non-numeric characters

    // Check if the length is greater than or equal to 2.
    // If so, it implies the user is entering the month.
    if (expiryDate.length >= 2) {
        // Validate month (should be between 01 and 12)
        let month = parseInt(expiryDate.slice(0, 2));
        if (month < 1 || month > 12) {
            this.expiryDateInput.value = '';
            return;
        }
    }

    // Check if the length is greater than or equal to 4.
    // If so, it implies the user is entering the year.
    if (expiryDate.length >= 4) {
        // Extract year part and validate
        let year = parseInt(expiryDate.slice(2));
        if (year < 24 || year > 35) {
            this.expiryDateInput.value = '';
            return;
        }
    }

    // Add '/' after the month if it's not already present
    if (expiryDate.length >= 2 && expiryDate.charAt(2) !== '/') {
        expiryDate = expiryDate.slice(0, 2) + '/' + expiryDate.slice(2);
    }

    // Truncate year to 2 digits if it's more than 2 digits
    if (expiryDate.length > 5) {
        expiryDate = expiryDate.slice(0, 5);
    }

    this.expiryDateInput.value = expiryDate;
}


    // Form submission handler
    onSubmit(event) {
        event.preventDefault();
        // Perform form validation
        let cardNumber = this.cardNumberInput.value;
        if (cardNumber.length < 16) {
            alert("Please enter a valid card number.");
            this.cardNumberInput.focus();
            return;
        }

        // Display loader
        this.showLoader();

        // Simulate payment processing delay
        setTimeout(() => {
            // Show success message
            alert("Payment Approved! You will receive your receipt and ticket via email soon. Thank you!");

            // Hide loader after showing the alert
            this.hideLoader();
        }, 4000); // 4 seconds
    }
    // Loader methods
    showLoader() {
        let loader = document.getElementById("loader");
        loader.style.display = "block";
    }

    hideLoader() {
        let loader = document.getElementById("loader");
        loader.style.display = "none";
    }
}

// Retrieve the total amount from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const totalAmountParam = urlParams.get('totalAmount');

// Update the total amount element on the payment page
document.getElementById('total-amount').textContent = 'Total Amount: R' + totalAmountParam;

// Instantiate PaymentForm object
const paymentForm = new PaymentForm();
