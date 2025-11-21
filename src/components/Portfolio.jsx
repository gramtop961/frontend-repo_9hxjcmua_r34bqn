const items = [
  { title: 'YouTube Edit', thumb: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop', tag: 'YouTube' },
  { title: 'Reel Promo', thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', tag: 'Reels' },
  { title: 'Ad Cut', thumb: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1200&auto=format&fit=crop', tag: 'Ads' },
  { title: 'Corporate', thumb: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop', tag: 'Corporate' },
  { title: 'Event Aftermovie', thumb: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop', tag: 'Evenimente' },
  { title: 'Motion Pack', thumb: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop', tag: 'Branding' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Portofoliu</h2>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">Cere ofertă →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40">
              <img src={item.thumb} alt={item.title} className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-xs text-blue-300">{item.tag}</p>
                </div>
                <span className="text-xs rounded-full bg-blue-600/20 text-blue-300 px-2 py-1 border border-blue-500/30">Play</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
