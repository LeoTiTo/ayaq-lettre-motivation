import Card from "./card";
import Title from "./title";

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-10 min-h-screen pt-20"
    >
    <Title title="Mes compétences" symbol="" />
    <p className="mt-4 text-sm text-neutral-700 italic text-center">
      N&apos;hésitez pas à cliquer sur les cartes pour explorer mes compétences, les technologies que j&apos;utilise, et en savoir plus sur mon parcours technique.
    </p>
    <div
      className="
      flex gap-4 p-4 overflow-x-auto overflow-y-hidden   /* Mobile : scroll horizontal */
      sm:grid sm:grid-cols-2                 /* Dès sm : grille 2 cols */
      md:grid-cols-3 lg:grid-cols-5     /* +1 col sur md/lg */
      sm:gap-6 sm:overflow-x-hidden          /* Dès sm : plus d'espace, plus de scroll */
    "
    >
        <Card
            title="Next.js"
            image="https://svgl.app/library/nextjs_icon_dark.svg"
            description="Utilisé sur quelques projets, Next s&apos;intègre parfaitement avec React et permet un déploiement rapide avec Netlify, comme ici"
            typeOfLangage="Framework"
          />
        <Card
          title="HTML"
          image="https://svgl.app/library/html5.svg"
          description="Langage de base du développement web. Utilisé pour tous mes projets web."
          typeOfLangage="Front"
        />
        <Card
          title="Javascript"
          image="https://svgl.app/library/javascript.svg"
          description="J&apos;utilise JS depuis 2 ans environ."
          typeOfLangage="Front/ Back"
        />
        <Card
          title="Vue"
          image="https://svgl.app/library/vue.svg"
          description="J&apos;ai appris à l&apos;utiliser lors de mon stage chez Addeus."
          typeOfLangage="Framework"
        />
        <Card
          title="TypeScript"
          image="https://svgl.app/library/typescript.svg"
          description="TypeScript ajoute le typage statique à JavaScript, renforçant la qualité et la maintenabilité du code. Je l&apos;ai appris lors de mon stage chez Addeus."
          typeOfLangage="Front/ Back"
        />
        <Card
          title="SCSS"
          image="https://svgl.app/library/sass.svg"
          description="Je m&apos;habitue à utiliser des fichiers SCSS au lieu de CSS pendant mon stage chez Addeus."
          typeOfLangage="Front"
        />
        <Card
          title="Tailwind CSS"
          image="https://svgl.app/library/tailwindcss.svg"
          description="Utilisé sur quelques projets, tailwind est pratique pour réaliser rapidement une mise en forme sans sortir de son fichier."
          typeOfLangage="Front"
        />
        <Card
          title="React"
          image="https://svgl.app/library/react_dark.svg"
          description="J&apos;utilise React quasiment systématiquement pour développer mes projets front."
          typeOfLangage="Front"
        />
        <Card
          title="Node.js"
          image="https://svgl.app/library/nodejs.svg"
          description="J&apos;utilise principalement Node.js pour développer mes projets côté back."
          typeOfLangage="Back"
        />
        <Card
          title="Express"
          image="https://svgl.app/library/expressjs.svg"
          description="C&apos;est un framework minimaliste pour Node.js que j&apos;utilise lorsque je développe un projet côté back."
          typeOfLangage="Back"
        />
        <Card
          title="Shopify"
          image="https://svgl.app/library/shopify.svg"
          description="J&apos;ai eu l&apos;occasion d&apos;utiliser Shopify lors de mon stage chez NekoTea, principalement pour la conception et l&apos;adaptation de l&apos;interface utilisateur afin d&apos;améliorer l&apos;expérience client."
          typeOfLangage="Front"
        />
        <Card
          title="PHP"
          image="https://svgl.app/library/php.svg"
          description="Utilisé pour contruire mon projet de l&apos;application de QCM sur GitHub, PHP est très pratique pour le script côté serveur pour créer des pages web dynamiques."
          typeOfLangage="Back"
        />
        <Card
          title="PostgresQL"
          image="https://svgl.app/library/postgresql.svg"
          description="Postgres est le SGBDR que j&apos;ai utilisé pour l&apos;ensemble de mes projets jusqu&apos;à maintenant."
          typeOfLangage="Back"
        />
        <Card
          title="Github"
          image="https://svgl.app/library/github_light.svg"
          description="Github est le seul gestionnaire de git que j&apos;utilise."
          typeOfLangage="Git Managment"
        />
        <Card
          title="Python (débutant)"
          image="https://svgl.app/library/python.svg"
          description="Très attiré par l&apos;IA, je commence à apprendre cette technologie."
          typeOfLangage="Back"
        />
        <Card
          title="Vite"
          image="https://svgl.app/library/vitejs.svg"
          description="Je développe principalement mes projets front avec Vite."
          typeOfLangage="Autres"
        />
        <Card
          title="Firebase"
          image="https://svgl.app/library/firebase.svg"
          description="Firebase est une plateforme Google offrant authentification, base de données temps réel et hébergement. Je l&apos;ai utilisée pour gérer les utilisateurs et stocker des données sur mes projets."
          typeOfLangage="Back"
        />
      </div>
    </section>
  );
};

export default Skills;