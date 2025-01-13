const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const navlink = document.querySelectorAll('nav a');

// Toggle Menu Visibility & ARIA Attribute
menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('active'); // Menambahkan animasi slide-in

  const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
  menuButton.setAttribute('aria-expanded', !expanded);
});

// Menambahkan efek blur pada navbar saat scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('backdrop-blur-lg', 'shadow-md');
    navlink.classList.add('text-yellow-light')
  } else {
    navbar.classList.remove('backdrop-blur-lg', 'shadow-md');
    navlink.classList.remove('text-yellow-light')
  }
});
