import { Scissors, Sparkles, PlaySquare, Rocket } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Editare YouTube',
    desc: 'Pachete lunare pentru creatori: structură, pacing, B-roll, subtitrări și thumbnail direction.'
  },
  {
    icon: PlaySquare,
    title: 'Reels & TikTok',
    desc: 'Short-form care prinde: hook, captions dinamice, sound design și optimizare pentru retenție.'
  },
  {
    icon: Rocket,
    title: 'Ads & Promo',
    desc: 'Reclame pentru conversii: structură orientată pe rezultate și livrare rapidă A/B.'
  },
  {
    icon: Sparkles,
    title: 'Branding Video',
    desc: 'Intro/Outro, lower-thirds, guideline de stil și asset management.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Servicii</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 hover:border-blue-500/30 transition-colors">
              <s.icon className="w-8 h-8 text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
