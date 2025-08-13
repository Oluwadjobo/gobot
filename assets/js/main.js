// Main JavaScript file for GoBot
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('mobile-menu-enter');
        });
    }

    // Robot click interaction
    const robot = document.getElementById('robot');
    if (robot) {
        robot.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
            
            // Add speech bubble
            showRobotMessage("Salut ! Je suis GoBot, votre assistant intelligent 🤖");
        });
    }

    // Partner button functionality
    const partnerBtn = document.getElementById('partner-btn');
    if (partnerBtn) {
        partnerBtn.addEventListener('click', function() {
            window.location.href = 'contact.html?type=partner';
        });
    }

    // USSD numbers click to copy
    const ussdNumbers = document.querySelectorAll('.font-mono');
    ussdNumbers.forEach(number => {
        number.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(function() {
                showNotification('Numéro copié !', 'success');
            }).catch(function() {
                showNotification('Erreur lors de la copie', 'error');
            });
        });
    });
});

// Show robot message
function showRobotMessage(message) {
    const robot = document.getElementById('robot');
    if (!robot) return;

    // Remove existing message
    const existingMessage = document.querySelector('.robot-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create speech bubble
    const speechBubble = document.createElement('div');
    speechBubble.className = 'robot-message absolute bg-white p-4 rounded-lg shadow-lg border-2 border-gobot-red max-w-xs z-10';
    speechBubble.style.cssText = `
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        animation: fadeInUp 0.5s ease-out;
    `;
    
    speechBubble.innerHTML = `
        <p class="text-sm text-gobot-blue">${message}</p>
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gobot-red"></div>
    `;

    robot.style.position = 'relative';
    robot.appendChild(speechBubble);

    // Remove after 3 seconds
    setTimeout(() => {
        if (speechBubble && speechBubble.parentNode) {
            speechBubble.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => speechBubble.remove(), 500);
        }
    }, 3000);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-gobot-red';
    
    notification.className = `notification fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Slide out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Form validation utility
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });

    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
}

// Loading state utility
function setLoadingState(buttonId, isLoading) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<span class="loading inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>Chargement...';
    } else {
        button.disabled = false;
        // Restore original text - you might want to store this
    }
}

// Smooth scroll utility
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .feature-card, .step-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);
