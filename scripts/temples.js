// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change hamburger icon to X when menu is open
    if (navMenu.classList.contains('active')) {
        hamburgerMenu.innerHTML = '<span>&times;</span>';
    } else {
        hamburgerMenu.innerHTML = '<span>&#9776;</span>';
    }
});
