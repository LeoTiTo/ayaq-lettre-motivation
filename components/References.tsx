import Title from "./title";

const references = [
  {
    name: "Anonyme, Développeur web fullstack",
    text: "Continue de travailler comme tu le fais. Tu es une personne consciencieuse et curieuse. Forme toi un maximum et trouve absolument une alternance, pas d'expérience dans le dev c'est pas de boulot !",
  },
  {
    name: "Antoine, Chef de design",
    text: "C'était super de travailler avec toi Loc ! Toujours force de proposition, toujours du bon boulot de fait, et une bonne humeur constante, tu vas gérer pour la suite !",
  },
  {
    name: "Ghita, Business Developer",
    text: "J'ai été très contente de te rencontrer pendant ton stage chez Addeus, même si nos échanges étaient limités parce que j'étais dans l'équipe Sales. J'ai souvent pensé à ton travail et à celui de l'équipe, notamment sur la partie développement. Je te souhaite de t'épanouir encore plus dans ton métier et de prendre beaucoup de plaisir à créer de nombreux projets passionnants.",
  },
];

export default function References() {
  return (
    <section className="py-16 bg-white">
      <Title title="Retour d'expérience de mon dernier stage"/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {references.map((ref) => (
          <div key={ref.name} className="p-6 border shadow">
            <p className="italic mb-2">&quot;{ref.text}&quot;</p>
            <p className="font-semibold text-right">– {ref.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 