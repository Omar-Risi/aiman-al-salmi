import type { ReactNode } from "react"

interface LinkButtonProps {
  icon: ReactNode
  text: string
  href: string
}

export function LinkButton({ icon, text, href }: LinkButtonProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 w-full p-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg text-gray-800 text-sm font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-gray-600">{icon}</div>
      <span>{text}</span>
    </a>
  )
}
