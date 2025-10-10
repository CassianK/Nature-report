import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import StreamPage from './pages/StreamPage'
import MountainPage from './pages/MountainPage'
import SpeciesPage from './pages/SpeciesPage'
import ObservationsPage from './pages/ObservationsPage'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Router basename="/Nature-report">
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="nav-minimal fixed top-0 left-0 right-0 z-50">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-3">
                <div className="text-2xl font-bold" style={{fontFamily: 'var(--font-serif)'}}>
                  NATURE REPORT
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-10">
                <Link to="/stream" className="nav-link">Stream</Link>
                <Link to="/mountain" className="nav-link">Mountains</Link>
                <Link to="/species" className="nav-link">Species</Link>
                <Link to="/observations" className="nav-link">Observations</Link>
                <a 
                  href="https://www.youtube.com/@DK2560" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Videos
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-6 space-y-4 border-t border-gray-200">
                <Link to="/stream" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>
                  Stream
                </Link>
                <Link to="/mountain" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>
                  Mountains
                </Link>
                <Link to="/species" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>
                  Species
                </Link>
                <Link to="/observations" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>
                  Observations
                </Link>
                <a 
                  href="https://www.youtube.com/@DK2560" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block nav-link py-2"
                >
                  Videos
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stream" element={<StreamPage />} />
          <Route path="/mountain" element={<MountainPage />} />
          <Route path="/species" element={<SpeciesPage />} />
          <Route path="/observations" element={<ObservationsPage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer-ng">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                  NATURE REPORT KOREA
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Documenting Korea's biodiversity through scientific observation and visual storytelling.
                  A citizen science initiative dedicated to wildlife conservation.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Explore</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/stream">Jungnangcheon Stream</Link></li>
                  <li><Link to="/mountain">Mountain Ecosystems</Link></li>
                  <li><Link to="/species">Species Guides</Link></li>
                  <li><Link to="/observations">Field Observations</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Connect</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://www.youtube.com/@DK2560" target="_blank" rel="noopener noreferrer">
                      YouTube Channel
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/CassianK/Nature-report" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 text-center text-sm opacity-60">
              <p>&copy; 2025 Nature Report Korea. Licensed under CC BY-SA 4.0</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

