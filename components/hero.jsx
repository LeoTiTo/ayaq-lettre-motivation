// components/hero.jsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-cover bg-center relative scroll-mt-16 min-h-screen pt-20"
      style={{ backgroundImage: "url('/images/hero-ayaq.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm hover:backdrop-blur-none active:backdrop-blur-none transition-all duration-300" />
      
      <div className="relative z-10 p-8 rounded-lg text-white max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 uppercase">
          Candidature – Assistant Développement Web
        </h1>
        <p className="text-lg mb-6">
          Passionné par la callisthénie et le web, je veux mettre mon énergie et mes compétences au service d&apos;AYAQ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Bouton vers section dialogue */}
          <a
            href="#dialogue"
            className="relative no-underline overflow-hidden px-6 py-3 font-semibold bg-white group rounded-md cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-black scale-0 group-hover:scale-150 group-active:scale-150 transition-transform duration-500"></span>
            <span className="relative z-10 text-black group-hover:text-white group-active:text-white transition-colors duration-500">Dialoguez avec moi</span>
          </a>

          {/* Bouton de téléchargement du CV */}
          <a
            href="/TRAN_HuuLoc_CV_Alternance_DevWebFullStack_Sept2025_fr.pdf"
            download
            className="relative no-underline overflow-hidden px-6 py-3 font-semibold bg-white group rounded-md cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-black scale-0 group-hover:scale-150 group-active:scale-150 transition-transform duration-500"></span>
            <span className="relative z-10 text-black group-hover:text-white group-active:text-white transition-colors duration-500">Télécharger mon CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
