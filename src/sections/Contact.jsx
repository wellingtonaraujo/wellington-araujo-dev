import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { language } = useLanguage()

  const content = {
    sectionLabel: {
      pt: "Contato",
      en: "Contact"
    },

    title: {
      pt: "Vamos construir algo profissional juntos.",
      en: "Let's build something professional together."
    },

    description: {
      pt: "Disponível para oportunidades remotas, freelas, contratos PJ e desenvolvimento de sistemas web modernos utilizando Laravel, PHP e JavaScript.",
      en: "Available for remote opportunities, freelance work, PJ contracts, and modern web system development using Laravel, PHP and JavaScript."
    },

    buttons: {
      contact: {
        pt: "Entrar em Contato",
        en: "Get in Touch"
      },
      github: {
        pt: "GitHub",
        en: "GitHub"
      },
      linkedin: {
        pt: "LinkedIn",
        en: "LinkedIn"
      }
    },

    cards: {
      remote: {
        title: {
          pt: "Trabalho Remoto",
          en: "Remote Work"
        },
        desc: {
          pt: "Disponível para projetos nacionais e internacionais.",
          en: "Available for national and international projects."
        }
      },

      fullstack: {
        title: {
          pt: "Full Stack",
          en: "Full Stack"
        },
        desc: {
          pt: "Backend, frontend, APIs e integrações.",
          en: "Backend, frontend, APIs and integrations."
        }
      },

      laravel: {
        title: {
          pt: "Laravel Specialist",
          en: "Laravel Specialist"
        },
        desc: {
          pt: "Desenvolvimento de aplicações modernas e escaláveis.",
          en: "Development of modern and scalable applications."
        }
      }
    }
  }

  return (
    <section
      id="contact"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16">

          <div className="max-w-4xl">

            {/* LABEL */}
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              {content.sectionLabel[language]}
            </p>

            {/* TITLE */}
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              {content.title[language]}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 text-xl leading-relaxed mb-12">
              {content.description[language]}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-12">

              <a
                href="mailto:seuemail@email.com"
                className="px-6 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold"
              >
                {content.buttons.contact[language]}
              </a>

              <a
                href="https://github.com/seugithub"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                {content.buttons.github[language]}
              </a>

              <a
                href="https://linkedin.com/in/seulinkedin"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                {content.buttons.linkedin[language]}
              </a>

            </div>

            {/* CARDS */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
                <h3 className="font-bold mb-2">
                  {content.cards.remote.title[language]}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {content.cards.remote.desc[language]}
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
                <h3 className="font-bold mb-2">
                  {content.cards.fullstack.title[language]}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {content.cards.fullstack.desc[language]}
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
                <h3 className="font-bold mb-2">
                  {content.cards.laravel.title[language]}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {content.cards.laravel.desc[language]}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}