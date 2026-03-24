import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

const NAV_ITEMS_LEFT = [
  { label: 'index',          anchor: '#hero' },
  { label: 'projects',       anchor: '#projects' },
  { label: 'pipeline',       anchor: '#pipeline' },
  { label: 'about',          anchor: '#about' },
]
const NAV_ITEMS_RIGHT = [
  { label: 'in development', anchor: '#in-development' },
  { label: 'beyond htpn',    anchor: '#beyond-htpn' },
  { label: 'contact',        anchor: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNavClick = useCallback((anchor) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(anchor)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.querySelector(anchor)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, navigate])

  const handleLogoClick = () => {
    setOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <button className="navbar__logo" onClick={handleLogoClick} aria-label="Home">
          <img src="/logo.jpg" alt="HTPN Logo" />
          <span className="navbar__logo-text">HTPN AI Team</span>
        </button>

        <button
          className={`navbar__toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Full-screen overlay */}
      <div className={`nav-overlay${open ? ' open' : ''}`} role="dialog" aria-modal="true">
        {/* Animated SVG lines */}
        <svg className="nav-overlay__lines" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M 200 100 C 400 200, 800 150, 1100 300 S 1300 500, 1400 700" />
          <path d="M 50 300 C 200 250, 500 400, 700 350 S 1000 200, 1200 450" />
          <path d="M 0 600 C 300 500, 600 650, 900 550 S 1200 700, 1440 500" />
          <path d="M 100 50 C 250 300, 600 100, 800 400 S 1100 300, 1440 200" />
          <path d="M 400 900 C 500 700, 700 800, 900 600 S 1200 800, 1400 600" />
        </svg>

        <div className="nav-overlay__body">
          <div className="nav-col">
            {NAV_ITEMS_LEFT.map((item) => (
              <button
                key={item.anchor}
                className="nav-link"
                onClick={() => handleNavClick(item.anchor)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="nav-col">
            {NAV_ITEMS_RIGHT.map((item) => (
              <button
                key={item.anchor}
                className="nav-link"
                onClick={() => handleNavClick(item.anchor)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="nav-overlay__bottom">
          <div className="nav-overlay__tagline">
            advancing digital health ·<br />built from the ward up
          </div>
          <div className="nav-overlay__lang">
            <span className="active">EN</span>
            <span>BM</span>
          </div>
        </div>
      </div>
    </>
  )
}
