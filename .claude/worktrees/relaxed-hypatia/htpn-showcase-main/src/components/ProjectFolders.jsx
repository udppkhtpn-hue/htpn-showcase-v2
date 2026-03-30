import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollRevealText from './ScrollRevealText'

gsap.registerPlugin(ScrollTrigger)

const PEEK = 100   // px of each buried card that peeks above the next

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

/* Single card — rendered inside the pinned track */
function StackCard({ project, accent, categoryLabel, navigate }) {
  const numDisplay = project.num.replace(/^#/, '')
  const creditStr = formatCredit(project.credit)
  return (
    <div className="stack-card" style={{ '--accent': accent }}>

      <div className="stack-card__header">
        <div className="stack-card__header-meta">
          <span className="stack-card__num">{numDisplay}</span>
          {project.status === 'live' && <span className="stack-card__live">LIVE</span>}
          {project.status === 'demo' && <span className="stack-card__demo">⚗ Demo</span>}
        </div>
        {project.badges?.length > 0 && (
          <div className="stack-card__badges">
            {project.badges.map(b => <span key={b} className="stack-card__badge-extra">{b}</span>)}
          </div>
        )}
        <h2 className="stack-card__title">{project.title}</h2>
        <span className="stack-card__cat-label">{categoryLabel}</span>
        {project.tags?.length > 0 && (
          <div className="stack-card__tags">
            {project.tags.map(t => <span key={t} className="stack-card__tag">{t}</span>)}
          </div>
        )}
      </div>

      <hr className="stack-card__divider" />

      <div className="stack-card__content">
        <p className="stack-card__desc">{project.desc}</p>
        <div className="stack-card__visual">
          {project.iconType === 'image' && project.icon
            ? <img src={project.icon} alt="" className="stack-card__icon-img" />
            : <span className="stack-card__icon-emoji">{project.icon}</span>
          }
        </div>
        <div className="stack-card__footer">
          {creditStr && <p className="stack-card__credit">{creditStr}</p>}
          {project.detailPath && (
            <button className="stack-card__btn" onClick={() => navigate(project.detailPath)}>
              View Project →
            </button>
          )}
          {project.href && (
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="stack-card__btn">
              View Project →
            </a>
          )}
        </div>
      </div>

    </div>
  )
}

/* Pinned group — GSAP drives each card rising and covering */
function StackGroup({ group, accent, label }) {
  const trackRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const cards = Array.from(el.querySelectorAll(':scope > .stack-card'))
      const N = cards.length
      if (N < 2) return

      const vh = window.innerHeight
      /* Read the fixed navbar height so the pin starts just below it */
      const navEl = document.querySelector('nav, header, .site-header, .navbar')
      const navH = navEl ? Math.round(navEl.getBoundingClientRect().height) : 0

      /* z-order: last card on top */
      cards.forEach((c, i) => gsap.set(c, { zIndex: i + 1 }))

      /* Cards 1..N-1 start below the viewport */
      for (let i = 1; i < N; i++) {
        gsap.set(cards[i], { y: vh })
      }

      /* Timeline: new card rises to PEEK; previous card slides to y=0 (fully buried).
         Only ONE card peeks at the top at any time — works for any N. */
      const tl = gsap.timeline({ paused: true })
      for (let i = 1; i < N; i++) {
        tl.to(cards[i], { y: PEEK, ease: 'none', duration: 1 }, i - 1)
        if (i >= 2) {
          tl.to(cards[i - 1], { y: 0, ease: 'none', duration: 1 }, i - 1)
        }
      }

      /* Pin the track just below the navbar, scrub through the full stack */
      ScrollTrigger.create({
        trigger: el,
        start: `top ${navH}px`,
        end: `+=${(N - 1) * vh}`,
        pin: true,
        scrub: true,
        animation: tl,
      })
    }, el)

    return () => ctx.revert()
  }, [group.length])

  return (
    <div ref={trackRef} className="stack-cards-track">
      {group.map((p) => (
        <StackCard
          key={p.num}
          project={p}
          accent={accent}
          categoryLabel={label}
          navigate={navigate}
        />
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
          <span className="folders-preamble__count">{projects.length} tools deployed</span>
        </div>
        <ScrollRevealText text="Built & Running" className="folders-preamble__title" />
        <ScrollRevealText
          text="We categorize our work into three themes — each one designed around the people who work inside a hospital every day."
          className="folders-preamble__body"
        />
      </div>

      <CategoryStats projects={projects} />

      {CATEGORIES.map(({ key, label, accent, tagline, slogan, prose, banner, bannerGradient }) => {
        const group = projects.filter(p => p.category === key)
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
            <StackGroup group={group} accent={accent} label={label} />
          </div>
        )
      })}

    </section>
  )
}
