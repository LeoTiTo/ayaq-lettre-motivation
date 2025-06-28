'use client'
import { useState, useEffect } from "react"

const leftMenu = [
  { label: "Feedbacks", href: "#ref" },
  { label: "Projets", href: "#projects" }
];

const rightMenu = [
  { label: "Dialoguez avec moi ?", href: "#dialogue" },
  { label: "Mes compétences", href: "#skills" }
];


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
      <nav
        className={`
            group
            fixed top-0 left-0 w-full z-50 
            border-b border-gray-500 shadow-sm 
            flex items-center justify-between
            transition-colors duration-200 
            backdrop-blur-md
            h-[48px] md:h-[56px]
            ${scrolled 
            ? 'bg-white'            // scrolled → fond blanc permanent 
            : 'bg-[#c4c6c8]/10 hover:bg-white' // non-scrolled → fond flou+hover
            }
        `}
      >
        {/* Conteneur gauche : drapeau + burger + rightMenu */}
        <div className="flex items-center gap-2 flex-3 min-w-0">
          {/* Bande drapeau français */}
          <div className="flex flex-col overflow-hidden w-1.5 h-12 md:h-14 ">
            <div className="flex-1 bg-blue-600 " />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-red-600 " />
          </div>
          {/* Bouton burger visible uniquement en mobile */}
          <button
            className="block md:hidden text-2xl font-bold"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {/* Liens rightMenu (à droit du logo en desktop) */}
          <div className="gap-8 md:flex hidden ml-40">
            {rightMenu.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`
                  nav-link no-underline           
                  relative uppercase text-sm font-semibold 
                  px-4 py-2 transition-colors duration-300
                  ${scrolled 
                    ? 'text-black'                   // scrolled → texte noir 
                    : 'text-white group-hover:text-black' // non-scrolled → blanc+hover
                  }
                `}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className="
                    underline absolute left-0 -bottom-1 w-full h-0.5 bg-black
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* Logo centré en absolute */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#hero" className="block relative h-6 w-auto">
            {/* logo blanc par défaut, caché au hover */}
            <img
              src="https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=300"
              alt="AYAQ Logo"
              className={`
                h-6 w-auto transition-opacity duration-200
                ${scrolled 
                  ? 'opacity-0' 
                  : 'opacity-100 group-hover:opacity-0'
                }
              `}
            />
            {/* logo noir → opaque au hover */}
            <img
              src="https://ayaq.com/cdn/shop/files/logo_ayaq_black_RGB-sansmarge-300px.png?v=1679909665&width=300"
              alt="AYAQ Logo"
              className={`
                h-6 w-auto absolute inset-0 m-auto transition-opacity duration-200
                ${scrolled 
                  ? 'opacity-100' 
                  : 'opacity-0 group-hover:opacity-100'
                }
              `}
            />
          </a>
        </div>

        {/* Conteneur droit : leftMenu (à droite du logo en desktop) */}
        <div className="flex items-center gap-8 flex-1 justify-end min-w-0 md:flex hidden mr-85">
          {leftMenu.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`
                nav-link no-underline           
                relative uppercase text-sm font-semibold 
                px-4 py-2 transition-colors duration-300
                ${scrolled 
                  ? 'text-black'                   // scrolled → texte noir 
                  : 'text-white group-hover:text-black' // non-scrolled → blanc+hover
                }
              `}
            >
              <span className="relative z-10">{label}</span>
              <span
                className="
                  underline absolute left-0 -bottom-1 w-full h-0.5 bg-black
                "
              />
            </a>
          ))}
        </div>

        {/* Menu mobile 90%screen avec effet slide */}
        <div
            className={`
              fixed top-12 left-0 w-full h-[calc(100vh-45px)] z-[999] md:hidden flex transition-transform duration-300
              ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
            style={{ willChange: 'transform' }}
          >
            <div
              className="h-full bg-white flex transition-transform duration-300"
              style={{ width: '90vw' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col items-start justify-start gap-6 w-full pt-[5.6rem]">
                {[...rightMenu, ...leftMenu].map(({ label, href }, i) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      flex items-center justify-between w-full
                      px-[2rem] py-[1.1rem] text-[1.8rem] no-underline
                      transition-transform duration-500
                      ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
                    `}
                    style={{ transitionDelay: `${i * 80 + 100}ms` }}
                  >
                    <span className="whitespace-nowrap overflow-hidden text-lg font-semibold text-ellipsis">{label}</span>
                    <span className="text-xxl">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Backdrop flou cliquable (30%) */}
            <div
              className="flex-1 backdrop-blur-lg bg-black/30"
              onClick={() => setMenuOpen(false)}
            />
        </div>
      </nav>
    )
  }
  