

// Increase ticket quantity when the corresponding button is clicked
document.querySelectorAll('.increase-ticket').forEach(button => {
    button.addEventListener('click', function() {
        // Get the input field for ticket quantity
        const ticketCountInput = this.previousElementSibling;
        // Increment the ticket quantity by 1
        ticketCountInput.value = parseInt(ticketCountInput.value) + 1;
    });
});

// Decrease ticket quantity when the corresponding button is clicked
document.querySelectorAll('.decrease-ticket').forEach(button => {
    button.addEventListener('click', function() {
        // Get the input field for ticket quantity
        const ticketCountInput = this.nextElementSibling;
        // Decrease the ticket quantity by 1 if it's greater than 0
        if (ticketCountInput.value > 0) {
            ticketCountInput.value = parseInt(ticketCountInput.value) - 1;
        }
    });
});

// Add to cart function
let addItemId = 0; // Counter for unique IDs of added items
let totalAmount = 0; // Total amount of all items in the cart

function addToCart(item) {
    // Remove the empty cart message if it exists
    let emptyCartMessage = document.getElementById('empty-cart-message');
    if (emptyCartMessage) {
        emptyCartMessage.remove();
    }

    // Create a new div for the selected item
    let selectedItem = document.createElement('div');
    selectedItem.classList.add('box');
    selectedItem.setAttribute('id', 'item-' + addItemId++); // Assign a unique ID to the item

    // Get the title of the ticket
    let h3Title = document.createElement('h3');
    h3Title.textContent = item.querySelector('.title').textContent;
    selectedItem.appendChild(h3Title);

    // Get the amount of the ticket
    let h3Amount = document.createElement('h3');
    let itemAmountText = item.querySelector('.amount').textContent;
    let itemAmount = parseFloat(itemAmountText.replace(/[^\d.-]/g, '')); // Extract the numerical value
    h3Amount.textContent = itemAmountText;
    selectedItem.appendChild(h3Amount);

    // Get the selected quantity from the dropdown
    let selectElement = item.querySelector('select');
    let selectedQuantity = selectElement.options[selectElement.selectedIndex].text;
    let h3Quantity = document.createElement('h3');
    h3Quantity.textContent = 'Quantity: ' + selectedQuantity;
    selectedItem.appendChild(h3Quantity);

    // Calculate the total for this item and update the overall total amount
    let itemTotal = itemAmount * selectedQuantity;
    totalAmount += itemTotal;
    updateTotalAmount();

    // Add a delete button to remove the item
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function() {
        // Subtract the item total from the overall total amount
        totalAmount -= itemTotal;
        selectedItem.remove();
        // Show empty cart message if no items left in the cart
        if (document.getElementById('cart-items').children.length === 0) {
            totalAmount = 0;
            showEmptyCartMessage();
        }
        updateTotalAmount(); // Update the displayed total amount
    };
    selectedItem.appendChild(deleteButton);

    // Append the selected item to the cart
    let cartItems = document.getElementById('cart-items');
    cartItems.append(selectedItem);
}

// Update the displayed total amount
function updateTotalAmount() {
    let totalElement = document.getElementById('total-amount');
    totalElement.textContent = 'Total Amount: R' + totalAmount.toFixed(2);
}

// Show empty cart message when the cart is empty
function showEmptyCartMessage() {
    let cartItems = document.getElementById('cart-items');
    let emptyCartMessage = document.createElement('div');
    emptyCartMessage.id = 'empty-cart-message';
    emptyCartMessage.textContent = 'Your cart is empty';
    cartItems.appendChild(emptyCartMessage);
}

// Initial call to show the empty cart message
showEmptyCartMessage();

// Add an event listener to the checkout button
document.getElementById("checkout-button").addEventListener("click", function() {
    // Redirect to the payment page
    window.location.href = "payment.html";
});
