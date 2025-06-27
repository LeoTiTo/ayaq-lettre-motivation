import Link from "next/link";
export default function Footer() {
    return (
        <footer className="py-8 text-center bg-black text-white">
          <p>Huu Loc TRAN | Développeur web fullstack</p>
          <p>
            <a href="mailto:lochuutran12@gmail.com" className="underline">lochuutran12@gmail.com</a>
          </p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="https://www.linkedin.com/in/loctito/" target="_blank" className="underline"
                 rel="noopener noreferrer">LinkedIn</Link>
            <a href="https://github.com/LeoTiTo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </footer>
      );
} 