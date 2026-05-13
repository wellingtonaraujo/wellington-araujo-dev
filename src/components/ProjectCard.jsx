export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="group cursor-pointer bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 hover:-translate-y-2 transition duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
    >
      <div className="relative h-56 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

      </div>

      <div className="p-8">
        <p className="text-blue-400 uppercase tracking-widest text-xs mb-4">
          {project.category}
        </p>

        <h3 className="text-2xl font-black mb-4">
          {project.title}
        </h3>

        <p className="text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}