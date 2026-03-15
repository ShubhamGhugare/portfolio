/*
  =============================================
  PHOTO MODAL
  When user clicks the profile picture in the
  About section, it opens a fullscreen popup
  showing the enlarged photo.
  Clicking the X button or outside the modal closes it.
  =============================================
*/
const photoModal = document.getElementById('photoModal');

// Open modal when profile picture is clicked
document.getElementById('openPhotoModal').addEventListener('click', () => {
  photoModal.classList.add('active');
});

// Close modal when X button is clicked
document.querySelector('.close-photo-modal').addEventListener('click', () => {
  photoModal.classList.remove('active');
});

// Close modal when clicking outside the photo (on dark overlay)
photoModal.addEventListener('click', (e) => {
  if (e.target === photoModal) photoModal.classList.remove('active');
});


/*
  =============================================
  CONTACT FORM
  Prevents the form from refreshing the page on submit.
  Shows a thank you message with the user's name,
  then clears the form fields.
  =============================================
*/
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop page from reloading
  alert(`Thanks ${document.getElementById('name').value}! Your message has been sent.`);
  this.reset(); // Clear all form fields after submission
});


/*
  =============================================
  SMOOTH SCROLL
  When any nav link is clicked, instead of jumping
  directly to the section, it scrolls smoothly.
  =============================================
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump behavior
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});


/*
  =============================================
  MOBILE NAV TOGGLE
  On small screens, the hamburger button shows/hides
  the navigation links. Also toggles the X icon animation.
  =============================================
*/
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');  // Show or hide nav links
  toggleBtn.classList.toggle('open');   // Animate hamburger to X
});


/*
  =============================================
  BACK TO TOP BUTTON
  The button is hidden by default.
  It appears when user scrolls down more than 300px.
  Clicking it smoothly scrolls back to the top.
  =============================================
*/
const backToTopBtn = document.getElementById('backToTop');

// Show or hide button based on scroll position
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



/*
  =============================================
  SCROLL ANIMATIONS
  Uses IntersectionObserver to watch each section.
  When a section enters the viewport, it fades in
  and slides up into position.
  The hero section is excluded since it's always visible.
  =============================================
*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Apply initial hidden state and observe each section
document.querySelectorAll('section:not(.hero)').forEach(section => {
  section.style.opacity    = '0';
  section.style.transform  = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});


/*
  =============================================
  SKILL MODAL
  Each skill card has a data-skill attribute (e.g. "html").
  When clicked, it looks up the matching details from
  skillDetails object and displays them in the modal popup.
  =============================================
*/
const skillModal = document.getElementById('skillModal');

// Details for each skill - update these with your own knowledge
const skillDetails = {
  html: {
    title: 'HTML',
    description: 'Proficient in HTML5 with strong understanding of semantic markup, forms, accessibility standards, and modern web structure.'
  },
  css: {
    title: 'CSS',
    description: 'Expert in CSS3 including Flexbox, Grid, animations, transitions, and responsive design. Skilled in creating beautiful, mobile-first layouts.'
  },
  javascript: {
    title: 'JavaScript',
    description: 'Strong knowledge of JavaScript ES6+, DOM manipulation, event handling, async programming, and API integration.'
  },
  c: {
    title: 'C Programming',
    description: 'Solid foundation in C programming including data structures, algorithms, pointers, memory management, and problem-solving.'
  },
  python: {
    title: 'Python',
    description: 'Proficient in Python for scripting, automation, data analysis, and backend development.'
  },
  git: {
    title: 'Git & GitHub',
    description: 'Experienced with version control using Git and GitHub. Skilled in branching, merging, pull requests, and collaboration workflows.'
  },
  uiux: {
    title: 'UI/UX',
    description: 'Understanding of UI/UX design principles focused on creating intuitive, accessible, and visually appealing designs.'
  }
};

// When a skill card is clicked, fill modal with its details and show it
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', () => {
    const d = skillDetails[skill.getAttribute('data-skill')];
    document.getElementById('modalTitle').textContent       = d.title;
    document.getElementById('modalDescription').textContent = d.description;
    skillModal.classList.add('active');
  });
});

// Close skill modal with Close button or clicking outside
document.querySelector('.close-modal').addEventListener('click', () => skillModal.classList.remove('active'));
skillModal.addEventListener('click', (e) => {
  if (e.target === skillModal) skillModal.classList.remove('active');
});


/*
  =============================================
  PROJECT MODAL
  Each project card has a data-project attribute (e.g. "weather").
  When clicked, it looks up the matching details from
  projectDetails object and displays them in the modal popup.
  Update the desc and points with your actual project info.
  =============================================
*/
const projectModal = document.getElementById('projectModal');

// Details for each project - update with your own project info
const projectDetails = {
  landing: {
    title: 'Landing Page',
    desc:  'A fully responsive landing page built using HTML & CSS.',
    points: ['Clean and modern UI design', 'Mobile-first responsive layout', 'CSS animations and transitions', 'Cross-browser compatible']
  },
  portfolio: {
    title: 'Portfolio Website',
    desc:  'As part of my internship, I developed a modern and visually attractive personal portfolio website using HTML, CSS, and JavaScript. The website is designed with a clean layout, smooth navigation, and interactive elements to create an engaging user experience. It highlights my skills, projects, and contact information while maintaining a fully responsive design that works seamlessly across different devices. This project reflects my ability to build modern, user-friendly web interfaces using front-end technologies. 🚀',
    points: ['Built with HTML, CSS and JavaScript', 'Smooth scroll animations and transitions', 'Interactive skill and project modals', 'Fully responsive across all devices', 'Dark themed with glowing effects', 'Contact form with validation']
  },
  weather: {
    title: 'Temperature Converter',
    desc:  'A JavaScript temperature converter application that converts between Celsius, Fahrenheit and Kelvin.',
    points: ['Converts Celsius, Fahrenheit & Kelvin', 'Real-time conversion as you type', 'Clean and simple UI', 'Built with HTML, CSS & JavaScript']
  }
};

// When a project card is clicked, fill modal with its details and show it
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    const d = projectDetails[project.getAttribute('data-project')];
    document.getElementById('projectModalTitle').textContent  = d.title;
    document.getElementById('projectModalDesc').textContent   = d.desc;
    document.getElementById('projectModalPoints').innerHTML   = d.points.map(p => `<li>${p}</li>`).join('');
    projectModal.classList.add('active');
  });
});

// Close project modal with Close button or clicking outside
document.querySelector('.close-project-modal').addEventListener('click', () => projectModal.classList.remove('active'));
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) projectModal.classList.remove('active');
});
