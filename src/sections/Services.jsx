import { useLanguage } from '../context/LanguageContext'
import services from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function Services({ setActiveProject, projects }) {
  const { language } = useLanguage()

  const content = {
    sectionLabel: {
      pt: "Serviços",
      en: "Services"
    },

    title: {
      pt: "Transformo ideias em sistemas que geram resultado",
      en: "I turn ideas into systems that deliver results"
    },

    description: {
      pt: "Desenvolvo soluções web focadas em performance, automação e eficiência operacional. Meu trabalho não é apenas construir interfaces, mas resolver problemas reais de negócio com sistemas rápidos, escaláveis e fáceis de usar.",
      en: "I build web solutions focused on performance, automation and operational efficiency. My work is not just about building interfaces, but solving real business problems with fast, scalable and easy-to-use systems."
    }
  }

  function handleServiceClick(service) {
    const project = projects.find(
      (p) => service.projects?.includes(p.id)
    )

    if (project) setActiveProject(project)
  }

  return (
    <section
      id="services"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            {content.sectionLabel[language]}
          </p>

          <h2 className="text-5xl font-black mb-6">
            {content.title[language]}
          </h2>

          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            {content.description[language]}
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}