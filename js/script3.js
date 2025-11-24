document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle - Fixed implementation
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    const navContainer = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent this click from bubbling to document
            nav.classList.toggle('active');
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.mobile-menu') && 
            nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
        }
    });

    // Prevent clicks inside nav from closing the menu
    if (nav) {
        nav.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }















    
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function startSlider() {
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    }
    
    function resetSlider() {
        clearInterval(slideInterval);
        startSlider();
    }
    
    if (prevBtn && nextBtn && slides.length > 0) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            resetSlider();
        });
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            resetSlider();
        });
        
        // Auto slide change
        startSlider();
    }
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput) {
        // Show search on focus
        searchInput.addEventListener('focus', function() {
            searchBar.classList.add('active');
            performSearch(this.value);
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-bar')) {
                searchBar.classList.remove('active');
            }
        });
        
        // Perform search as user types
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
        
        // Keyboard navigation
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchBar.classList.remove('active');
                this.blur();
            }
        });
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
        
        if (decrease) {
            decrease.addEventListener('click', () => {
                if (parseInt(input.value) > 1) {
                    input.value = parseInt(input.value) - 1;
                    // Trigger change event for cart updates
                    const event = new Event('change', { bubbles: true });
                    input.dispatchEvent(event);
                }
            });
        }
        
        if (increase) {
            increase.addEventListener('click', () => {
                input.value = parseInt(input.value) + 1;
                // Trigger change event for cart updates
                const event = new Event('change', { bubbles: true });
                input.dispatchEvent(event);
            });
        }
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
            showNotification('Product added to cart!');
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
 //   var fabContainer = document.querySelector('.fab-container');
    if (fabContainer) {
        fabContainer.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    












if (fabContainer) {
  const fabMain = fabContainer.querySelector('.fab-main');
  const fabCartContainer = document.createElement('div');
  fabCartContainer.className = 'fab-cart-container';
  
  fabCartContainer.innerHTML = `
    <div class="fab-cart-header">
      <h3>Your Cart</h3>
      <button class="fab-cart-close"><i class="fas fa-times"></i></button>
    </div>
    <div class="fab-cart-items"></div>
    <div class="fab-cart-summary">
      <div class="fab-cart-total">
        <span>Total:</span>
        <span id="fab-cart-total">UGX 0</span>
      </div>
      <div class="fab-cart-buttons">
        <a href="cart.html" class="btn">View Cart</a>
       
      </div>
    </div>
  `;
  
  fabContainer.appendChild(fabCartContainer);
  
  // Add cart count badge to FAB
  const fabCartCount = document.createElement('span');
  fabCartCount.className = 'fab-cart-count';
  fabCartCount.textContent = '0';
  fabMain.appendChild(fabCartCount);
  
  // Toggle cart visibility
  fabMain.addEventListener('click', function(e) {
    e.stopPropagation();
    const isCartActive = fabContainer.classList.contains('cart-active');
    
    if (isCartActive) {
      fabContainer.classList.remove('cart-active');
    } else {
      updateFabCart();
      fabContainer.classList.add('cart-active');
    }
  });
  
  // Close cart when clicking close button
  fabCartContainer.querySelector('.fab-cart-close').addEventListener('click', function(e) {
    e.stopPropagation();
    fabContainer.classList.remove('cart-active');
  });
  
  // Close cart when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.fab-cart-container') && 
        !e.target.closest('.fab-main') && 
        fabContainer.classList.contains('cart-active')) {
      fabContainer.classList.remove('cart-active');
    }
  });
  
  // Prevent clicks inside cart from closing it
  fabCartContainer.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}

// Update FAB cart contents
function updateFabCart() {
  const fabCartContainer = document.querySelector('.fab-cart-container');
  const fabCartItems = fabCartContainer.querySelector('.fab-cart-items');
  const fabCartTotal = fabCartContainer.querySelector('#fab-cart-total');
  const fabCartCount = document.querySelector('.fab-cart-count');
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  fabCartCount.textContent = totalItems;
  
  if (cart.length === 0) {
    fabCartItems.innerHTML = '<div class="empty-fab-cart">Your cart is empty</div>';
    fabCartTotal.textContent = 'UGX 0';
    return;
  }
  
  let itemsHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    itemsHTML += `
      <div class="fab-cart-item">
        <div class="fab-cart-item-image">
          <img src="images/${item.image}" alt="${item.name}">
        </div>
        <div class="fab-cart-item-details">
          <div class="fab-cart-item-name">${item.name}</div>
          <div class="fab-cart-item-price">${item.quantity} x UGX ${item.price.toLocaleString()}</div>
        </div>
      </div>
    `;
  });
  
  fabCartItems.innerHTML = itemsHTML;
  fabCartTotal.textContent = `UGX ${total.toLocaleString()}`;
}

// FAB functionality
var fabContainer = document.querySelector('.fab-container');
const fabCart = document.querySelector('.fab-cart');
const fabWhatsapp = document.querySelector('.fab-whatsapp');
const fabCall = document.querySelector('.fab-call');

if (fabContainer) {
    // Add cart count badge to FAB
    const fabCartCount = document.querySelector('.fab-cart-count');
    
    // Toggle cart visibility
    fabCart.addEventListener('click', function(e) {
        e.stopPropagation();
        const isCartActive = fabContainer.classList.contains('cart-active');
        
        if (isCartActive) {
            fabContainer.classList.remove('cart-active');
        } else {
            updateFabCart();
            fabContainer.classList.add('cart-active');
        }
    });
    
    // WhatsApp FAB
    fabWhatsapp.addEventListener('click', function() {
        window.open('https://wa.me/256705934559', '_blank');
    });
    
    // Call FAB
    fabCall.addEventListener('click', function() {
        window.location.href = 'tel:+256705934559';
    });
    
    // Close cart when clicking close button
    const fabCartClose = document.querySelector('.fab-cart-close');
    if (fabCartClose) {
        fabCartClose.addEventListener('click', function(e) {
            e.stopPropagation();
            fabContainer.classList.remove('cart-active');
        });
    }
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.fab-cart-container') && 
            !e.target.closest('.fab-cart') && 
            fabContainer.classList.contains('cart-active')) {
            fabContainer.classList.remove('cart-active');
        }
    });
    
    // Prevent clicks inside cart from closing it
    const fabCartContainer = document.querySelector('.fab-cart-container');
    if (fabCartContainer) {
        fabCartContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Update FAB cart contents
function updateFabCart() {
    const fabCartContainer = document.querySelector('.fab-cart-container');
    const fabCartItems = fabCartContainer.querySelector('.fab-cart-items');
    const fabCartTotal = fabCartContainer.querySelector('#fab-cart-total');
    const fabCartCount = document.querySelector('.fab-cart-count');
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    fabCartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        fabCartItems.innerHTML = '<div class="empty-fab-cart">Your cart is empty</div>';
        fabCartTotal.textContent = 'UGX 0';
        return;
    }
    
    let itemsHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        itemsHTML += `
            <div class="fab-cart-item">
                <div class="fab-cart-item-image">
                    <img src="images/${item.image}" alt="${item.name}">
                </div>
                <div class="fab-cart-item-details">
                    <div class="fab-cart-item-name">${item.name}</div>
                    <div class="fab-cart-item-price">${item.quantity} x UGX ${item.price.toLocaleString()}</div>
                </div>
            </div>
        `;
    });
    
    fabCartItems.innerHTML = itemsHTML;
    fabCartTotal.textContent = `UGX ${total.toLocaleString()}`;
}

// Update FAB cart count when cart changes
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    document.querySelectorAll('#cart-count').forEach(element => {
        element.textContent = totalItems;
    });
    
    // Also update FAB cart count
    const fabCartCount = document.querySelector('.fab-cart-count');
    if (fabCartCount) {
        fabCartCount.textContent = totalItems;
    }
}





    
    
    // Initialize cart count
    updateCartCount();
    if (document.querySelector('.cart-summary')) {
        updateCartSummary();
    }
});

// Search functionality
function performSearch(query) {
    const searchResults = document.querySelector('.search-results');
    if (!searchResults) return;
    
    if (query.length < 2) {
        searchResults.innerHTML = '<div class="search-placeholder">Type at least 2 characters to search</div>';
        return;
    }
    
    const results = products.filter(product => {
        const searchTerm = query.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    });
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No products found</div>';
        return;
    }
    
    let resultsHTML = '';
    results.slice(0, 1000000000000).forEach(product => {
        const discount = calculateDiscount(product.price, product.originalPrice);
        
        resultsHTML += `
            <div class="search-result-item" data-id="${product.id}">
                <div class="search-result-image">
                    <img src="images/${product.images[0]}" alt="${product.name}">
                </div>
                <div class="search-result-info">
                    <h4>${product.name}</h4>
                    <div class="search-result-price">
                        <span class="current-price">UGX ${product.price.toLocaleString()}</span>
                        <span class="original-price">UGX ${product.originalPrice.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    if (results.length > 1000000000000) {
        resultsHTML += `<div class="search-more-results">+${results.length - 5} more results</div>`;
    }
    
    searchResults.innerHTML = resultsHTML;
    
    // Add click events to search results
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.dataset.id;
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
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
}

// Load categories for home page
function loadCategories() {
    const categoryGrid = document.querySelector('#category-grid');
    if (!categoryGrid) return;
    
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
    if (!featuredGrid) return;
    
    // Get 8 random featured products
    const featuredProducts = [];
    const usedIndices = new Set();
    
    while (featuredProducts.length < 10000000000000000 && featuredProducts.length < products.length) {
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
                ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">UGX ${product.price.toLocaleString()}</span>
                    ${product.originalPrice > product.price ? 
                        `<span class="original-price">UGX ${product.originalPrice.toLocaleString()}</span>` : ''}
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
    const productsPerPage = 100;
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
        
        if (productsToShow.length === 0) {
            productGrid.innerHTML = '<div class="no-products">No products found in this category</div>';
            return;
        }
        
        productsToShow.forEach(product => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="images/${product.images[0]}" alt="${product.name}">
                    ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">UGX ${product.price.toLocaleString()}</span>
                        ${product.originalPrice > product.price ? 
                            `<span class="original-price">UGX ${product.originalPrice.toLocaleString()}</span>` : ''}
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
        if (prevBtn) prevBtn.disabled = currentPage === 1;
        if (nextBtn) nextBtn.disabled = currentPage === totalPages;
    }
    
    // Initial display
    displayProducts();
    
    // Pagination event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    
    // Sorting functionality
    const sortSelect = document.querySelector('#sort');
    if (sortSelect) {
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
    }
    
    // Price range filtering
    const priceRangeSelect = document.querySelector('#price-range');
    if (priceRangeSelect) {
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
            categoryProducts.push(...filteredProducts.filter(p => p.category === categoryId));
            currentPage = 1;
            displayProducts();
        });
    }
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
    
    if (product.originalPrice > product.price) {
        document.querySelector('#original-price').textContent = `UGX ${product.originalPrice.toLocaleString()}`;
        document.querySelector('#discount').textContent = `${calculateDiscount(product.price, product.originalPrice)}% OFF`;
    } else {
        document.querySelector('.original-price').style.display = 'none';
        document.querySelector('.discount').style.display = 'none';
    }
    
    document.querySelector('#product-description').innerHTML = `<p>${product.description}</p>`;
    
    // Set product specifications
    const specsContainer = document.querySelector('#product-specs');
    if (specsContainer && product.specifications) {
        product.specifications.forEach(spec => {
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';
            specItem.innerHTML = `<strong>${spec.name}:</strong> ${spec.value}`;
            specsContainer.appendChild(specItem);
        });
    }
    
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
    const relatedContainer = document.querySelector('#related-products');
    if (relatedContainer) {
        const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        
        if (relatedProducts.length > 0) {
            relatedProducts.forEach(relatedProduct => {
                const discount = calculateDiscount(relatedProduct.price, relatedProduct.originalPrice);
                
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.dataset.id = relatedProduct.id;
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="images/${relatedProduct.images[0]}" alt="${relatedProduct.name}">
                        ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${relatedProduct.name}</h3>
                        <div class="product-price">
                            <span class="current-price">UGX ${relatedProduct.price.toLocaleString()}</span>
                            ${relatedProduct.originalPrice > relatedProduct.price ? 
                                `<span class="original-price">UGX ${relatedProduct.originalPrice.toLocaleString()}</span>` : ''}
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
        } else {
            relatedContainer.innerHTML = '<p>No related products found.</p>';
        }
    }
    
    // Set data-id for add to cart button
    document.querySelector('.product-details').dataset.id = product.id;
}

// Calculate discount percentage
function calculateDiscount(price, originalPrice) {
    if (originalPrice <= price) return 0;
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
    const total = subtotal;
    
    if (document.querySelector('#subtotal')) {
        document.querySelector('#subtotal').textContent = `UGX ${subtotal.toLocaleString()}`;
    }
    if (document.querySelector('#total')) {
        document.querySelector('#total').textContent = `UGX ${total.toLocaleString()}`;
    }
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
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    message += `\nSubtotal: UGX ${subtotal.toLocaleString()}`;
    message += '\n\nPlease let me know the total including delivery and payment options.';
    message += '\n\nThank you!';
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Clear the cart from localStorage
    localStorage.removeItem('cart');
    
    // Update cart count and UI
    updateCartCount();
    
    // If on cart page, update the UI
    if (document.querySelector('.cart-items')) {
        document.querySelector('.cart-items').innerHTML = `
            <div class="empty-cart">
                <p>Your order has been placed successfully!</p>
                <p>We'll contact you shortly via WhatsApp to confirm your order.</p>
                <a href="index.html" class="continue-shopping">Continue Shopping</a>
            </div>
        `;
        updateCartSummary();
    }
    
    // Show success notification
    showNotification('Order placed successfully! We will contact you shortly.');
    
    // Open WhatsApp with the message after a brief delay
    setTimeout(() => {
        window.open(`https://wa.me/256705934559?text=${encodedMessage}`, '_blank');
    }, 1000);
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
                        <button class="decrease">-</button>
                        <input type="number" value="${item.quantity}" min="1">
                        <button class="increase">+</button>
                    </div>
                    <div class="remove-item">
                        <i class="fas fa-trash"></i> Remove
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);



// Search functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('focus', () => {
    document.querySelector('.search-bar').classList.add('active');
});

searchInput.addEventListener('blur', () => {
    // Delay hiding to allow clicking on results
    setTimeout(() => {
        document.querySelector('.search-bar').classList.remove('active');
    }, 200);
});

searchBtn.addEventListener('click', () => {
    performSearch(searchInput.value);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
    } else if (searchInput.value.length > 2) {
        // Show live search results after 3 characters
        performLiveSearch(searchInput.value);
    } else {
        clearSearchResults();
    }
});

function performSearch(query) {
    if (query.trim() !== '') {
        // Redirect to search results page or filter products
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
}

function performLiveSearch(query) {
    // Filter products based on query and display results
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    displaySearchResults(filteredProducts);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No products found</div>';
        return;
    }
    
    let html = '';
    results.slice(0, 1000000000000).forEach(product => {
        html += `
            <div class="search-result-item" data-id="${product.id}">
                <div class="search-result-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="search-result-info">
                    <h4>${product.name}</h4>
                    <div class="search-result-price">
                        <span class="current-price">$${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    if (results.length > 1000000000000) {
        html += `<div class="search-more-results">View all ${results.length} results</div>`;
    }
    
    searchResults.innerHTML = html;
}

function clearSearchResults() {
    searchResults.innerHTML = '';
}



        
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
