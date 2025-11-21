const steps = [
  {
    title: 'Brief & Strategie',
    desc: 'Înțelegem obiectivul, audiența și stilul. Propunem structura potrivită.'
  },
  {
    title: 'Editare',
    desc: 'Selecție, pacing, B-roll, SFX, grafică și storytelling clar.'
  },
  {
    title: 'Feedback & Revizii',
    desc: '1-2 runde rapide pe frame.io/Drive. Implementăm fără fricțiune.'
  },
  {
    title: 'Livrare',
    desc: 'Export optimizat pentru platformă + thumbnail/grafică dacă e nevoie.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Cum lucrăm</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <div className="text-blue-400 text-sm">{String(i+1).padStart(2,'0')}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
