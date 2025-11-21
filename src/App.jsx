import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} BlueCut — Agenție de video editing. Toate drepturile rezervate.
      </footer>
    </div>
  )
}

export default App
