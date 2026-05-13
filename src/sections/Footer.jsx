export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-black text-lg mb-2">
            Wellington Araújo
          </h3>

          <p className="text-zinc-500 text-sm">
            Full Stack Developer • Laravel • JavaScript
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a
            href="https://github.com/seugithub"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/seulinkedin"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:seuemail@email.com"
            className="hover:text-white transition"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  )
}