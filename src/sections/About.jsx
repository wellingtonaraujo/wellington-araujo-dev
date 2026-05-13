import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const content = {
    title: {
      pt: "Desenvolvimento orientado a soluções reais.",
      en: "Development focused on real-world solutions."
    },

    sectionLabel: {
      pt: "Sobre",
      en: "About"
    },

    paragraph1: {
      pt: "Desenvolvedor Full Stack especializado em Laravel, PHP e JavaScript, com experiência no desenvolvimento de sistemas administrativos, painéis de gestão, autenticação, controle de permissões e aplicações orientadas a regras de negócio.",
      en: "Full Stack Developer specialized in Laravel, PHP and JavaScript, with experience in building administrative systems, management dashboards, authentication, permission control and business-rule-driven applications."
    },

    paragraph2: {
      pt: "Meu foco é criar aplicações web modernas, escaláveis e organizadas que tragam automação, produtividade e melhor gestão operacional para empresas e instituições.",
      en: "My focus is to build modern, scalable and well-structured web applications that bring automation, productivity and better operational management for companies and institutions."
    },

    paragraph3: {
      pt: "Trabalho principalmente com Laravel, TailwindCSS, MySQL e APIs REST, desenvolvendo soluções completas do backend ao frontend.",
      en: "I mainly work with Laravel, TailwindCSS, MySQL and REST APIs, building full-stack solutions from backend to frontend."
    },

    stats: {
      systems: {
        number: "3+",
        pt: "Sistemas administrativos desenvolvidos",
        en: "Administrative systems developed"
      },

      fullstack: {
        pt: "Full Stack",
        en: "Full Stack",
        descPt: "Backend, frontend e integrações",
        descEn: "Backend, frontend and integrations"
      }
    }
  }

  return (
    <section
      id="about"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              {content.sectionLabel[language]}
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              {content.title[language]}
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <p className="text-zinc-300 text-xl leading-relaxed">
              {content.paragraph1[language]}
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              {content.paragraph2[language]}
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              {content.paragraph3[language]}
            </p>

            {/* STATS */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-4xl font-black mb-3">
                  {content.stats.systems.number}
                </h3>

                <p className="text-zinc-400">
                  {content.stats.systems[language]}
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-4xl font-black mb-3">
                  {content.stats.fullstack[language]}
                </h3>

                <p className="text-zinc-400">
                  {language === 'pt'
                    ? content.stats.fullstack.descPt
                    : content.stats.fullstack.descEn}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}