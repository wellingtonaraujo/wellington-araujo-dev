import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ setActiveProject }) {
  return (
    <section id="projects" className="py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Projetos
          </p>

          <h2 className="text-5xl font-black mb-6">
            Sistemas Desenvolvidos
          </h2>

          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            Projetos focados em gestão administrativa, automação,
            organização operacional e experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(project) => setActiveProject(project)}
            />
          ))}

        </div>

      </div>
    </section>
  )
}