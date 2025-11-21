export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.35),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20 mb-4">
              Agenție de Video Editing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Transformăm ideile în conținut video care convertește
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Edităm YouTube, Reels/TikTok, reclame și video-uri corporate. Rapid, creativ și orientat către rezultate.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Cere ofertă
              </a>
              <a href="#portfolio" className="text-slate-200 hover:text-white">Vezi portofoliul →</a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-slate-800/40 p-2 shadow-xl">
              <video className="rounded-xl w-full" loop autoPlay muted playsInline poster="/poster.jpg">
                <source src="/showreel.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
