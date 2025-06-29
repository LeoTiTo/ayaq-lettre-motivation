import Title from "./title";

const references = [
  {
    name: "Jolie, Maquilleuse professionnelle chez Bâton Rouge Paris",
    text: "Toujours volontaire, toujours souriant ! J'ai apprécié ta réactivité et ta capacité à transformer un besoin en prototype fonctionnel en très peu de temps. Bravo pour ton professionnalisme.",
  },
  {
    name: "Anonyme, Développeur web fullstack chez Addeus",
    text: "Continue de travailler comme tu le fais. Tu es une personne consciencieuse et curieuse. Forme toi un maximum et trouve absolument une alternance, pas d'expérience dans le dev c'est pas de boulot !",
  },
  {
    name: "Anonyme, Responsable chez NekoTea",
    text: "Tu as montré une vraie capacité d'adaptation dès tes premières semaines. Tu sais écouter, apprendre vite et proposer des solutions pertinentes. Ta rigueur et ta curiosité font de toi un atout pour n'importe quelle équipe",
  },
  {
    name: "Antoine, Chef de design chez Addeus",
    text: "C'était super de travailler avec toi Loc ! Toujours force de proposition, toujours du bon boulot de fait, et une bonne humeur constante, tu vas gérer pour la suite !",
  },
  {
    name: "Ghita, Business Developer chez Addeus",
    text: "J'ai été très contente de te rencontrer pendant ton stage chez Addeus, même si nos échanges étaient limités parce que j'étais dans l'équipe Sales. J'ai souvent pensé à ton travail et à celui de l'équipe, notamment sur la partie développement. Je te souhaite de t'épanouir encore plus dans ton métier et de prendre beaucoup de plaisir à créer de nombreux projets passionnants.",
  },
];

export default function References() {
  return (
    <section id= "ref" className="scroll-mt-10 pt-20 min-h-screen">
      <Title title="Ma collaboration, vu par mes collègues" symbol=""/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {references.map((ref) => (
          <div key={ref.name} className="p-6 border shadow-lg card-ref-hover cursor-pointer hover:border-black-500 hover:shadow-[10px_10px_30px_3px_black]">
            <p className="italic mb-2">&quot;{ref.text}&quot;</p>
            <p className="font-semibold text-right">– {ref.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 