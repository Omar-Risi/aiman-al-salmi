import { LinkButton } from "./LinkButton"
import { Mail, Youtube, Instagram, Linkedin, Phone, Download, Smartphone } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-800">
          <img src="/aiman-al-salmi.jpg" alt="Aiman Mohammed Al Salmi" className="w-full h-full object-cover shadow-sm " />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-xl font-semibold text-gray-900 text-center mb-8">Ayman Mohammed Al Salmi</h1>
      <p className="text-center text-gray-500 max-w-64">
        Public relations and Stakeholder Engagement,
        Entrepreneurship and Business Plans, Communication and Media, Engineering and Sciences, Big Data and Data Science,
        Logistics, FinTech, Artificial Intelligence, Market Research.
      </p>

      {/* Contact Buttons */}
      <div className="space-y-3 mt-4 w-full">
        <a
          href="/contact.vcf"
          className="flex justify-center items-center gap-3  p-3 bg-amber-400 hover:bg-amber-300 transition-colors rounded-full w-full text-white text-sm font-medium"
          download="OmarReesi.vcf"
        >
          <div className="text-white">
            <Download />
          </div>
          <span> Save contact </span>
        </a>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <LinkButton
          href="mailto:aimanalsalmi@gmail.com"
          text="Gmail"
          icon={<Mail />}
        />
        <LinkButton
          href="mailto:aimanalsalmi@hotmail.com"
          text="Hotmail"
          icon={<Mail />}
        />
        <LinkButton
          href="tel:+96892111093"
          text="Mobile"
          icon={<Smartphone />}
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

        <div></div>

        <LinkButton
          href="https://www.linkedin.com/in/aiman-mohammed-alsalmi-3883ba24b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          text="Linked in"
          icon={<Linkedin />}
        />
      </div>
    </div>
  )
}

