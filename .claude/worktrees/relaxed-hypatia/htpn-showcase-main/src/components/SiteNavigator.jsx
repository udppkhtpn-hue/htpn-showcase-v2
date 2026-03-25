import { useEffect, useRef } from 'react'

const SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'in-development', label: 'In Development' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Our Journey' },
  { id: 'training', label: 'Training' },
  { id: 'contact', label: 'Contact' },
]

export default function SiteNavigator() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="site-nav">
      <div className="site-nav__grid">
        <div className="site-nav__section">
          <p className="site-nav__section-title">Navigate</p>
          {SECTIONS.map(({ id, label }) => (
            <button key={id} className="site-nav__link" onClick={() => scrollTo(id)}>
              → {label}
            </button>
          ))}
        </div>
        <div className="site-nav__section">
          <p className="site-nav__section-title">HTPN AI Team</p>
          <p className="site-nav__link" style={{ cursor: 'default' }}>Hospital Tengku Permaisuri Norashikin</p>
          <p className="site-nav__link" style={{ cursor: 'default' }}>Kajang, Selangor</p>
          <p className="site-nav__link" style={{ cursor: 'default' }}>Kementerian Kesihatan Malaysia</p>
        </div>
      </div>
    </section>
  )
}
