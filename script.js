const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.getElementById('menu-toggle');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
  });
});
