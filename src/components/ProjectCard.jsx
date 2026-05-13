export default function ProjectCard({ project }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition duration-300">
      <div className="h-56 bg-gradient-to-br from-zinc-800 to-zinc-950"></div>

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