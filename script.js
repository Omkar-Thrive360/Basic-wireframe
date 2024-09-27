// Add smooth scroll effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// FAQ accordion behavior
document.querySelectorAll('.faq-item h3').forEach(faqTitle => {
  faqTitle.addEventListener('click', () => {
    const content = faqTitle.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
