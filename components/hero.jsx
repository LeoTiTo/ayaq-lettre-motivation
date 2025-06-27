// components/hero.jsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/hero-ayaq.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative z-10 p-8 rounded-lg text-white max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Candidature – Assistant Développement Web</h1>
        <p className="text-lg">
          Passionné par l'outdoor et le web, je veux mettre mon énergie et mes compétences au service d'AYAQ.
        </p>
      </div>
    </section>
  );
} 
  