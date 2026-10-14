(() => {
  'use strict';
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const messageInput = document.getElementById('message');

  const validateMessage = () => {
    messageInput.setCustomValidity(
      messageInput.value.replace(/\s/g, '').length >= 10
        ? ''
        : 'Enter at least 10 non-space characters.'
    );
  };

  messageInput.addEventListener('input', validateMessage);

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = '';
    formMessage.className = 'form-status mt-3';
    validateMessage();
    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      const firstInvalid = contactForm.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    // Front-end demo only: connect this form to a backend/email service to receive messages.
    formMessage.textContent = 'Thank you! Your details have been validated. This demo form is not connected to a server yet.';
    formMessage.classList.add('text-success');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });

  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMessage = document.getElementById('newsletterMessage');
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!newsletterForm.reportValidity()) return;
    newsletterMessage.textContent = 'Thanks for your interest! Newsletter sign-up is a front-end demo.';
    newsletterMessage.className = 'small mt-2 text-success';
    newsletterForm.reset();
  });

  const backToTop = document.getElementById('backToTop');
  const updateBackToTop = () => backToTop.classList.toggle('show', window.scrollY > 450);
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Close the mobile navigation after a section link is selected.
  document.querySelectorAll('#mainNav .nav-link:not(.dropdown-toggle), #mainNav .dropdown-item').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      if (nav.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });
})();
