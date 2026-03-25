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
