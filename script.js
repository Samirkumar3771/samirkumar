var typed = new Typed('#typed', {
      strings: ["Web Developer", "UI/UX Designer", "Problem Solver"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
const btn = document.getElementById("topBtn");
window.onscroll = () => btn.style.display = window.scrollY > 300 ? "block" : "none";
function topFunction() { window.scrollTo({top: 0, behavior: 'smooth'}); }
const toggleBtn = document.getElementById('toggle-theme');

  // Load saved theme
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      toggleBtn.textContent = '🌙 Dark Mode';
    }
  };

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    toggleBtn.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });