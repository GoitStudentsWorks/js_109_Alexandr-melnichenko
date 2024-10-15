export const projects = [

    {
        imgMobile: './img/wallet-webservice-mobil.webp',                
        imgMobileRetina: './img/wallet-webservice-mobil-@2x.webp',       
        imgTablet: './img/wallet-webservice-tablet.webp',                
        imgTabletRetina: './img/wallet-webservice-tablet-@2x.webp',       
        imgDesktop: './img/wallet-webservice-desktop.webp',               
        imgDesktopRetina: './img/wallet-webservice-desktop-@2x.webp',  
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'Wallet webservice ',
        link: '#'
    },

    {
        imgMobile: './img/organic-mobi.webp',                
        imgMobileRetina: './img/organic-mobi-@2x.webp',       
        imgTablet: './img/organic-tablet.webp',                
        imgTabletRetina: './img/organic-tablet-@2x.webp',       
        imgDesktop: './img/organic-desktop.webp',               
        imgDesktopRetina: './img/organic-desktop-@2x.webp', 
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'Green harvest webservice',
        link: '#'
    },

    {
        imgMobile: './img/english-mobil.webp',                
        imgMobileRetina: './img/english-mobil-@2x.webp',       
        imgTablet: './img/english-tablet.webp',                
        imgTabletRetina: './img/english-tablet-@2x.webp',       
        imgDesktop: './img/english-desktop.webp',               
        imgDesktopRetina: './img/english-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'English Exellence website',
        link: '#'
    },

    {
        imgMobile: './img/fitness-mobil.webp',                
        imgMobileRetina: './img/fitness-mobil-@2x.webp',       
        imgTablet: './img/fitness-tablet.webp',                
        imgTabletRetina: './img/fitness-tablet-@2x.webp',       
        imgDesktop: './img/fitness-desktop.webp',               
        imgDesktopRetina: './img/fitness-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'power pulse webservice ',
        link: '#'
    },

    {
        imgMobile: './img/energy-flow-mobil.webp',                
        imgMobileRetina: './img/energy-flow-mobil-@2x.webp',       
        imgTablet: './img/energy-flow-tablet.webp',                
        imgTabletRetina: './img/energy-flow-tablet-@2x.webp',       
        imgDesktop: './img/energy-flow-desktop.webp',               
        imgDesktopRetina: './img/energy-flow-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'energy flow webservice ',
        link: '#'
    },

    {
        imgMobile: './img/vishivanka-mobil.webp',                
        imgMobileRetina: './img/vishivanka-mobil-@2x.webp',       
        imgTablet: './img/vishivanka-tablet.webp',                
        imgTabletRetina: './img/vishivanka-tablet-@2x.webp',       
        imgDesktop: './img/vishivanka-desktop.webp',               
        imgDesktopRetina: './img/vishivanka-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'vyshyvanka vibes Landing Page',
        link: '#'
    },

    {
        imgMobile: './img/chego-jewerly-mobil.webp',                
        imgMobileRetina: './img/chego-jewerly-mobil-@2x.webp',       
        imgTablet: './img/chego-jewerly-tablet.webp',                
        imgTabletRetina: './img/chego-jewerly-tablet-@2x.webp',       
        imgDesktop: './img/chego-jewerly-desktop.webp',               
        imgDesktopRetina: './img/chego-jewerly-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'chego jewelry website',
        link: '#'
    },

    {
        imgMobile: './img/mimino-mobil.webp',                
        imgMobileRetina: './img/mimino-mobil-@2x.webp',       
        imgTablet: './img/mimino-tablet.webp',                
        imgTabletRetina: './img/mimino-tablet-@2x.webp',       
        imgDesktop: './img/mimino-desktop.webp',               
        imgDesktopRetina: './img/mimino-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'mimino website',
        link: '#'
    },

    {
        imgMobile: './img/oranges-mobil.webp',                
        imgMobileRetina: './img/oranges-mobil-@2x.webp',       
        imgTablet: './img/oranges-tablet.webp',                
        imgTabletRetina: './img/oranges-tablet-@2x.webp',       
        imgDesktop: './img/oranges-desktop.webp',               
        imgDesktopRetina: './img/oranges-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'fruitbox online store',
        link: '#'
    },

    {
        imgMobile: './img/starlight-mobil.webp',                
        imgMobileRetina: './img/starlight-mobil-@2x.webp',       
        imgTablet: './img/starlight-tablet.webp',                
        imgTabletRetina: './img/starlight-tablet-@2x.webp',       
        imgDesktop: './img/starlight-desktop.webp',               
        imgDesktopRetina: './img/starlight-desktop-@2x.webp',
        technologies: 'React, JavaScript, Node JS, Git',
        title: 'starlight studio landing page',
        link: '#'
    },
    
];

let loadedProjects = 0;
const projectsPerLoad = 3;

function loadProjects() {
    const projectList = document.getElementById('projects-list');
    for (let i = loadedProjects; i < loadedProjects + projectsPerLoad && i < projects.length; i++) {
        const project = projects[i];
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
        <div class="each-project">
        <div class="image-tech">
        <picture>
            <source media="(min-width: 1280px)" 
                    srcset="${project.imgDesktop} 1x, ${project.imgDesktopRetina} 2x">
            <source media="(min-width: 768px) and (max-width: 1279px)" 
                    srcset="${project.imgTablet} 1x, ${project.imgTabletRetina} 2x">
            <source media="(max-width: 767px)" 
                    srcset="${project.imgMobile} 1x, ${project.imgMobileRetina} 2x">
            <img src="${project.imgDesktop}" alt="${project.title}" class="project-image">
        </picture>
                <p class="tech-text">${project.technologies}</p>
                </div>
                <div class="project-info">
                <h3 class="pr-title-text">${project.title}</h3>
                <button class="pr-btn">
                <div class="btn">
                <a href="${project.link}" target="_blank" class="btn-text">Visit</a>
                <svg class="icon-my-projects">
  <use xlink:href="./img/icons.svg#icon-my-projects-arrow"></use>
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
