export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      {/* BACKDROP CLICK */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-zinc-900 max-w-3xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl z-10">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl z-20"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {project.title}
          </h2>

          <p className="text-zinc-400 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 bg-zinc-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}