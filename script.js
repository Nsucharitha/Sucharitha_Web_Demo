// Add Intersection Observer for scrolling animations
const sections = document.querySelectorAll('.section');


const observerOptions = {
   root: null, // Viewport as root
   threshold: 0.3, // Trigger when 30% of the section is visible
};


const sectionObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
       if (entry.isIntersecting) {
           entry.target.classList.add('active');
       }
   });
}, observerOptions);


sections.forEach((section) => {
   sectionObserver.observe(section);
});
