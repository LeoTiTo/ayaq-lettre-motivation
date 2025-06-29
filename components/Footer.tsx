import Link from "next/link";
import { ArrowUpCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 text-center bg-black text-white">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Partie personnelle */}
            <div className="text-sm opacity-80 md:mt-0">
              <p>Huu Loc TRAN | Développeur web fullstack</p>
              
              <div className="flex justify-center gap-4">
                <Link href="https://www.linkedin.com/in/loctito/" target="_blank" className="underline"
                     rel="noopener noreferrer">LinkedIn</Link>
                <a href="https://github.com/LeoTiTo" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            {/* Barre de séparation responsive */}
            <div className="block md:hidden w-60 border-t border-white mx-auto"></div>
            <div className="hidden md:block h-16 border-l border-white mx-6"></div>
            {/* Partie site et stack */}
            <div className="text-sm opacity-80 md:mt-0">
              <p>
                Merci de votre visite ! Ce site a été codé avec <span className="heart-beat text-xl align-middle">❤️</span> par HLT.
              </p>
              <p>Design inspiré de <a href="https://ayaq.com/" className="underline">ayaq.com</a> — propulsé par Next.js &amp; Netlify</p>
            </div>
          </div>
        </footer>
      );
} 