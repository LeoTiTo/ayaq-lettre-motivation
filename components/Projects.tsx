import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Title from "./title";
const projects = [
  {
    id: 1,
    title: "DuDu",
    desc: "Application de don mobile accessible à tous",
    image: "/projects/dudu.png",
    tags: ["https://svgl.app/library/react_dark.svg","https://svgl.app/library/expo.svg","https://svgl.app/library/firebase.svg","https://svgl.app/library/nodejs.svg"],
    demoUrl: "https://github.com/LeoTiTo/DuduApp",
    githubUrl: "https://github.com/LeoTiTo/DuduApp",
  },
  {
    id: 2,
    title: "LyMakeArt_Portfolio",
    desc: "Portfolio web moderne et responsive mettant en valeur les services et créations d'une maquilleuse",
    image: "/projects/jolieportfolio.png",
    tags: ["https://svgl.app/library/html5.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg","https://svgl.app/library/javascript.svg"],
    demoUrl: "https://leotito.github.io/LyMakeArt_Portfolio/",
    githubUrl: "https://github.com/LeoTiTo/LyMakeArt_Portfolio",
  },
  {
    id: 3,
    title: "PowerHome",
    desc: "Application Android de gestion d'habitat collectif",
    image: "/projects/powerhome.png",
    tags: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg","https://svgl.app/library/android.svg","https://svgl.app/library/java.svg","https://svgl.app/library/firebase.svg"],
    demoUrl: "https://github.com/LeoTiTo/PowerHome",
    githubUrl: "https://github.com/LeoTiTo/PowerHome",
  },
  {
    id: 4,
    title: "Météoto",
    desc: "Site de prévisions météorologiques en temps réel",
    image: "/projects/meteoto.png",
    tags: ["https://svgl.app/library/html5.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg","https://svgl.app/library/javascript.svg"],
    demoUrl: "https://github.com/LeoTiTo/Meteo",
    githubUrl: "https://github.com/LeoTiTo/Meteo",
  },
  {
    id: 5,
    title: "QuickQuiz",
    desc: "Application de quiz rapide et interactive pour tester ses connaissances en temps réel",
    image: "/projects/quickquiz.png",
    tags: ["https://svgl.app/library/html5.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg","https://svgl.app/library/javascript.svg"],
    demoUrl: "https://leotito.github.io/QuickQuiz/",
    githubUrl: "https://github.com/LeoTiTo/QuickQuiz",
  },
  {
    id: 6,
    title: "MySQLQuizApp",
    desc: "Application de Questionnaire à Choix Multiples développée en PHP avec XAMPP, utilisant une base de données MySQL pour stocker les questions et les réponses",
    image: "/projects/qcm.png",
    tags: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"],
    demoUrl: "https://github.com/LeoTiTo/QCM_en_PHP",
    githubUrl: "https://github.com/LeoTiTo/QCM_en_PHP",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="md:scroll-mt-5 pt-24 px-4 relative pb-12 ">
      <div className="container mx-auto max-w-7xl">
        {/* <h2 className="text-2xl lg:text-4xl font-bold mb-4 uppercase text-center">
          Mes <span className="text-primary"> Projets</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Projets
        </p> */}
        <Title title="Mes projets" symbol="" />
        <p className="text-m text-neutral-700 italic text-center mb-6">
          Cliquez sur l&apos;icone du petit chat pour découvrir mes projets et les technologies que j&apos;utilise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,key) => (
              <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, i) => (
                        tag.endsWith(".svg") ? (
                          <span
                            key={i}
                            className="inline-flex items-center justify-center w-10 h-10 p-1 "
                          >
                            <img src={tag} alt="tech-logo" className="w-full h-full object-contain" />
                          </span>
                        ) : (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium border rounded-full bg-white text-gray-700 shadow-sm"
                          >
                            {tag}
                          </span>
                        )
                      ))}
                    </div>


                    <h3 className="text-xl font-semibold mb-1">  {project.title} </h3>
                    <p className="text-muted-foreground text-sm mb-4"> {project.desc} </p>
                    <div className="flex jutify-between items-center">
                      <div className="flex space-x-3">
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20}/>
                        </a>

                        <a 
                          href={project.githubUrl}
                          target="_blank" 
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20}/>
                        </a>
                      </div>
                    </div>
                </div>
              </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="w-fit text-xl flex items-center mx-auto gap-2 no-underline" target="_blank" href="https://github.com/LeoTiTo">
            Visiter mon GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
} 