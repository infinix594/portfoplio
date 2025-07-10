// Responsive Navbar Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active'); // Close nav on mobile after click
    }
  });
});

// Optional: Prevent form submission (demo only)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});

// Dynamic typing effect for home section
const roles = [
  'a Frontend Developer',
  'a Photo Editor',
  'a Coder',
  'a Modern Web Developer'
];
const dynamicText = document.querySelector('.dynamic-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    dynamicText.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    } else {
      setTimeout(typeRole, 40);
    }
  } else {
    dynamicText.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, 1200);
    } else {
      setTimeout(typeRole, 80);
    }
  }
}
typeRole();

// 3D tilt effect for profile image
const profileWrapper = document.querySelector('.profile-img-wrapper');
const profileImg = document.querySelector('.profile-img');

if (profileWrapper && profileImg) {
  profileWrapper.addEventListener('mousemove', (e) => {
    const rect = profileWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12; // max 12deg
    const rotateY = ((x - centerX) / centerX) * 12;
    profileImg.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  profileWrapper.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// 3D tilt effect for about image
const aboutWrapper = document.querySelector('.about-img-wrapper');
const aboutImg = document.querySelector('.about-img');

if (aboutWrapper && aboutImg) {
  aboutWrapper.addEventListener('mousemove', (e) => {
    const rect = aboutWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    aboutImg.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  aboutWrapper.addEventListener('mouseleave', () => {
    aboutImg.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
} 