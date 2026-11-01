import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollRevealText from './ScrollRevealText'

gsap.registerPlugin(ScrollTrigger)

const CATEGORIES = [
  {
    key: 'patient',
    label: "Patient's Journey",
    accent: '#f06292',
    tagline: 'Tools in the hands of patients — before they even see a doctor.',
    slogan: 'Patients arrive prepared.',
    prose: "From first registration to discharge, we've rebuilt the patient experience from the ground up. Our tools guide patients through appointment prep, medication reminders, and health literacy — so every consultation begins with context, not confusion.",
    banner: '/patient.png',
    bannerGradient: 'linear-gradient(135deg, rgba(240,98,146,0.18) 0%, rgba(240,98,146,0.04) 100%)',
  },
  {
    key: 'doctor',
    label: "Doctor's Journey",
    accent: '#0ea5a0',
    tagline: 'Clinical tools that give clinicians their time back.',
    slogan: 'Less admin. More medicine.',
    prose: "Ward rounds shouldn't mean paperwork marathons. We've built AI-assisted tools that handle the documentation, surface the right information at the right time, and automate the repetitive — so clinicians can focus entirely on the patient in front of them.",
    banner: '/doctor.png',
    bannerGradient: 'linear-gradient(135deg, rgba(14,165,160,0.18) 0%, rgba(14,165,160,0.04) 100%)',
  },
  {
    key: 'management',
    label: 'Management Productivity',
    accent: '#00C9A7',
    tagline: 'Dashboards and automation for hospital operations at scale.',
    slogan: 'Real data. Real time. Real decisions.',
    prose: "Hospital management shouldn't run on spreadsheets and gut instinct. We've created live dashboards, automated reporting pipelines, and census tools that give leadership the visibility to act fast — and the data to back every decision.",
    banner: '/management.png',
    bannerGradient: 'linear-gradient(135deg, rgba(0,201,167,0.18) 0%, rgba(0,201,167,0.04) 100%)',
  },
]

function BannerStrip({ banner, bannerGradient, accent, slogan }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.set(el, { opacity: 0, y: 80 })
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 95%', once: true },
    })
    return () => ScrollTrigger.getAll().forEach(t => { if (t.vars?.trigger === el) t.kill() })
  }, [])
  return (
    <div ref={ref} className="folders-group__banner"
      style={{ background: bannerGradient, borderTop: `2px solid ${accent}22` }}>
      <img src={banner} alt="" className="folders-group__banner-img" />
      <div className="folders-group__banner-overlay" />
      <ScrollRevealText text={slogan} className="folders-group__slogan" />
    </div>
  )
}

function formatCredit(credit) {
  if (!credit) return null
  const parts = []
  if (credit.aiTeam) parts.push(`AI: ${credit.aiTeam}`)
  if (credit.by) parts.push(credit.by)
  if (credit.coAuthor) parts.push(credit.coAuthor)
  if (credit.dept) parts.push(credit.dept)
  return parts.join(' · ')
}

const AI_ACCENT = '#6366f1'

const STAT_ITEMS = [
  ...CATEGORIES.map(({ key, label, accent }) => ({ key, label, accent, filter: (p) => p.category === key })),
  {
    key: 'ai',
    label: 'AI-Enhanced Tools',
    accent: AI_ACCENT,
    filter: (p) => p.tags?.some(t => /\bai\b/i.test(t)),
  },
]

/* Animated counter card */
function StatCard({ label, accent, count }) {
  const numRef = useRef(null)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: count,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.val) },
    })
    return () => ScrollTrigger.getAll().forEach(t => { if (t.vars?.trigger === el) t.kill() })
  }, [count])

  return (
    <div className="folders-stat-card" style={{ '--accent': accent }}>
      <span ref={numRef} className="folders-stat-card__num">0</span>
      <span className="folders-stat-card__label">{label}</span>
    </div>
  )
}

function CategoryStats({ projects }) {
  return (
    <div className="folders-stats">
      {STAT_ITEMS.map(({ key, label, accent, filter }) => (
        <StatCard key={key} label={label} accent={accent} count={projects.filter(filter).length} />
      ))}
    </div>
  )
}

/* Single project card */
function ProjectCard({ project, accent, categoryLabel, navigate }) {
  const numDisplay = project.num.replace(/^#/, '')
  const creditStr = formatCredit(project.credit)
  return (
    <article className="pcard" style={{ '--accent': accent }}>
      <div className="pcard__top">
        <span className="pcard__num">{numDisplay}</span>
        {project.status === 'live' && <span className="pcard__live">LIVE</span>}
        {project.status === 'demo' && <span className="pcard__demo">⚗ Demo</span>}
        {project.status === 'dev' && <span className="pcard__demo">🛠 In Development</span>}
      </div>

      <h3 className="pcard__title">{project.title}</h3>
      <span className="pcard__cat">{categoryLabel}</span>

      {project.tags?.length > 0 && (
        <div className="pcard__tags">
          {project.tags.slice(0, 3).map(t => <span key={t} className="pcard__tag">{t}</span>)}
        </div>
      )}

      <hr className="pcard__divider" />

      <p className="pcard__desc">{project.desc}</p>

      <div className="pcard__footer">
        {creditStr && <p className="pcard__credit">{creditStr}</p>}
        {project.detailPath && (
          <button className="pcard__btn" onClick={() => navigate(project.detailPath)}>
            View Project →
          </button>
        )}
        {project.href && (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="pcard__btn">
            View Project →
          </a>
        )}
      </div>
    </article>
  )
}

/* One horizontally scrollable row of cards */
function CardRow({ items, accent, label, rowNo, rowCount }) {
  const trackRef = useRef(null)
  const navigate = useNavigate()

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.pcard')
    const step = card ? card.getBoundingClientRect().width + 20 : 340
    el.scrollBy({ left: dir * step * 2, behavior: 'smooth' })
  }

  return (
    <div className="hrow" style={{ '--accent': accent }}>
      <div className="hrow__head">
        <span className="hrow__label">
          {rowCount > 1 ? `Row ${rowNo} · ` : ''}{items.length} {items.length === 1 ? 'project' : 'projects'}
        </span>
        <div className="hrow__arrows">
          <button type="button" className="hrow__arrow" aria-label="Scroll left" onClick={() => scrollBy(-1)}>←</button>
          <button type="button" className="hrow__arrow" aria-label="Scroll right" onClick={() => scrollBy(1)}>→</button>
        </div>
      </div>
      <div ref={trackRef} className="hrow__track">
        {items.map(p => (
          <ProjectCard key={p.num} project={p} accent={accent} categoryLabel={label} navigate={navigate} />
        ))}
      </div>
    </div>
  )
}

/* Split a category into rows (rowSize cards each); small categories stay on one row */
function CardRows({ group, accent, label, rowSize }) {
  const rows = []
  for (let i = 0; i < group.length; i += rowSize) rows.push(group.slice(i, i + rowSize))
  return (
    <div className="hrows">
      {rows.map((items, i) => (
        <CardRow key={items[0].num} items={items} accent={accent} label={label} rowNo={i + 1} rowCount={rows.length} />
      ))}
    </div>
  )
}

export default function ProjectFolders({ projects }) {
  return (
    <section id="projects" className="section folders-section">

      <div className="folders-preamble">
        <div className="folders-preamble__top">
          <p className="section__label">Active Digital Solutions</p>
          <span className="folders-preamble__count">{projects.filter(p => p.status !== 'dev').length} tools deployed</span>
        </div>
        <ScrollRevealText text="Built & Running" className="folders-preamble__title" />
        <ScrollRevealText
          text="We categorize our work into three themes — each one designed around the people who work inside a hospital every day."
          className="folders-preamble__body"
        />
      </div>

      <CategoryStats projects={projects} />

      {CATEGORIES.map(({ key, label, accent, tagline, slogan, prose, banner, bannerGradient }) => {
        const group = projects
          .filter(p => p.category === key)
          .sort((a, b) => parseInt(a.num.replace('#', '')) - parseInt(b.num.replace('#', '')))
        if (!group.length) return null
        return (
          <div key={key} className="stack-group">
            <BannerStrip banner={banner} bannerGradient={bannerGradient} accent={accent} slogan={slogan} />
            <div className="folders-group__header">
              <h2 className="folders-group__title" style={{ color: accent }}>{label}</h2>
              <div className="folders-group__meta">
                <ScrollRevealText text={tagline} className="folders-group__tagline" />
                <ScrollRevealText text={prose} className="folders-group__prose" />
              </div>
            </div>
            <CardRows group={group} accent={accent} label={label} rowSize={key === 'management' ? 5 : Infinity} />
          </div>
        )
      })}

    </section>
  )
}
