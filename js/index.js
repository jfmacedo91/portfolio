const projects = [
  {
    name: "dev.finance$",
    deployLink: "https://thirsty-khorana-febd08.netlify.app",
    githubLink: "https://github.com/jfmacedo91/dev.finances",
    description: "Projeto desenvolvido como forma de estudo apenas com HTML, CSS e JS",
    techs: ["HTML, CSS e JS"]
  },
  {
    name: "Dropbox UI Clone",
    deployLink: "https://jfmacedo-clone-dropbox.netlify.app/",
    githubLink: "https://github.com/jfmacedo91/ui-clone-dropbox",
    description: "Projeto desenvolvido como forma de estudo com React, Typescript e Styled Components",
    techs: ["React", "Styled Components"]
  },
  {
    name: "LikedIn UI Clone",
    deployLink: "https://jfmacedo-clone-linkedin.netlify.app/",
    githubLink: "https://github.com/jfmacedo91/ui-clone-linkedin",
    description: "Projeto desenvolvido como forma de estudo com React, Typescript e Styled Components",
    techs: ["React", "Styled Components"]
  },
  {
    name: "ig.news",
    deployLink: "https://ignews-murex-seven.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/ignews",
    description: "Projeto desenvolvido com React, Next.js, Prismic CMS e Fauna DB",
    techs: ["React", "Next"]
  },
  {
    name: "Aluraquiz",
    deployLink: "https://aluraquiz-seven.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/aluraquiz",
    description: "Projeto desenvolvido com React, Next.js e Styled Components",
    techs: ["React", "Next", "Styled Components"]
  },
  {
    name: "Clocker",
    deployLink: "https://clocker-jfmacedo91.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/clocker",
    description: "Projeto desenvolvido com React, Chakra UI e Firebase",
    techs: ["React"]
  },
  {
    name: "move.it",
    deployLink: "https://jfmoveit.vercel.app",
    githubLink: "https://github.com/jfmacedo91/moveit",
    description: "Projeto desenvolvido com React, Next.js e Typescript",
    techs: ["React", "Next"]
  }
]

function innerHTML(array) {
  const projectsDom = document.querySelector(".projects")
  projectsDom.innerHTML = ""

  array.map(project => {
    const html = `
      <div class="project">
        <h3>${ project.name }</h3>
        <a href=${ project.deployLink } target="_blank">depoy</a>
        <a href=${ project.githubLink } target="_blank">github</a>
        <span>${ project.description }</span>
      </div>
    `

    projectsDom.innerHTML += html
  })
}

function renderAllProjects() {
  innerHTML(projects)
}

function renderFilteredProjects(param) {
  const filteredProjects = projects.filter(project => {
    return project.techs.includes(param)
  })

  innerHTML(filteredProjects)
}

renderAllProjects()