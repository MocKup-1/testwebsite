document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Hero Slider - Updated with working slider
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
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopSlider() {
        clearInterval(slideInterval);
    }
    
    if (slides.length > 0) {
        // Initialize slider
        showSlide(0);
        startSlider();
        
        // Pause on hover
        const slider = document.querySelector('.advert-slider');
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
        
        // Navigation buttons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', function() {
                stopSlider();
                prevSlide();
                startSlider();
            });
            
            nextBtn.addEventListener('click', function() {
                stopSlider();
                nextSlide();
                startSlider();
            });
        }
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

// ... (rest of the functions remain the same as in the previous implementation)