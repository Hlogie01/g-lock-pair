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
        if (expiryDate.length >= 2 && expiryDate.charAt(1) !== '/') {
            expiryDate = expiryDate.slice(0, 2) + '/' + expiryDate.slice(2);
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

// Instantiate PaymentForm object
const paymentForm = new PaymentForm();