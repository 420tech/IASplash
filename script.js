// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Modal functionality
function openWaitlistModal() {
    const modal = document.getElementById('waitlistModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeWaitlistModal() {
    const modal = document.getElementById('waitlistModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('waitlistModal');
    if (event.target === modal) {
        closeWaitlistModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeWaitlistModal();
    }
});

// Scroll to features section
function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Waitlist form submission with Formspree
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    // Get form data for validation
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        agencyName: document.getElementById('agencyName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        email: document.getElementById('email').value,
        agencySize: document.getElementById('agencySize').value
    };
    
    // Basic validation - check all required fields
    const requiredFields = ['firstName', 'lastName', 'agencyName', 'address', 'city', 'state', 'zip', 'email', 'agencySize'];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
        e.preventDefault();
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }
    
    // Zip code validation (basic US format)
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(formData.zip)) {
        e.preventDefault();
        alert('Please enter a valid zip code (e.g., 12345 or 12345-6789).');
        return;
    }
    
    // Show loading state
    const submitButton = document.querySelector('#waitlistForm button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Joining...';
    submitButton.disabled = true;
    
    // Reset button after a delay (form will redirect)
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
    
    // Form will be submitted to Formspree automatically
    // No need to prevent default - let it submit normally
});

// Add some interactive animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(30px)';
        stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(stat);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollAnimations);

// Add floating animation to hero cards with mouse interaction
document.addEventListener('DOMContentLoaded', function() {
    const heroVisual = document.querySelector('.hero-visual');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroVisual) {
        heroVisual.addEventListener('mousemove', function(e) {
            const rect = heroVisual.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            floatingCards.forEach((card, index) => {
                const intensity = (index + 1) * 10;
                const moveX = (x - 0.5) * intensity;
                const moveY = (y - 0.5) * intensity;
                
                card.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
        
        heroVisual.addEventListener('mouseleave', function() {
            floatingCards.forEach(card => {
                card.style.transform = 'translate(0, 0)';
            });
        });
    }
});