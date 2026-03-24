import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/sitenavigator.css'

const SECTIONS = [
  { id: 'hero',           label: 'INDEX' },
  { id: 'projects',       label: 'PROJECTS' },
  { id: 'pipeline',       label: 'PIPELINE' },
  { id: 'in-development', label: 'IN DEVELOPMENT' },
  { id: 'about',          label: 'ABOUT' },
  { id: 'beyond-htpn',    label: 'BEYOND HTPN' },
  { id: 'contact',        label: 'CONTACT' },
]

export default function SiteNavigator() {
  const ref = useRef(null)
  const [activeId, setActiveId] = useState('hero')

  // Section entrance animation
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
    )
    return () => ScrollTrigger.getAll().filter(t => t.vars.trigger === el).forEach(t => t.kill())
  }, [])

  // IntersectionObserver for active section
  useEffect(() => {
    const observers = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="site-navigator">
      <div className="site-navigator__grid">
        {/* Left */}
        <div>
          <div className="sitenav-brand">
            <img src="/logo.jpg" alt="HTPN Logo" />
            <span>HTPN AI Team</span>
          </div>
          <div className="sitenav-illustration">[ illustration ]</div>
        </div>

        {/* Center */}
        <nav className="sitenav-links" aria-label="Site navigation">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              className="sitenav-link"
              onClick={() => scrollTo(s.id)}
            >
              <span className="sitenav-link__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sitenav-link__name">{s.label}</span>
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="sitenav-active" aria-label="Current section">
          {SECTIONS.map((s) => (
            <div
              key={s.id}
              className={`sitenav-active__item${activeId === s.id ? ' active' : ''}`}
            >
              <span className="sitenav-active__dot" />
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className="sitenav-bottom">
        <a href="#" onClick={e => e.preventDefault()}>Privacy Policy</a>
        <span>
          Terms and Conditions &nbsp;·&nbsp;
          <span>( BM )</span>
        </span>
        <span>Follow Us &nbsp;·&nbsp; <a href="#">LinkedIn</a> &nbsp;·&nbsp; <a href="#">Instagram</a></span>
      </div>
    </section>
  )
}
