'use client'
import { useState } from 'react'
import Title from "./title"


// 1) Les questions que tu veux proposer
const questions = [
  "Qui es-tu ?",
  "Qu'est-ce que tu fais dans la vie ?",
  "Quelles sont tes compétences clés ?",
  "Qu'attends-tu de cette alternance ?",
  "Pourquoi toi plutôt qu’un autre ?"
]

// 2) Les réponses du bot, même index que questions
const reponses = [
  {
    name: "Loc, Développeur web fullstack",
    text: "Je m'appelle Loc, je suis développeur web fullstack en alternance chez Ayaq."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Je conçois et code des sites e-commerce (Shopify), des scripts d'automatisation et j'améliore le SEO."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Je maîtrise HTML, CSS/Tailwind, JavaScript/React, Shopify Liquid, et j’ai un goût pour l’automatisation via Apps Script."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Une envie de contribuer activement, je ne recherche pas seulement une formation sur le terrain, mais aussi un cadre où je pourrai apporter de la valeur à l’équipe, m’impliquer dans les projets, et progresser en apprenant des professionnels expérimentés."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Je peux apporter à AYAQ un véritable appui sur le développement front-end et des bases solides côté back-end. Ma sensibilité aux enjeux RSE et à la qualité du code s’aligne naturellement avec vos valeurs. Enfin, je m’adapte vite, je travaille bien en équipe et je suis motivé à m’investir concrètement dans vos projets."
  },
]

export default function Chatbot() {
  // historique des échanges
  const [messages, setMessages] = useState([
    { from: 'bot',name: "Loc, Développeur web fullstack", text: "Bonjour ! Pose-moi une question en cliquant sur un bouton." }
  ])
  // pour désactiver les questions déjà posées
  const [asked, setAsked] = useState([])

  const handleAsk = idx => {
    // 1) ajouter la question utilisateur
    const q = questions[idx]
    setMessages(m => [...m, { from: 'user', text: q }])
    setAsked(a => [...a, idx])

    // 2) ajouter la réponse
    const bot = reponses[idx]
    setTimeout(() => {
      setMessages(m => [
        ...m,
        { from: 'bot', text: bot.text, name: bot.name }
      ])
    }, 300)
  }

  return (
    <section id="dialogue">
      <div className="flex flex-col h-full border overflow-hidden rounded-sm">
      <h2 className="py-8 text-xl lg:text-2xl font-bold text-center uppercase">
        Dialoguez avec moi ?
      </h2>
        {/* fenêtre de chat */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-xs px-4 py-2 
                  ${m.from === 'user'
                    ? 'bg-white text-black border'
                    : 'bg-white text-gray-800 border'}
                `}
              >
                {m.from === 'bot' && (
                  <p className="text-sm font-semibold mb-1">{m.name}</p>
                )}
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* zone des boutons de questions */}
        <div className="p-4 bg-white border-t grid grid-cols-1 sm:grid-cols-2 gap-2">
          {questions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(idx)}
              disabled={asked.includes(idx)}
              className={`
                  px-3 py-2 text-left border  
                  transition-all ease-in-out duration-200
                  ${asked.includes(idx)
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : `
                      bg-white text-black 
                      hover:shadow-lg hover:shadow-black-500/50 
                      hover:ring-2 hover:ring-black-500/50
                  `
                  }
              `}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
