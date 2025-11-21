import { useState } from 'react'

const SERVICE_OPTIONS = [
  'Editare YouTube',
  'Reels/TikTok',
  'Ads/Promo',
  'Evenimente',
  'Corporate',
  'Altceva',
]

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      service: form.get('service'),
      budget: form.get('budget') || null,
      message: form.get('message'),
      source: 'website'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setSuccess('Mulțumim! Te contactăm în scurt timp.')
      e.currentTarget.reset()
    } catch (err) {
      setSuccess('A apărut o eroare. Te rugăm să încerci din nou.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Hai să lucrăm împreună</h2>
            <p className="mt-4 text-slate-300">Spune-ne pe scurt despre proiectul tău. Răspundem în 24h.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Timp mediu de livrare: 48-72h</li>
              <li>• 1-2 runde de revizii incluse</li>
              <li>• Contract și facturare</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Nume</label>
                <input name="name" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Email</label>
                <input type="email" name="email" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Serviciu</label>
                <select name="service" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white">
                  {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Buget (opțional)</label>
                <input name="budget" placeholder="ex: 300-800€" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-2">Detalii proiect</label>
              <textarea name="message" required rows="4" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white"></textarea>
            </div>

            <button disabled={loading} className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-60">
              {loading ? 'Se trimite...' : 'Trimite cererea'}
            </button>
            {success && <p className="mt-3 text-sm text-slate-200">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
