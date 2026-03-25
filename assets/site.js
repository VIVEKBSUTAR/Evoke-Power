const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('.faq-head').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    if (!item) return;
    item.classList.toggle('open');
  });
});

(function setUtmFields() {
  const form = document.getElementById('leadForm');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
    const input = form.querySelector(`input[name="${key}"]`);
    if (input) input.value = params.get(key) || '';
  });
})();

// ROI Calculator
function updateCalc() {
  const sessions = document.getElementById('sessions').value;
  const rate = document.getElementById('rate').value;
  document.getElementById('sessionsVal').textContent = sessions;
  
  // Logic: Sessions * 30kWh (avg) * Rate * 30 days
  const kwhPerSession = 30; 
  const monthlyRevenue = sessions * kwhPerSession * rate * 30;
  
  // Format as currency
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });
  
  const resultEl = document.getElementById('revenueResult');
  if (resultEl) resultEl.textContent = formatter.format(monthlyRevenue);
}

// Initial calc
document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('revenueResult')) updateCalc();
});

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  // Elements to animate
  const elementsToAnimate = document.querySelectorAll(
    'h1, h2, .card, .step, .hero-media, .visual-card, .cta-band, .form-card, .page-media, .hero-card, .visual-caption'
  );

  elementsToAnimate.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
