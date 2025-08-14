"use client"

import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react"

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

const socialLinks: SocialLink[] = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
]

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Badge
          key={label}
          variant="secondary"
          className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg border-gray-700 cursor-pointer"
        >
          <a href={href} aria-label={label} className="flex items-center">
            <Icon size={20} />
          </a>
        </Badge>
      ))}
    </div>
  )
}
