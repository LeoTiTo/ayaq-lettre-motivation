const projects = [
  {
    title: "Génération de contenu IA",
    desc: "Intégration d'API IA pour créer des fiches produits et articles automatiquement.",
  },
  {
    title: "Automatisation newsletters",
    desc: "Envoi de newsletters personnalisées selon le profil client.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Projets & Innovations</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="p-6 bg-white rounded-sm shadow">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 