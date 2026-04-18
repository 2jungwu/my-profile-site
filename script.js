const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

function setTheme(dark) {
  if (dark) {
    html.classList.add('dark');
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  } else {
    html.classList.remove('dark');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  }
}

// Default: light mode. Only apply dark if user explicitly chose it.
const saved = localStorage.getItem('theme');
setTheme(saved === 'dark');

themeToggle.addEventListener('click', () => {
  const isDark = html.classList.contains('dark');
  setTheme(!isDark);
  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
});

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const lines = menuBtn.querySelectorAll('.hamburger-line');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  // Animate hamburger
  if (!isOpen) {
    lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    lines[0].style.transform = '';
    lines[1].style.opacity = '';
    lines[2].style.transform = '';
  }
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    lines[0].style.transform = '';
    lines[1].style.opacity = '';
    lines[2].style.transform = '';
  });
});
