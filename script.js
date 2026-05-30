  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('form-status').style.display = 'block';
    e.target.querySelector('button').textContent = 'sent ✓';
    e.target.querySelector('button').style.opacity = '0.5';
  }
