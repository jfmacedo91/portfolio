const projects = [
  {
    name: "Bikcraft",
    image: "./../assets/projects/bikcraft.png",
    deployLink: "https://jfmacedo91.github.io/bikcraft/",
    githubLink: "https://github.com/jfmacedo91/bikcraft",
    description: "O #boracodar é um projeto com varios desafios para praticar as abiolidades em frontend, com um desafio por semana.",
    techs: ["HTML, CSS e JS"]
  },
  {
    name: "#boraCodar",
    image: "./../assets/projects/boracodar.png",
    deployLink: "https://jfmacedo91.github.io/boracodar/",
    githubLink: "https://github.com/jfmacedo91/boracodar",
    description: "O Bikcraft é um ecommerce de bicicletas elétricas feitas sob demanda, com modelos diferentes para dar opções para os clientes.",
    techs: ["HTML, CSS e JS"]
  },
  {
    name: "dev.finance$",
    image: "./../assets/projects/devfinances.png",
    deployLink: "https://thirsty-khorana-febd08.netlify.app",
    githubLink: "https://github.com/jfmacedo91/dev.finances",
    description: "O dev.finances é uma aplicação de controle de gastos desenvolvido somente com HTML, CSS e JS como forma de estudo das bases do desenvolvimento web com Javascript.",
    techs: ["HTML, CSS e JS"]
  },
  {
    name: "Let Me Ask",
    image: "./../assets/projects/letmeask.png",
    deployLink: "https://letmeask-c5fd1.web.app/",
    githubLink: "https://github.com/jfmacedo91/letmeask",
    description: "Let Me Ask é uma plataforma para que criadores de conteúdo possam organizar as perguntas de sua audiência.",
    techs: ["React", "SASS", "Typescript"]
  },
  {
    name: "ig.news",
    image: "./../assets/projects/ignews.png",
    deployLink: "https://ignews-murex-seven.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/ignews",
    description: "O projeto Igews é um blog que foi desenvolvido com React, Next.js, Prismic CMS e Fauna DB durante o curso Ignite da Rocketseat com o intuito de práticar a utilização do OAuth do Github e a API de pagamentos do Stripe.",
    techs: ["React", "Next"]
  },
  {
    name: "Aluraquiz",
    image: "./../assets/projects/aluraquiz.png",
    deployLink: "https://aluraquiz-seven.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/aluraquiz",
    description: "O Aluraquiz é uma aplicação de perguntas e respostas que foi desenvolvido com React, Next.js e Styled Components durante a imersão React da Alura",
    techs: ["React", "Next", "Styled Components"]
  },
  {
    name: "Clocker",
    image: "./../assets/projects/clocker.png",
    deployLink: "https://clocker-jfmacedo91.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/clocker",
    description: "O Clocker é uma aplicação de agendamento de horários para pessoas que atendem com hora marcada desenvolvido com React, Chakra UI e Firebase",
    techs: ["React"]
  },
  {
    name: "move.it",
    image: "./../assets/projects/moveit.png",
    deployLink: "https://jfmoveit.vercel.app",
    githubLink: "https://github.com/jfmacedo91/moveit",
    description: "O move.it é uma aplicação que lembra quem passa muito tempo em frete ao computador a se exercitar que foi desenvolvido com React, Next.js e Typescript",
    techs: ["React", "Next"]
  },
  {
    name: "quiz-game",
    image: "./../assets/projects/quizgame.png",
    deployLink: "https://quiz-game-orpin.vercel.app/",
    githubLink: "https://github.com/jfmacedo91/quiz-game",
    description: "O quiz-game é uma aplicação de perguntas e respostar que contabiliza os acertos e exibe um relatório com o resultados das perguntas e exibe a resposta respondida e a resposta correta.",
    techs: ["React", "Next"]
  }
]

const renderProjects = {
  all() {
    activeButton("Todos")
    this.innerHTML(projects)
  },
  filtered(param) {
    activeButton(param)
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
            <a href=${ project.deployLink } target="_blank">
              <i class="fas fa-eye"></i> Visitar
            </a>
            <a href=${ project.githubLink } target="_blank" class="repo">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
          <span class="tooltip">${ project.description }</span>
        </div>
      `
  
      projectsDom.innerHTML += html
    })
  }
}

function activeButton(param) {
  const techsButtons = document.querySelectorAll("#projects button")
  return techsButtons.forEach(button => {
    button.classList.remove("active")
    if(button.innerHTML.includes(param)) {
      button.classList.add("active")
    }
  })
}

renderProjects.all()