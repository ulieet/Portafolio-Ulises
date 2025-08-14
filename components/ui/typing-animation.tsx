"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  texts: string[]
  className?: string
}

export function TypingAnimation({ texts, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  return (
    <div className={`h-16 sm:h-20 flex items-center justify-center ${className}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  )
}
