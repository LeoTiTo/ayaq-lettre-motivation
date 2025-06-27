'use client'
import { useState, useEffect } from "react"

const menu = [
  { label: "Dialoguez avec moi ?", href: "#dialogue" },
  { label: "Mes compétences",       href: "#skills"   },
  { label: "Projets",               href: "#projects" }
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

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
            flex items-center justify-center coh-15 
            transition-colors duration-200 
            backdrop-blur-md
            ${scrolled 
            ? 'bg-white'            // scrolled → fond blanc permanent 
            : 'bg-[#c4c6c8]/10 hover:bg-white' // non-scrolled → fond flou+hover
            }
        `}
      >
        {/* Bande drapeau français */}
        <div className="flex flex-col overflow-hidden w-1.5 h-14">
          <div className="flex-1 bg-blue-600 " />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-red-600 " />
        </div>
  
        {/* Liens centre-gauche */}
        <div className="flex-3 flex justify-center items-center gap-8">
          {menu.map(({ label, href }) => (
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
  
      {/* Logo centré */}
      <div className="flex-1 flex justify-center relative mx-30">
        {/* logo blanc par défaut, caché au hover */}
        <img
          src="https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=100idth=10https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=150mp;widthttps://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=20065&amp;https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=250909665&https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=3001679909665&amp;width=300"
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
          src="https://ayaq.com/cdn/shop/files/logo_ayaq_black_RGB-sansmarge-300px.png?v=1679909665&width=100idth=10https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=150mp;widthttps://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=20065&amp;https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=250909665&https://ayaq.com/cdn/shop/files/logo_ayaq_white_RGB-sansmarge-300px.png?v=1679909665&width=3001679909665&amp;width=300"
          alt="AYAQ Logo"
          className={`
            h-6 w-auto absolute inset-0 m-auto transition-opacity duration-200
            ${scrolled 
              ? 'opacity-100' 
              : 'opacity-0 group-hover:opacity-100'
            }
          `}
        />
      </div>
  
        {/* Icônes à droite */}
        <div className="flex-1 flex justify-start gap-6 items-center text-gray-700 text-xl pl-4 ml-100">
          <span title="Localisation">📍</span>
          <span title="Compte">👤</span>
          <span title="Recherche">🔍</span>
          <span title="Panier">🛒</span>
        </div>
      </nav>
    )
  }
  