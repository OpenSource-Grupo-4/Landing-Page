const hamburger-menu = document.getElementById('hamburger-menu');
const nav-links = document.getElementById('nav-links');

hamburger-menu.addEventListener('click', () => {
    nav-links.classList.toggle('active');
});
