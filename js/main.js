document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 50
  });

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Parallax Effect and Hero Content Fade
  const heroContent = document.querySelector('.hero-content');
  const heroBg = document.querySelector('.hero-bg');
  if (heroContent) heroContent.style.opacity = '0';
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrolled = window.pageYOffset;
        // Parallax
        if (heroBg) {
          heroBg.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`;
        }
        // Content Fade
        if (heroContent) {
          const opacity = Math.min(1, Math.max(0, (scrolled - 100) / 300));
          heroContent.style.opacity = opacity;
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Past Shows Toggle
  document.querySelectorAll('.year-header').forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const indicator = this.querySelector('.toggle-indicator');
      if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        indicator.textContent = '-';
      } else {
        content.style.display = 'none';
        indicator.textContent = '+';
      }
    });
  });

  // Sticky Navigation
  const nav = document.querySelector('.main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }
});
