const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

// 3D mouse tilt effect
const tiltCards = document.querySelectorAll('[data-tilt]');
tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((0.5 - y / rect.height)) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Profile fallback when both jpg/jpeg fail
const profile = document.querySelector('.profile-photo');
if (profile) {
  profile.addEventListener('error', () => {
    profile.style.display = 'none';
    const fallback = document.querySelector('.photo-fallback');
    if (fallback) fallback.style.display = 'grid';
  });
}
