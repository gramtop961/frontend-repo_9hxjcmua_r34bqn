import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Servicii', href: '#services' },
    { label: 'Portofoliu', href: '#portfolio' },
    { label: 'Proces', href: '#process' },
    { label: 'Despre', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-bold text-xl">BlueCut</a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Cere ofertă</a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Cere ofertă</a>
          </div>
        </div>
      )}
    </header>
  )
}
