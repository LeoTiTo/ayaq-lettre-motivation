// components/TypingIndicator.tsx
'use client'
export default function TypingIndicator() {
    return (
        <div
        className="flex items-center space-x-1"
        role="status"
        aria-label="Le bot est en train d'écrire"
        >
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce motion-safe:duration-500 [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce motion-safe:duration-500 [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce motion-safe:duration-500" />
        </div>
    )
  }
  