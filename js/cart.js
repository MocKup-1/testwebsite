document.addEventListener('DOMContentLoaded', function() {
    // Load cart items if on cart page
    if (document.querySelector('#cart-items')) {
        loadCartItems();
        updateCartSummary();
    }
    
    // Update cart count on all pages
    updateCartCount();
});

// Initialize cart if not exists
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Function to load cart items on cart page
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('#cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="index.html" class="continue-shopping">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.id = item.id;
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="images/${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <div class="cart-item-price">UGX ${item.price.toLocaleString()}</div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <!--<button class="decrease"></button>-->
                        <input type="number" value="${item.quantity}" min="1">
                        <button class="increase"></button>
                    </div>
                    <div class="remove-item">
                        <i class="fas fa-trash"></i> Remove
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        
        // Add event listeners for quantity controls
        const decrease = cartItem.querySelector('.decrease');
        const increase = cartItem.querySelector('.increase');
        const input = cartItem.querySelector('input');
        
        decrease.addEventListener('click', () => {
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateCartItem(item.id, parseInt(input.value));
                updateCartSummary();
            }
        });
        
        increase.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1;
            updateCartItem(item.id, parseInt(input.value));
            updateCartSummary();
        });
        
        input.addEventListener('change', () => {
            if (parseInt(input.value) < 1) input.value = 1;
            updateCartItem(item.id, parseInt(input.value));
            updateCartSummary();
        });
        
        // Add event listener for remove button
        cartItem.querySelector('.remove-item').addEventListener('click', function() {
            removeFromCart(item.id);
            cartItem.remove();
            updateCartSummary();
            updateCartCount();
            
            // If cart is now empty, show empty cart message
            if (JSON.parse(localStorage.getItem('cart')).length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-cart">
                        <p>Your cart is empty</p>
                        <a href="index.html" class="continue-shopping">Continue Shopping</a>
                    </div>
                `;
            }
        });
    });
}

// Function to update cart summary
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 100000 ? 0 : 10000; // Free delivery for orders over 100,000
    const total = subtotal + deliveryFee;
    
    document.querySelector('#subtotal').textContent = `UGX ${subtotal.toLocaleString()}`;
    document.querySelector('#delivery').textContent = `UGX ${deliveryFee.toLocaleString()}`;
    document.querySelector('#total').textContent = `UGX ${total.toLocaleString()}`;
}

// Function to proceed to checkout (via WhatsApp)
function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Prepare WhatsApp message
    let message = 'Hello Afrishop! I would like to order the following items:\n\n';
    
    cart.forEach(item => {
        message += `- ${item.name} (${item.quantity} x UGX ${item.price.toLocaleString()})\n`;
    });
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  /*   const deliveryFee = subtotal > 100000 ? 0 : 10000;**/
    const total = subtotal + deliveryFee;
    
    message += `\nSubtotal: UGX ${subtotal.toLocaleString()}`;
    message += `\nDelivery: UGX ${deliveryFee.toLocaleString()}`;
    message += `\nTotal: UGX ${total.toLocaleString()}`;
    message += '\n\nPlease confirm availability and provide payment details.';
    message += '\n\nThank you!';
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/256709835204?text=${encodedMessage}`, '_blank');
}

// Add event listener for checkout button
    const checkoutBtn = document.querySelector('#checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', proceedToCheckout);
}

            