import projects from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

export default function Projects({ setActiveProject }) {
  return (
    <section id="projects" className="py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Projetos
          </p>

          <h2 className="text-5xl font-black mb-6">
            Trabalhos selecionados
          </h2>

          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            Projetos reais desenvolvidos com foco em performance, escalabilidade
            e impacto no negócio.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative p-6 rounded-2xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition"
            >

              {/* topo */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.type}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-zinc-600 group-hover:text-white transition"
                />
              </div>

              {/* título */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition">
                {project.title}
              </h3>

              {/* descrição curta */}
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition">
                {project.solution || project.description}
              </p>

            </a>
          ))}

        </div>
      </div>
    </section>
  )
}