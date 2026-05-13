import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service, onClick }) {
  return (
    <div
      onClick={() => {
        console.log("SERVICE CLICKED:", service)
        onClick?.()
      }}
    >

      {/* topo decorativo */}
      <div className="flex items-center justify-between mb-6">

        <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
          {service.icon || "⚡"}
        </span>

        <ArrowUpRight
          size={18}
          className="text-zinc-600 group-hover:text-white transition"
        />
      </div>

      {/* título */}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition">
        {service.title}
      </h3>

      {/* descrição */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition">
        {service.description}
      </p>

      {/* 🔥 NOVO: PROJETOS RELACIONADOS */}
      {service.projects?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {service.projects.map((project) => (
            <span
              key={project}
              className="text-xs px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400"
            >
              {project}
            </span>
          ))}
        </div>
      )}

      {/* efeito de brilho inferior */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  )
}