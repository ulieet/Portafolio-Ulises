"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollIndicator() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#habilidades")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full hover:bg-gray-800/50"
    >
      <ChevronDown className="text-gray-400 h-8 w-8" />
    </Button>
  )
}
