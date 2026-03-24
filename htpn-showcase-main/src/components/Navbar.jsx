import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav>
      <a className="nav-logo" href="/#hero" onClick={close}>
        <img src="/logo.jpg" alt="HTPN Logo" />
        <div className="nav-brand">
          AI Team HTPN
          <span>Hospital Tengku Permaisuri Norashikin · Kajang</span>
        </div>
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#pipeline">Pipeline</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#journey">Journey</a></li>
      </ul>

      {/* Hamburger button — mobile only */}
      <button
        className={`nav-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="nav-mobile-menu">
          <li><a href="/#projects" onClick={close}>Projects</a></li>
          <li><a href="/#pipeline" onClick={close}>Pipeline</a></li>
          <li><a href="/#about" onClick={close}>About</a></li>
          <li><a href="/#journey" onClick={close}>Journey</a></li>
        </ul>
      )}
    </nav>
  )
}
