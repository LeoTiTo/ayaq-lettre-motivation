'use client'

import { useEffect, useState, useRef } from 'react'

type TypingTextProps = {
  text: string
  speed?: number
  onDone?: () => void
  onProgress?: () => void
}

export default function TypingText({ text, speed = 30, onDone, onProgress }: TypingTextProps) {
  const [length, setLength] = useState(0)
  const hasCalledDone = useRef(false)

  useEffect(() => {
    setLength(0)
    hasCalledDone.current = false

    const interval = setInterval(() => {
      setLength(prev => {
        if (prev >= text.length) {
          clearInterval(interval)
          return prev
        }
        if (onProgress) onProgress()
        return prev + 1
      })
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, onProgress])

  useEffect(() => {
    if (length === text.length && onDone && !hasCalledDone.current) {
      hasCalledDone.current = true
      onDone()
    }
  }, [length, text, onDone])

  // Découpe en lignes sur \n pour retour à la ligne visuel
  const displayed = text.slice(0, length).split('\n')

  return (
    <div>
      {displayed.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  )
}
