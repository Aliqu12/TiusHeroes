// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking on a nav link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Function for programmatic scrolling (used by buttons)
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// FAQ toggle functionality
function toggleFAQ(button) {
  const faqItem = button.closest('.faq-item');
  const isOpen = faqItem.classList.contains('open');
  
  // Close all other FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('open');
    }
  });
  
  // Toggle current item
  faqItem.classList.toggle('open', !isOpen);
}

// Header scroll effect
function initHeaderScrollEffect() {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = 'hsl(var(--background))';
      header.style.backdropFilter = 'none';
    }
    
    lastScrollY = currentScrollY;
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    '.feature-item, .team-card, .service-card, .news-item, .value-item'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Form validation and submission feedback
function initFormHandling() {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const requiredFields = contactForm.querySelectorAll('[required]:not([type="checkbox"])');
      const checkbox = contactForm.querySelector('input[type="checkbox"]');
      const emailField = contactForm.querySelector('input[type="email"]');
      let isValid = true;

      // Reset borders
      requiredFields.forEach(field => {
        field.style.borderColor = 'hsl(var(--border))';
      });

      // Validate text inputs
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = 'hsl(var(--destructive))';
        }
      });

      // Email validation
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = 'hsl(var(--destructive))';
        }
      }

      // Checkbox validation
      if (checkbox && !checkbox.checked) {
        isValid = false;
        const checkboxContainer = checkbox.closest('.checkbox-container') || checkbox.parentElement;
        checkboxContainer.style.color = 'hsl(var(--destructive))';
        setTimeout(() => {
          checkboxContainer.style.color = '';
        }, 3000);
      }

      // Prevent if not valid
      if (!isValid) {
        e.preventDefault();
        if (!checkbox.checked) {
          showMessage('Bitte bestätigen Sie die Datenschutzerklärung.', 'error');
        } else {
          showMessage('Bitte füllen Sie alle Pflichtfelder korrekt aus.', 'error');
        }
      } else {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Wird gesendet...';
        submitBtn.disabled = true;

        // Re-enable after 2s (optional, falls Formspree nicht redirectet)
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }
}

// Show messages to user
function showMessage(message, type = 'info') {
  // Create message element
  const messageEl = document.createElement('div');
  messageEl.className = `message message-${type}`;
  messageEl.textContent = message;
  
  // Style the message
  messageEl.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'error' ? 'hsl(var(--destructive))' : 'hsl(var(--primary))'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(messageEl);
  
  // Animate in
  setTimeout(() => {
    messageEl.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    messageEl.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.parentNode.removeChild(messageEl);
      }
    }, 300);
  }, 5000);
}

// Active navigation highlight
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Call once on load
}

// Add active nav styles
function addActiveNavStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active,
    .mobile-nav-link.active {
      color: hsl(var(--primary)) !important;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);
}

// Keyboard navigation
function initKeyboardNavigation() {
  // Allow Enter key to trigger FAQ toggles
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
}

// Performance optimization: Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll('img');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      if (img.dataset.src) {
        imageObserver.observe(img);
      }
    });
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScrolling();
  initHeaderScrollEffect();
  initScrollAnimations();
  initFormHandling();
  initActiveNavigation();
  addActiveNavStyles();
  initKeyboardNavigation();
  initLazyLoading();
  
  // Add global scrollToSection function
  window.scrollToSection = scrollToSection;
  window.toggleFAQ = toggleFAQ;
  
  console.log('TiuS Alltagshelden website initialized');
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Page is hidden, pause any animations or reduce activity
    console.log('Page hidden - reducing activity');
  } else {
    // Page is visible again
    console.log('Page visible - resuming activity');
  }
});

// Error handling for images
window.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    // Handle broken images
    e.target.style.display = 'none';
    console.warn('Image failed to load:', e.target.src);
  }
}, true);

// Prevent form submission if JavaScript is disabled fallback
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.setAttribute('novalidate', 'true');
});
