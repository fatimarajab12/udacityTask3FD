// js/projects.js

export async function loadProjects() {
  try {
    const response = await fetch('../starter/data/projectsData.json');
    if (!response.ok) throw new Error('Failed to fetch projects data');
    
    const projects = await response.json();
    populateProjectList(projects);
    populateSpotlight(projects[0]); // Set the first project as the spotlight by default
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

function populateProjectList(projects) {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';

  projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'projectCard';
    div.id = project.project_id;
    div.style.backgroundImage = `url(${project.card_image || ''})`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';

    div.innerHTML = `
      <h3>${project.project_name}</h3>
      <p>${project.short_description || ''}</p>
    `;

    div.addEventListener('click', () => {
      populateSpotlight(project);
    });

    projectList.appendChild(div);
  });
}

function populateSpotlight(project) {
  const spotlight = document.getElementById('projectSpotlight');
  spotlight.style.backgroundImage = `url(${project.spotlight_image || ''})`;
  spotlight.style.backgroundSize = 'cover';
  spotlight.style.backgroundPosition = 'center';

  const spotlightTitles = document.getElementById('spotlightTitles');
  spotlightTitles.innerHTML = `
    <h2>${project.project_name}</h2>
    <p>${project.long_description || 'No detailed description available.'}</p>
    ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">Visit Project</a>` : ''}
  `;
}

export function setupScrolling() {
  const projectList = document.getElementById('projectList');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  arrowLeft.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      projectList.scrollBy({ left: -200, behavior: 'smooth' });
    } else {
      projectList.scrollBy({ top: -200, behavior: 'smooth' });
    }
  });

  arrowRight.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      projectList.scrollBy({ left: 200, behavior: 'smooth' });
    } else {
      projectList.scrollBy({ top: 200, behavior: 'smooth' });
    }
  });
}
