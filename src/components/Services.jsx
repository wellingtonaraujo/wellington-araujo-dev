import services from '../data/services'
import projects from '../data/projects'

export default function Services() {
  return (
    <section id="services" className="py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Serviços
          </p>

          <h2 className="text-5xl font-black mb-6">
            Como posso ajudar
          </h2>

          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            Desenvolvimento de soluções web modernas, sistemas administrativos e automações.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {

            const relatedProjects = projects.filter((project) =>
              service.projects?.includes(project.id)
            )

            return (
              <div
                key={service.id}
                className="p-8 rounded-2xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition"
              >

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* RELATED PROJECTS */}
                {relatedProjects.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-blue-400 uppercase tracking-widest">
                      Projetos relacionados
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {relatedProjects.map((project) => (
                        <span
                          key={project.id}
                          className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {project.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}