document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        
        // Auto slide change
        setInterval(() => showSlide(currentSlide + 1), 5000);
    }
    
    // Load categories on home page
    if (document.querySelector('#category-grid')) {
        loadCategories();
    }
    
    // Load featured products on home page
    if (document.querySelector('#featured-products')) {
        loadFeaturedProducts();
    }
    
    // Load category products on category page
    if (document.querySelector('#category-product-grid')) {
        loadCategoryProducts();
    }
    
    // Product gallery on product page
    if (document.querySelector('#product-gallery')) {
        setupProductGallery();
    }
    
    // Quantity controls
    document.querySelectorAll('.quantity-control').forEach(control => {
        const decrease = control.querySelector('.decrease');
        const increase = control.querySelector('.increase');
        const input = control.querySelector('input');
        
        decrease.addEventListener('click', () => {
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
        
        increase.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1;
        });
    });
    
    // Add to cart buttons
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard ? productCard.dataset.id : document.querySelector('.product-details').dataset.id;
            const quantity = productCard ? 1 : parseInt(document.querySelector('#quantity').value);
            
            addToCart(productId, quantity);
            updateCartCount();
            
            // Show notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = 'Product added to cart!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        });
    });
    
    // Remove item from cart
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            const productId = cartItem.dataset.id;
            
            removeFromCart(productId);
            cartItem.remove();
            updateCartSummary();
            updateCartCount();
        });
    });
    
    // Update quantity in cart
    document.querySelectorAll('.cart-item input').forEach(input => {
        input.addEventListener('change', function() {
            const cartItem = this.closest('.cart-item');
            const productId = cartItem.dataset.id;
            const quantity = parseInt(this.value);
            
            updateCartItem(productId, quantity);
            updateCartSummary();
        });
    });
    
    // Checkout button
    const checkoutBtn = document.querySelector('#checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }
    
    // Contact form
    const contactForm = document.querySelector('#message-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to the server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Floating action button
    const fabContainer = document.querySelector('.fab-container');
    if (fabContainer) {
        fabContainer.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    
    // Initialize cart count
    updateCartCount();
    if (document.querySelector('.cart-summary')) {
        updateCartSummary();
    }
});

// Load categories for home page
function loadCategories() {
    const categoryGrid = document.querySelector('#category-grid');
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <img src="category/${category.image}" alt="${category.name}">
            <div class="category-info">
                <h3>${category.name}</h3>
                <a href="category.html?cat=${category.id}" class="view-more">View More</a>
            </div>
        `;
        categoryGrid.appendChild(categoryCard);
    });
}

// Load featured products for home page
function loadFeaturedProducts() {
    const featuredGrid = document.querySelector('#featured-products');
    
    // Get 8 random featured products
    const featuredProducts = [];
    const usedIndices = new Set();
    
    while (featuredProducts.length < 1000 && featuredProducts.length < products.length) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            featuredProducts.push(products[randomIndex]);
        }
    }
    
    featuredProducts.forEach(product => {
        const discount = calculateDiscount(product.price, product.originalPrice);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.id = product.id;
        productCard.innerHTML = `
            <div class="product-image">
                <img src="images/${product.images[0]}" alt="${product.name}">
                <span class="discount-badge">${discount}% OFF</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">UGX ${product.price.toLocaleString()}</span>
                    <span class="original-price">UGX ${product.originalPrice.toLocaleString()}</span>
                </div>
                <p class="product-description">${product.description.substring(0, 60)}...</p>
                <button class="add-cart-btn">Add to Cart</button>
            </div>
        `;
        featuredGrid.appendChild(productCard);
        
        // Add click event to product image
        productCard.querySelector('.product-image').addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

// Load products for category page
function loadCategoryProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('cat');
    
    if (!categoryId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Find the category
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set category title and description
    document.querySelector('#category-title').textContent = category.name;
    document.querySelector('#category-description').textContent = `Browse our wide selection of ${category.name.toLowerCase()}`;
    
    // Filter products by category
    const categoryProducts = products.filter(product => product.category === categoryId);
    const productGrid = document.querySelector('#category-product-grid');
    
    // Pagination variables
    const productsPerPage = 1000;
    let currentPage = 1;
    const totalPages = Math.ceil(categoryProducts.length / productsPerPage);
    
    // Display page info
    const pageInfo = document.querySelector('#page-info');
    const prevBtn = document.querySelector('#prev-page');
    const nextBtn = document.querySelector('#next-page');
    
    function displayProducts() {
        productGrid.innerHTML = '';
        
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage, categoryProducts.length);
        const productsToShow = categoryProducts.slice(startIndex, endIndex);
        
        productsToShow.forEach(product => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="images/${product.images[0]}" alt="${product.name}">
                    <span class="discount-badge">${discount}% OFF</span>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">UGX ${product.price.toLocaleString()}</span>
                        <span class="original-price">UGX ${product.originalPrice.toLocaleString()}</span>
                    </div>
                    <p class="product-description">${product.description.substring(0, 60)}...</p>
                    <button class="add-cart-btn">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
            
            // Add click event to product image
            productCard.querySelector('.product-image').addEventListener('click', () => {
                window.location.href = `product.html?id=${product.id}`;
            });
        });
        
        // Update pagination controls
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }
    
    // Initial display
    displayProducts();
    
    // Pagination event listeners
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Sorting functionality
    const sortSelect = document.querySelector('#sort');
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        
        switch (sortValue) {
            case 'price-low':
                categoryProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                categoryProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                categoryProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                categoryProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                // Default sorting (by ID or as originally)
                break;
        }
        
        currentPage = 1;
        displayProducts();
    });
    
    // Price range filtering
    const priceRangeSelect = document.querySelector('#price-range');
    priceRangeSelect.addEventListener('change', function() {
        const range = this.value;
        let filteredProducts = [];
        
        if (range === 'all') {
            filteredProducts = [...products];
        } else {
            const [min, max] = range.split('-').map(Number);
            filteredProducts = products.filter(product => {
                if (max) {
                    return product.price >= min && product.price <= max;
                } else {
                    return product.price >= min;
                }
            });
        }
        
        categoryProducts.length = 0;
        categoryProducts.push(...filteredProducts);
        currentPage = 1;
        displayProducts();
    });
}

// Setup product gallery on product page
function setupProductGallery() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Find the product
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set product details
    document.querySelector('#product-name').textContent = product.name;
    document.querySelector('#current-price').textContent = `UGX ${product.price.toLocaleString()}`;
    document.querySelector('#original-price').textContent = `UGX ${product.originalPrice.toLocaleString()}`;
    document.querySelector('#discount').textContent = `${calculateDiscount(product.price, product.originalPrice)}% OFF`;
    document.querySelector('#product-description').innerHTML = `<p>${product.description}</p>`;
    
    // Set product specifications
    const specsContainer = document.querySelector('#product-specs');
    product.specifications.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `<strong>${spec.name}:</strong> ${spec.value}`;
        specsContainer.appendChild(specItem);
    });
    
    // Set product gallery
    const galleryContainer = document.querySelector('#product-gallery');
    const mainImage = document.createElement('div');
    mainImage.className = 'main-image';
    mainImage.innerHTML = `<img src="images/${product.images[0]}" alt="${product.name}">`;
    galleryContainer.appendChild(mainImage);
    
    const thumbnailsContainer = document.createElement('div');
    thumbnailsContainer.className = 'thumbnail-container';
    
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="images/${image}" alt="${product.name}">`;
        
        thumbnail.addEventListener('click', () => {
            document.querySelector('.main-image img').src = `images/${image}`;
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    galleryContainer.appendChild(thumbnailsContainer);
    
    // Set related products
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const relatedContainer = document.querySelector('#related-products');
    
    relatedProducts.forEach(relatedProduct => {
        const discount = calculateDiscount(relatedProduct.price, relatedProduct.originalPrice);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.id = relatedProduct.id;
        productCard.innerHTML = `
            <div class="product-image">
                <img src="images/${relatedProduct.images[0]}" alt="${relatedProduct.name}">
                <span class="discount-badge">${discount}% OFF</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${relatedProduct.name}</h3>
                <div class="product-price">
                    <span class="current-price">UGX ${relatedProduct.price.toLocaleString()}</span>
                    <span class="original-price">UGX ${relatedProduct.originalPrice.toLocaleString()}</span>
                </div>
                <p class="product-description">${relatedProduct.description.substring(0, 60)}...</p>
                <button class="add-cart-btn">Add to Cart</button>
            </div>
        `;
        relatedContainer.appendChild(productCard);
        
        // Add click event to product image
        productCard.querySelector('.product-image').addEventListener('click', () => {
            window.location.href = `product.html?id=${relatedProduct.id}`;
        });
    });
    
    // Set data-id for add to cart button
    document.querySelector('.product-details').dataset.id = product.id;
}

// Calculate discount percentage
function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Cart functions
function addToCart(productId, quantity = 1) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartItem(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    document.querySelectorAll('#cart-count').forEach(element => {
        element.textContent = totalItems;
    });
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
/**const deliveryFee = subtotal > 100000 ? 0 : 10000; // Free delivery for orders over 100,000**/
    const total = subtotal ;
    
    document.querySelector('#subtotal').textContent = `UGX ${subtotal.toLocaleString()}`;
   /* document.querySelector('#delivery').textContent = `UGX ${deliveryFee.toLocaleString()}`;*/
    document.querySelector('#total').textContent = `UGX ${total.toLocaleString()}`;
}

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
    
    message += `\nSubtotal: UGX ${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()}`;
    message += '\n\nPlease let me know the total including delivery and payment options.';
    message += '\n\nThank you!';
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/256752895919?text=${encodedMessage}`, '_blank');
}

// Load cart items on cart page
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
                        <button class="decrease"></button>
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
                input.dispatchEvent(new Event('change'));
            }
        });
        
        increase.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1;
            input.dispatchEvent(new Event('change'));
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