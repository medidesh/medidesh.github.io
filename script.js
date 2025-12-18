
// Current script for Medidesh
const mobileMenuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

// Theme Toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

// Pricing Toggle Logic
const pricingToggle = document.getElementById('pricing-toggle');
const priceAmounts = document.querySelectorAll('.price-amount');
const pricePeriods = document.querySelectorAll('.price-period');

if(pricingToggle){
    pricingToggle.addEventListener('change', function() {
        const isYearly = this.checked;
        
        priceAmounts.forEach(amount => {
            if(isYearly) {
                amount.textContent = amount.dataset.yearly;
            } else {
                amount.textContent = amount.dataset.monthly;
            }
        });

        pricePeriods.forEach(period => {
           // functionality can be extended if needed
        });
    });
}


// Testimonial Carousel Logic
const testimonialContainer = document.getElementById('testimonials-container');
const prevBtn = document.getElementById('prev-review');
const nextBtn = document.getElementById('next-review');

if(testimonialContainer && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        testimonialContainer.scrollBy({ left: 320, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        testimonialContainer.scrollBy({ left: -320, behavior: 'smooth' });
    });
}

// Contact Modal Logic
const contactModal = document.getElementById('contact-modal');
const closeModalBtn = document.getElementById('close-modal');
const openModalBtns = document.querySelectorAll('.open-contact-modal');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(contactModal) contactModal.showModal();
    });
});

if(closeModalBtn && contactModal) {
    closeModalBtn.addEventListener('click', () => {
        contactModal.close();
    });
}

// Close on backdrop click
if(contactModal) {
    contactModal.addEventListener('click', (e) => {
        const rect = contactModal.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            contactModal.close();
        }
    });
}
