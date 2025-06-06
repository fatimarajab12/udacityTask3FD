import { showAbout } from './js/about.js';
import { loadProjects, setupScrolling } from './js/projects .js';
import { setupFormValidation } from './js/validateForm.js';

document.addEventListener("DOMContentLoaded", () => {
  showAbout();
});

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  setupScrolling();
});


document.addEventListener('DOMContentLoaded', () => {
  setupFormValidation();
});
