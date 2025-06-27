import Link from "next/link";
export default function Footer() {
    return (
        <footer className="py-8 text-center bg-black text-white">
          <p>Huu Loc TRAN Développeur Web</p>
          <p>
            <a href="mailto:contact@ayaq.com" className="underline">contact@ayaq.com</a>
          </p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="https://www.linkedin.com/" target="_blank" className="decoration-dashed text-primary underline-offset-8"
                 rel="noopener noreferrer">LinkedIn</Link>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </footer>
      );
} 