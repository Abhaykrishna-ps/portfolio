window.addEventListener('load', () => {

  setTimeout(() => {

    document
      .getElementById('loader')
      .style.display = 'none';

  }, 1000);

});

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }

    });

  },

  {
    threshold: 0.2
  }

);

document
  .querySelectorAll('.fade-in')
  .forEach((el) => observer.observe(el));

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }

  });

  document
    .querySelectorAll('.nav-links a')
    .forEach((link) => {

      link.classList.remove('active');

      if (
        link.getAttribute('href') === `#${current}`
      ) {
        link.classList.add('active');
      }

    });

});

const menuBtn = document.querySelector('.menu-btn');

const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {

  navLinks.classList.toggle('show');

});