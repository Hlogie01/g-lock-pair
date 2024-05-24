// Defining the classes
class Event {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.tickets = [];
    }

    addTicket(ticket) {
        this.tickets.push(ticket);
    }
}

class Ticket {
    constructor(id, event, price, quantity = 0) {
        this.id = id;
        this.event = event;
        this.price = price;
        this.quantity = quantity;
    }

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.cart = [];
        this.totalAmount = 0;
    }

    addToCart(ticket) {
        this.cart.push(ticket);
        this.updateTotalAmount();
    }

    removeFromCart(ticketId) {
        const ticketIndex = this.cart.findIndex(ticket => ticket.id === ticketId);
        if (ticketIndex > -1) {
            this.totalAmount -= this.cart[ticketIndex].price * this.cart[ticketIndex].quantity;
            this.cart.splice(ticketIndex, 1);
            this.updateTotalAmount();
        }
    }

    updateTotalAmount() {
        this.totalAmount = this.cart.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0);
        this.displayTotalAmount();
    }

    displayTotalAmount() {
        document.getElementById('total-amount').textContent = 'Total Amount: R' + this.totalAmount.toFixed(2);
    }
}

// Updating event handlers and logic
document.querySelectorAll('.increase-ticket').forEach(button => {
    button.addEventListener('click', function() {
        const ticketCountInput = this.previousElementSibling;
        const ticketId = ticketCountInput.dataset.ticketId;
        const ticket = tickets.find(t => t.id === ticketId);
        ticket.increaseQuantity();
        ticketCountInput.value = ticket.quantity;
    });
});

document.querySelectorAll('.decrease-ticket').forEach(button => {
    button.addEventListener('click', function() {
        const ticketCountInput = this.nextElementSibling;
        const ticketId = ticketCountInput.dataset.ticketId;
        const ticket = tickets.find(t => t.id === ticketId);
        ticket.decreaseQuantity();
        ticketCountInput.value = ticket.quantity;
    });
});

let addItemId = 0; // Counter for unique IDs of added items
const user = new User('John Doe'); // Example user

function addToCart(itemElement) {
    const emptyCartMessage = document.getElementById('empty-cart-message');
    if (emptyCartMessage) {
        emptyCartMessage.remove();
    }

    const title = itemElement.querySelector('.title').textContent;
    const amountText = itemElement.querySelector('.amount').textContent;
    const amount = parseFloat(amountText.replace(/[^\d.-]/g, ''));
    const selectElement = itemElement.querySelector('select');
    const selectedQuantity = parseInt(selectElement.options[selectElement.selectedIndex].text);

    const ticket = new Ticket(addItemId++, title, amount, selectedQuantity);
    user.addToCart(ticket);

    const selectedItem = document.createElement('div');
    selectedItem.classList.add('box');
    selectedItem.setAttribute('id', 'item-' + ticket.id);



    // Determine the event and add the appropriate title
    let eventTitleText;
    if (itemElement.closest('#tab_details')) {
        eventTitleText = 'Wine & Dine Event';
    } else if (itemElement.closest('#tab_venue')) {
        eventTitleText = 'Burna Boy Event';
    } else if (itemElement.closest('#tab_organizers')) {
        eventTitleText = 'Trevor Noah Event';
    } else if (itemElement.closest('#tab_about')) {
        eventTitleText = 'Cotton Fest 2024 Event';
    }

    if (eventTitleText) {
        const eventTitle = document.createElement('h3');
        eventTitle.textContent = eventTitleText;
        eventTitle.classList.add('event-title'); // Add a class for styling if needed
        selectedItem.appendChild(eventTitle);
    }

    const h3Title = document.createElement('h3');
    h3Title.textContent = title;
    selectedItem.appendChild(h3Title);

    const h3Amount = document.createElement('h3');
    h3Amount.textContent = amountText;
    selectedItem.appendChild(h3Amount);

    const h3Quantity = document.createElement('h3');
    h3Quantity.textContent = 'Quantity: ' + selectedQuantity;
    selectedItem.appendChild(h3Quantity);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function() {
        user.removeFromCart(ticket.id);
        selectedItem.remove();
        if (user.cart.length === 0) {
            showEmptyCartMessage();
        }
    };
    selectedItem.appendChild(deleteButton);

    const cartItems = document.getElementById('cart-items');
    cartItems.appendChild(selectedItem);
}

function showEmptyCartMessage() {
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.createElement('div');
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


