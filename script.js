// Alternar tema dark/light
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('light')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Mensagem enviada com sucesso! (Demonstração)');
  this.reset();
});
