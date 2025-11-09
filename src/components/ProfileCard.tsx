import { LinkButton } from "./LinkButton"
import { Mail, Youtube, Instagram, Linkedin, Phone, Download } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-800">
          <img src="/aiman-al-salmi.jpg" alt="Aiman Mohammed Al Salmi" className="w-full h-full object-cover shadow-sm " />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-xl font-semibold text-gray-900 text-center mb-8">Ayman Mohammed Al Salmi</h1>

      {/* Contact Buttons */}
      <div className="space-y-3">
        <a
          href="/contact.vcf"
          className="flex items-center gap-3 w-full p-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg text-gray-800 text-sm font-medium"
          download="OmarReesi.vcf"
        >
          <div className="text-gray-600">
            <Download />
          </div>
          <span> Save contact </span>
        </a>
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
          href="tel:+96892111093"
          text="Call 92111093"
          icon={<Phone />}
        />
        <LinkButton
          href="https://wa.me/+96892111093"
          text="Whatsapp"
          icon={<Phone className="border-2 p-1 rounded-full " />}
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

