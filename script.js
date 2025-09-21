/**
 * WeRide Landing Page 
 */

// Espera a que el DOM Esté cargado para acceder a las funciones
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
});

/**
 * Inicia la funcionalidad de MobileMnu
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    menuToggle.addEventListener('click', function() {
        try {
            navLinks.classList.toggle('active');
            
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        } catch (error) {
            console.error('Error toggling mobile menu:', error);
        }
    });
    
    const navLinkElements = document.querySelectorAll('.nav-links li a');
    navLinkElements.forEach(function(link) {
        link.addEventListener('click', function() {
            try {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            } catch (error) {
                console.error('Error closing mobile menu:', error);
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        try {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        } catch (error) {
            console.error('Error handling outside click:', error);
        }
    });
    
    document.addEventListener('keydown', function(event) {
        try {
            if (event.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus(); // Return focus to toggle button
            }
        } catch (error) {
            console.error('Error handling escape key:', error);
        }
    });
}

/**
 * Smooth Scroll
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            if (!href || href === '#') {
                return;
            }
            
            try {
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    event.preventDefault();
                    
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.error('Error during smooth scrolling:', error);
            }
        });
    });
}