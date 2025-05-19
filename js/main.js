// navigation.js

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const navbarLinks = document.querySelectorAll(".navbar-link");

  // Toggle mobile navigation
  navbarToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
    navbarOverlay.classList.toggle("active");
  });

  // Close mobile navigation when overlay or link is clicked
  navbarOverlay.addEventListener("click", function () {
    navbarMenu.classList.remove("active");
    navbarOverlay.classList.remove("active");
  });

  navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      navbarOverlay.classList.remove("active");
    });
  });

  // Scrollspy logic
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".navbar-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});


// main.js

// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Fade-in animation for elements
  const fadeElements = document.querySelectorAll(
    'section, .fact-item, .performance-item, .release-item, .media-item, .contact-method'
  );
  fadeElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Mobile navigation toggle
  const navToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarOverlay = document.querySelector('.navbar-overlay');

  if (navToggle && navbarMenu && navbarOverlay) {
    navToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      navbarOverlay.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    navbarOverlay.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
      navbarOverlay.classList.remove('active');
      navToggle.classList.remove('active');
    });

    document.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarOverlay.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // Expandable year toggles in Past Shows
  const yearHeaders = document.querySelectorAll('.year-header');
  yearHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const year = header.textContent.trim().split(" ")[0];
      const showList = document.querySelector(`.show-list[data-year="${year}"]`);
      const indicator = header.querySelector('.toggle-indicator');
      if (showList && indicator) {
        const isHidden = showList.style.display === "none";
        showList.style.display = isHidden ? "block" : "none";
        indicator.textContent = isHidden ? "-" : "+";
      }
    });
  });

  // Parallax scrolling
  const parallaxElems = document.querySelectorAll('.parallax-bg');
  function handleParallax(offset) {
    parallaxElems.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.5;
      el.style.transform = `translateY(${offset * speed}px) scale(1.2)`;
    });
  }

  const parallaxContainer = document.querySelector('.parallax-container');
  if (parallaxContainer) {
    parallaxContainer.addEventListener('scroll', () => {
      handleParallax(parallaxContainer.scrollTop);
    });
  } else {
    window.addEventListener('scroll', () => {
      handleParallax(window.pageYOffset);
    });
  }
});


  // Toggle Past Shows Years
  const yearHeaders = document.querySelectorAll(".year-header");
  yearHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const year = header.textContent.trim().substring(0, 4);
      const showList = document.querySelector(`.show-list[data-year="${year}"]`);
      if (showList) {
        const isHidden = showList.style.display === "none";
        showList.style.display = isHidden ? "block" : "none";
        const indicator = header.querySelector(".toggle-indicator");
        if (indicator) indicator.textContent = isHidden ? "-" : "+";
      }
    });
  });



// Toggle Past Shows Year Sections
document.querySelectorAll(".year-header").forEach(header => {
  header.addEventListener("click", () => {
    const year = header.textContent.trim().split(" ")[0];
    const list = document.querySelector(`.show-list[data-year="${year}"]`);
    const indicator = header.querySelector(".toggle-indicator");

    if (list && indicator) {
      const isVisible = list.style.display !== "none";
      list.style.display = isVisible ? "none" : "block";
      indicator.textContent = isVisible ? "+" : "−";
    }
  });
});
