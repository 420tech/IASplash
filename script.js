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

// Waitlist form submission
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        role: document.getElementById('role').value
    };
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitButton = document.querySelector('#waitlistForm button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Joining...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // In a real application, you would send this data to your backend
        console.log('Waitlist signup:', formData);
        
        // Show success message
        alert(`Thank you, ${formData.firstName}! You've been added to the AccellRator waitlist. We'll be in touch soon!`);
        
        // Reset form
        document.getElementById('waitlistForm').reset();
        
        // Close modal
        closeWaitlistModal();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // You could also redirect to a thank you page or show a success modal
        // window.location.href = '/thank-you';
        
    }, 1500);
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