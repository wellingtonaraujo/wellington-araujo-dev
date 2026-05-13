import { useLanguage } from '../context/LanguageContext'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ setActiveProject }) {
  const { language } = useLanguage()

  const content = {
    sectionLabel: {
      pt: "Projetos",
      en: "Projects"
    },

    title: {
      pt: "Sistemas Desenvolvidos",
      en: "Developed Systems"
    },

    description: {
      pt: "Projetos focados em gestão administrativa, automação, organização operacional e experiência do usuário.",
      en: "Projects focused on administrative management, automation, operational organization and user experience."
    }
  }

  return (
    <section
      id="projects"
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}

        </div>

      </div>
    </section>
  )
}