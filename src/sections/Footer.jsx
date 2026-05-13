import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  const content = {
    role: {
      pt: "Full Stack Developer • Laravel • JavaScript",
      en: "Full Stack Developer • Laravel • JavaScript"
    },

    links: {
      github: {
        pt: "GitHub",
        en: "GitHub"
      },
      linkedin: {
        pt: "LinkedIn",
        en: "LinkedIn"
      },
      contact: {
        pt: "Contato",
        en: "Contact"
      }
    }
  }

  return (
    <footer className="border-t border-zinc-900 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div>
          <h3 className="font-black text-lg mb-2">
            Wellington Araújo
          </h3>

          <p className="text-zinc-500 text-sm">
            {content.role[language]}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm text-zinc-400">

          <a
            href="https://github.com/seugithub"
            target="_blank"
            className="hover:text-white transition"
          >
            {content.links.github[language]}
          </a>

          <a
            href="https://linkedin.com/in/seulinkedin"
            target="_blank"
            className="hover:text-white transition"
          >
            {content.links.linkedin[language]}
          </a>

          <a
            href="mailto:seuemail@email.com"
            className="hover:text-white transition"
          >
            {content.links.contact[language]}
          </a>

        </div>

      </div>

    </footer>
  )
}