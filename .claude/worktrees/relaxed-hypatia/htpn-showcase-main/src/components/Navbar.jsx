import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

const NAV_LINKS = [
  { label: 'Projects', id: 'projects' },
  { label: 'Pipeline', id: 'pipeline' },
  { label: 'About', id: 'about' },
  { label: 'Our Journey', id: 'journey' },
  { label: 'Training', id: 'training' },
  { label: 'In Development', id: 'in-development' },
  { label: 'Contact', id: 'contact' },
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
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (id) => {
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem('scrollTo', `#${id}`)
      navigate('/')
    }
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
        <button className="nav__logo" onClick={() => handleLink('hero')}>
          <img src="/img_1.jpg" alt="HTPN Logo" className="nav__logo-img" />
          <div className="nav__logo-text">
            <span className="nav__logo-name">HTPN <span className="nav__logo-ai">AI</span></span>
            <span className="nav__logo-sub">Hospital Tengku Permaisuri Norashikin</span>
          </div>
        </button>

        <button
          className="nav__toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
        </button>
      </nav>

      <div className={`nav__overlay${open ? ' nav__overlay--open' : ''}`}>
        <ul className="nav__links">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id} className="nav__link-item">
              <button className="nav__link" onClick={() => handleLink(id)}>
                {label}
                <span className="nav__link-arrow">↗</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="nav__overlay-footer">
          <p className="nav__tagline">Hospital Tengku Permaisuri Norashikin · Kajang</p>
          <div className="nav__socials">
            <span className="nav__social">MOH Malaysia</span>
            <span className="nav__social">KKM</span>
          </div>
        </div>
      </div>
    </>
  )
}
