document.querySelectorAll('.increase-ticket').forEach(button => {
    button.addEventListener('click', function() {
        const ticketCountInput = this.previousElementSibling;
        ticketCountInput.value = parseInt(ticketCountInput.value) + 1;
    });
});

document.querySelectorAll('.decrease-ticket').forEach(button => {
    button.addEventListener('click', function() {
        const ticketCountInput = this.nextElementSibling;
        if (ticketCountInput.value > 0) {
            ticketCountInput.value = parseInt(ticketCountInput.value) - 1;
        }
    });
});


// Add to cart function
let addItemId = 0;
let totalAmount = 0;

function addToCart(item) {
    // Remove the empty cart message if it exists
    let emptyCartMessage = document.getElementById('empty-cart-message');
    if (emptyCartMessage) {
        emptyCartMessage.remove();
    }

    // Create a new div for the selected item
    let selectedItem = document.createElement('div');
    selectedItem.classList.add('box');
    selectedItem.setAttribute('id', 'item-' + addItemId++);

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
        totalAmount -= itemTotal;
        selectedItem.remove();
        if (document.getElementById('cart-items').children.length === 0) {
            totalAmount = 0;
            showEmptyCartMessage();
        }
        updateTotalAmount();
    };
    selectedItem.appendChild(deleteButton);

    // Append the selected item to the cart
    let cartItems = document.getElementById('cart-items');
    cartItems.append(selectedItem);
}

function updateTotalAmount() {
    let totalElement = document.getElementById('total-amount');
    totalElement.textContent = 'Total Amount: R' + totalAmount.toFixed(2);
}

function showEmptyCartMessage() {
    let cartItems = document.getElementById('cart-items');
    let emptyCartMessage = document.createElement('div');
    emptyCartMessage.id = 'empty-cart-message';
    emptyCartMessage.textContent = 'Your cart is empty';
    cartItems.appendChild(emptyCartMessage);
}

// Initial call to show the empty cart message
showEmptyCartMessage();