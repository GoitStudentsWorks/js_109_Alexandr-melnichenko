export const projects = [

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'Wallet webservice ',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'Green harvest webservice',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'English Exellence website',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'power pulse webservice ',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'energy flow webservice ',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'vyshyvanka vibes Landing Page',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'chego jewelry website',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'mimino website',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'fruitbox online store',
        link: '#'
    },

    {
        img: '',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'starlight studio landing page',
        link: '#'
    },
    
];

let loadedProjects = 0;
const projectsPerLoad = 3;

export function loadProjects() {
    const projectList = document.getElementById('projects-list');
    
    for (let i = loadedProjects; i < loadedProjects + projectsPerLoad && i < projects.length; i++) {
        const project = projects[i];
        
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
        <div class="each-project">
            <img src="${project.img}" alt="${project.title}">
                <p class="tech-text">${project.technologies}</p>
                            <div class="project-info">
                                <h3 class="pr-title-text">${project.title}</h3>
                <button class="pr-btn">
                <div class="btn">
                <a href="${project.link}" target="_blank" class="btn-text">Visit</a>
                <svg class="icon-my-projects">
  <use xlink:href="../img/icons.svg#icon-my-projects-arrow"></use>
</svg>
                </div>
                </button>
            </div>
            </div>
        `;
        
        projectList.appendChild(listItem);
    }
    
    loadedProjects += projectsPerLoad;
    
    if (loadedProjects >= projects.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

document.getElementById('load-more').addEventListener('click', loadProjects);

loadProjects();
