import { LinkButton } from "./LinkButton"
import { Mail, Youtube, Instagram, Linkedin } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-800">
          <img src="/ayman-al-salmi.png" alt="Aiman Mohammed Al Salmi" className="w-full h-full object-cover shadow-sm " />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-xl font-semibold text-gray-900 text-center mb-8">Ayman Mohammed Al Salmi</h1>

      {/* Contact Buttons */}
      <div className="space-y-3">
        <LinkButton
          href="mailto:aimanalsalmi@gmail.com"
          text="aimanalsalmi@gmail.com"
          icon={<Mail />}
        />
        <LinkButton
          href="mailto:aimanalsalmi@hotmail.com"
          text="aimanalsalmi@hotmail.com"
          icon={<Mail />}
        />
        <LinkButton
          href="https://www.youtube.com/@aimanalsalmi"
          text="Youtube"
          icon={<Youtube />}
        />

        <LinkButton
          href="https://www.instagram.com/aiman_alsalmi"
          text="Instagram"
          icon={<Instagram />}
        />

        <LinkButton
          href="https://www.linkedin.com/in/aiman-mohammed-alsalmi-3883ba24b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          text="Linked in"
          icon={<Linkedin />}
        />
      </div>
    </div>
  )
}

