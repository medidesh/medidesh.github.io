// Current script for Medidesh
const mobileMenuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// --- 1. Mobile Menu Logic ---

// Open Menu
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });
}

// Close Menu Function
function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.add('translate-x-full');
    }
}

// Close Button Click
if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMobileMenu);
}

// Close menu when clicking ANY link inside the mobile menu
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// --- 2. Theme Toggle ---
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    });
}

// --- 3. Scroll Animation ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

// --- 4. Pricing Toggle Logic ---
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
    });
}

// --- 5. Testimonial Carousel Logic ---
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

// --- 6. Contact Modal Logic ---
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

// --- 7. Download Button Alert Logic ---
const downloadAlertBtns = document.querySelectorAll('.download-alert');

downloadAlertBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        alert("App in Progress, please contact info@medidesh.com to get access link");
    });
});

// --- 8. Active Link Highlighting (Scroll Spy) ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a, #mobile-menu a:not(#close-menu-btn)");

function highlightNavLink() {
  let scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150; 
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        // --- NEW CHANGE: Skip the logic for the AI link ---
        if (link.getAttribute("href") === "#ai-features") return;

        // Reset styles for other links
        link.classList.remove("text-sea-green-600", "dark:text-sea-green-400", "font-bold");
        link.classList.add("text-slate-600", "dark:text-slate-300");
        
        // Add active style to matching link (excluding AI)
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.remove("text-slate-600", "dark:text-slate-300");
          link.classList.add("text-sea-green-600", "dark:text-sea-green-400", "font-bold");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightNavLink);
document.addEventListener("DOMContentLoaded", highlightNavLink);