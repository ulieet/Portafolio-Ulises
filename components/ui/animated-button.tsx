"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface AnimatedButtonProps {
  children: React.ReactNode
  icon?: LucideIcon
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  onClick?: () => void
  href?: string
}

export function AnimatedButton({
  children,
  icon: Icon,
  variant = "default",
  size = "default",
  className,
  onClick,
  href,
}: AnimatedButtonProps) {
  const buttonContent = (
    <>
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </>
  )

  const buttonClasses = cn(
    "transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-full px-8 py-3",
    variant === "default" && "hover:shadow-blue-500/25",
    className,
  )

  if (href) {
    return (
      <Button asChild variant={variant} size={size} className={buttonClasses}>
        <a href={href}>{buttonContent}</a>
      </Button>
    )
  }

  return (
    <Button variant={variant} size={size} className={buttonClasses} onClick={onClick}>
      {buttonContent}
    </Button>
  )
}
