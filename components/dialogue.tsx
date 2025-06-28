'use client'
import { useState } from 'react'
import TypingText from './TypingText'
import TypingIndicator from './TypingIndicator'
import { useRef, useEffect } from 'react'

const questions = [
  "Qui es-tu ?",
  "Qu'est-ce que tu cherches ?",
  "C'est quoi ton parcours jusqu'ici ?",
  "Comment tu t'améliores en développement web ?",
  "Quelles sont tes faiblesses ?",
  "Qu'attends-tu de cette alternance ?",
  "Pourquoi toi plutôt qu'un autre ?",
  "Pourquoi as-tu fait ce site ?"
]

const reponses = [
  {
    name: "Loc, Développeur web fullstack",
    text: "Je suis Huu Loc TRAN, futur étudiant en 3e année de BUT Informatique à l'IUT de Paris - Rives de Seine, prêt à tracer ma voie dans le développement web.\n\nCurieux de nature, j'aime comprendre comment les choses fonctionnent… puis les coder autrement."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Je recherche un programme d'apprentissage à partir du 1er septembre 2025, où je pourrai collaborer avec des équipes passionnées et transformer des idées en interfaces vivantes.\n\n Mon rythme ? 3 jours en entreprise, 2 jours à l'IUT.\n\n Mon moteur ? L'envie d'apprendre, de créer et de faire les choses bien."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Après un bac scientifique, j'ai intégré le BUT Informatique à l'IUT de Paris - Rives de Seine.\n\n Durant mes deux premières années, j'ai acquis des bases solides en développement logiciel, avec un intérêt grandissant pour le développement web.\n\n Mon premier stage chez Addeus m'a permis de consolider mes compétences et et d'approfondir ma motivation à en faire ma spécialité."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Pour progresser en développement web, je multiplie les projets, à la fois personnels et professionnels.\n\n J'ai par exemple travaillé sur un site e-commerce pendant mon stage chez NekoTea, et j'ai aussi développé un portfolio pour une maquilleuse professionnelle.\n\n À travers ces expériences, je touche à tout : design, SEO, front-end, back-end. En parallèle de mes cours, je me forme en autodidacte via des ressources comme YouTube, LearnWeb3 ou W3Schools.\n\n J'essaie d'apprendre un peu chaque jour, en explorant des sujets qui me motivent concrètement."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "L'une de mes premières faiblesses a été de ne pas savoir dire non. Lors de mon premier stage, j'avais tendance à accepter toutes les demandes, ce qui m'a vite submergé. J'ai pris du retard sur mes tâches principales et cela m'a appris l'importance de poser des limites de manière diplomatique.\n\n Depuis, je demande systématiquement aux personnes de formuler leur demande par écrit en précisant les points clés et la deadline, ce qui me permet de mieux prioriser et de rester concentré sur l'essentiel.\n\n Je suis également quelqu'un de très curieux, souvent animé par un enthousiasme débordant. Cette énergie m'a parfois conduit à vouloir partager trop vite toutes mes idées. Avec le temps, j'ai appris à prendre du recul, à filtrer mes propositions, et à structurer ma pensée avant de la présenter.\n\n Grâce au livre Thinking, Fast and Slow de Daniel Kahneman qui m'a d'ailleurs beaucoup aidé à mieux comprendre mes mécanismes de réflexion. Aujourd'hui, j'en applique les principes au quotidien pour prendre des décisions plus réfléchies et adaptées au contexte."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Ce que j'attends de cette alternance, ce n'est pas seulement une formation sur le terrain, mais une vraie collaboration.\n\n J'ai envie de contribuer activement, de m'investir dans les projets de l'équipe d'AYAQ et d'y apporter de la valeur dès que possible.\n\n C'est aussi l'opportunité pour moi de progresser aux côtés de professionnels expérimentés, d'apprendr vos méthodes, votre exigence, et votre sens critique, tout en me rendant utile."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "Je peux apporter à AYAQ un véritable appui sur le développement front-end et des bases solides côté back-end.\n\n Ma sensibilité aux enjeux RSE et à la qualité du code s'aligne naturellement avec vos valeurs.\n\n Enfin, je m'adapte vite, je travaille bien en équipe et je suis motivé à m'investir concrètement dans vos projets."
  },
  {
    name: "Loc, Développeur web fullstack",
    text: "J'ai réalisé ce site pour renforcer ma candidature à cette alternance, en espérant qu'il retiendra votre attention.\n\n C'était aussi un projet plaisir, en découvrant quelques bugs dans la navigation du site AYAQ, j'ai eu envie de le revisiter à ma manière.\n\n C'est donc l'occasion parfaite de vous montrer mes compétences web"
  },
]

export default function Chatbot() {
  // historique des échanges
  const [messages, setMessages] = useState<Array<{
    from: string;
    name?: string;
    text?: string;
    typing?: boolean;
    animated?: boolean;
  }>>([
    { from: 'bot',name: "Loc, Développeur web fullstack", text: "Bonjour ! Pose-moi une question en cliquant sur un bouton." }
  ])
  // pour désactiver les questions déjà posées
  const [asked, setAsked] = useState<number[]>([])
  // const [isTyping, setIsTyping] = useState(false)
  const isBotTyping = messages.some(
    m => m.from === 'bot' && (m.typing || m.animated)
  )
  const chatContainerRef = useRef<HTMLDivElement>(null)
  
  // Scroll automatique à chaque nouveau message
  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth'
        })
      }
    }
    
    // Délai pour laisser le DOM se mettre à jour
    const timeoutId = setTimeout(scrollToBottom, 100)
    return () => clearTimeout(timeoutId)
  }, [messages])
  
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }
  


  const handleAsk = idx => {
    const q = questions[idx]
    const bot = reponses[idx]
  
    // setIsTyping(true)
  
    setMessages(m => [
      ...m,
      { from: 'user', text: q },
      { from: 'bot', name: bot.name, typing: true }
    ])
    setAsked(a => [...a, idx])
  
    setTimeout(() => {
      setMessages(m => {
        const withoutTyping = m.filter(msg => !msg.typing)
        return [
          ...withoutTyping,
          { from: 'bot', name: bot.name, text: bot.text, animated: true }
        ]
      })
    }, 1000)
  }
  
  
  

  return (
    <section id="dialogue" className="scroll-mt-10 pt-20">
      <div className="flex flex-col h-[80vh] border-2 border-black bg-white rounded-sm shadow-lg overflow-hidden">
        <h2 className="py-8 text-xl lg:text-2xl font-bold text-center uppercase">
          Dialoguez avec moi ?
        </h2>
        {/* fenêtre de chat */}
        <div
          ref={chatContainerRef}
          className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          
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
              {m.typing ? (
                <TypingIndicator />
              ) : m.animated ? (
                // <TypingText
                //   text={m.text}
                //   speed={30}
                //   onDone={() => {
                //     setTimeout(() => setIsTyping(false), 300) // léger délai avant de réactiver les boutons
                //   }}
                // />

                <TypingText
                  text={m.text ?? ""}
                  speed={30}
                  onProgress={scrollToBottom}
                  onDone={() => {
                    // Délai pour laisser le DOM se mettre à jour avant de scroller
                    setTimeout(() => {
                      scrollToBottom()
                      setMessages(prev =>
                        prev.map((msg, index) =>
                          index === i ? { ...msg, animated: false } : msg
                        )
                      )
                    }, 50)
                  }}
                />
              ) : (
                <div>
                  {(m.text ?? "").split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
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
              disabled={asked.includes(idx) || isBotTyping}
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
