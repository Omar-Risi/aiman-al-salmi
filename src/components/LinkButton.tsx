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
      className="flex flex-col items-center gap-2 text-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-2 bg-amber-400 hover:bg-amber-500 transition-colors rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <span className="text-xs font-medium text-center">{text}</span>
    </a>
  )
}
