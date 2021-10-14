const projects = [
  {
    name: "dev.finance$",
    image: "./../assets/projects/devfinances.png",
    deployLink: "https://thirsty-khorana-febd08.netlify.app",
    githubLink: "https://github.com/jfmacedo91/dev.finances",
    description: "Projeto desenvolvido como forma de estudo apenas com HTML, CSS e JS",
    techs: ["HTML, CSS e JS"]
  },
  {
    name: "Dropbox UI Clone",
    image: "./../assets/projects/dropbox.png",
    deployLink: "https://jfmacedo-clone-dropbox.netlify.app/",
    githubLink: "https://github.com/jfmacedo91/ui-clone-dropbox",
    description: "Projeto desenvolvido como forma de estudo com React, Typescript e Styled Components",
    techs: ["React", "Styled Components"]
  },
  {
    name: "LikedIn UI Clone",
    image: "./../assets/projects/linkedin.png",
    deployLink: "https://jfmacedo-clone-linkedin.netlify.app/",
    githubLink: "https://github.com/jfmacedo91/ui-clone-linkedin",
    description: "Projeto desenvolvido como forma de estudo com React, Typescript e Styled Components",
    techs: ["React", "Styled Components"]
  },
  {
    name: "ig.news",
    image: "./../assets/projects/ignews.png",
    deployLink: "https://ignews-murex-seven.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/ignews",
    description: "Projeto desenvolvido com React, Next.js, Prismic CMS e Fauna DB",
    techs: ["React", "Next"]
  },
  {
    name: "Aluraquiz",
    image: "./../assets/projects/aluraquiz.png",
    deployLink: "https://aluraquiz-seven.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/aluraquiz",
    description: "Projeto desenvolvido com React, Next.js e Styled Components",
    techs: ["React", "Next", "Styled Components"]
  },
  {
    name: "Clocker",
    image: "./../assets/projects/clocker.png",
    deployLink: "https://clocker-jfmacedo91.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/clocker",
    description: "Projeto desenvolvido com React, Chakra UI e Firebase",
    techs: ["React"]
  },
  {
    name: "move.it",
    image: "./../assets/projects/moveit.png",
    deployLink: "https://jfmoveit.vercel.app",
    githubLink: "https://github.com/jfmacedo91/moveit",
    description: "Projeto desenvolvido com React, Next.js e Typescript",
    techs: ["React", "Next"]
  }
]

const renderProjects = {
  all() {
    this.innerHTML(projects)
  },
  filtered(param) {
    const filteredProjects = projects.filter(project => {
      return project.techs.includes(param)
    })
  
    this.innerHTML(filteredProjects)
  },
  innerHTML(array) {
    const projectsDom = document.querySelector(".projects")
    projectsDom.innerHTML = ""
  
    array.map(project => {
      const html = `
        <div class="project">
          <p>${ project.name }</p>
          <img src=${ project.image } />
          <div class="buttons">
            <a href=${ project.deployLink } target="_blank">depoy</a>
            <a href=${ project.githubLink } target="_blank">github</a>
          </div>
          <span class="tooltip">${ project.description }</span>
        </div>
      `
  
      projectsDom.innerHTML += html
    })
  }
}

renderProjects.all()