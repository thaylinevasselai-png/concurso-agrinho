const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Mensagem enviada com sucesso!');
  this.reset();
});
