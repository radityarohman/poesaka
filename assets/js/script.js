const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);

  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    // Trigger reflow to ensure animation runs
    menu.offsetHeight; 
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 500); // Match this duration with the CSS transition
  }
});


// Menambahkan efek blur pada navbar saat scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('backdrop-blur-lg', 'shadow-md');
  } else {
    navbar.classList.remove('backdrop-blur-lg', 'shadow-md');
  }
});
