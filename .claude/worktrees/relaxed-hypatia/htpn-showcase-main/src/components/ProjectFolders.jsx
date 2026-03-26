import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollRevealText from './ScrollRevealText'

const CATEGORIES = [
  {
    key: 'patient',
    label: "Patient's Journey",
    accent: '#f06292',
    tagline: 'Tools in the hands of patients — before they even see a doctor.',
    slogan: 'Patients arrive prepared.',
    prose: "From first registration to discharge, we've rebuilt the patient experience from the ground up. Our tools guide patients through appointment prep, medication reminders, and health literacy — so every consultation begins with context, not confusion.",
    banner: '/banner-patient1.png',
    bannerGradient: 'linear-gradient(135deg, rgba(240,98,146,0.18) 0%, rgba(240,98,146,0.04) 100%)',
  },
  {
    key: 'doctor',
    label: "Doctor's Journey",
    accent: '#0ea5a0',
    tagline: 'Clinical tools that give clinicians their time back.',
    slogan: 'Less admin. More medicine.',
    prose: "Ward rounds shouldn't mean paperwork marathons. We've built AI-assisted tools that handle the documentation, surface the right information at the right time, and automate the repetitive — so clinicians can focus entirely on the patient in front of them.",
    banner: '/banner-doctor1.png',
    bannerGradient: 'linear-gradient(135deg, rgba(14,165,160,0.18) 0%, rgba(14,165,160,0.04) 100%)',
  },
  {
    key: 'management',
    label: 'Management Productivity',
    accent: '#00C9A7',
    tagline: 'Dashboards and automation for hospital operations at scale.',
    slogan: 'Real data. Real time. Real decisions.',
    prose: "Hospital management shouldn't run on spreadsheets and gut instinct. We've created live dashboards, automated reporting pipelines, and census tools that give leadership the visibility to act fast — and the data to back every decision.",
    banner: '/banner-management1.png',
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
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 95%', once: true },
    })
    return () => ScrollTrigger.getAll().forEach(t => {
      if (t.vars?.trigger === el) t.kill()
    })
  }, [])

  return (
    <div
      ref={ref}
      className="folders-group__banner"
      style={{ background: bannerGradient, borderTop: `2px solid ${accent}22` }}
    >
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

function StackCard({ project, idx, accent, categoryLabel }) {
  const navigate = useNavigate()
  const creditStr = formatCredit(project.credit)
  const stackTop = 20 + idx * 100

  return (
    <div
      className="stack-card-wrapper"
      style={{ '--stack-top': `${stackTop}px`, '--z': idx + 1 }}
    >
      <div className="stack-card" style={{ '--accent': accent }}>

        {/* ── PEEK HEADER — top ~100px, visible when card is buried ── */}
        <div className="stack-card__header">
          <div className="stack-card__header-meta">
            <span className="stack-card__num">{project.num}</span>
            {project.status === 'live' && (
              <span className="stack-card__live">LIVE</span>
            )}
            <span className="stack-card__cat-label">{categoryLabel}</span>
          </div>
          <h2 className="stack-card__title">{project.title}</h2>
        </div>

        {/* ── BODY — full detail shown when card is on top ── */}
        <div className="stack-card__content">

          <div className="stack-card__info">
            <hr className="stack-card__divider" />
            <p className="stack-card__desc">{project.desc}</p>

            {project.tags?.length > 0 && (
              <div className="stack-card__tags">
                {project.tags.map(t => (
                  <span key={t} className="stack-card__tag">{t}</span>
                ))}
              </div>
            )}

            {creditStr && (
              <p className="stack-card__credit">{creditStr}</p>
            )}

            {project.detailPath && (
              <button
                className="stack-card__btn"
                onClick={() => navigate(project.detailPath)}
              >
                View Project →
              </button>
            )}
          </div>

          <div className="stack-card__visual">
            {project.iconType === 'image' && project.icon
              ? <img src={project.icon} alt="" className="stack-card__icon-img" />
              : <span className="stack-card__icon-emoji">{project.icon}</span>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default function ProjectFolders({ projects }) {
  return (
    <section id="projects" className="section folders-section">

      {/* Preamble */}
      <div className="folders-preamble">
        <div className="folders-preamble__top">
          <p className="section__label">Active Digital Solutions</p>
          <span className="folders-preamble__count">{projects.length} tools deployed</span>
        </div>
        <ScrollRevealText text="Built & Running" className="folders-preamble__title" />
        <ScrollRevealText
          text="We categorize our work into three themes — each one designed around the people who live inside a hospital every day."
          className="folders-preamble__body"
        />
      </div>

      {CATEGORIES.map(({ key, label, accent, tagline, slogan, prose, banner, bannerGradient }) => {
        const group = projects.filter(p => p.category === key)
        if (!group.length) return null
        return (
          <div key={key} className="stack-group">

            {/* Category banner */}
            <BannerStrip banner={banner} bannerGradient={bannerGradient} accent={accent} slogan={slogan} />

            {/* Category header */}
            <div className="folders-group__header">
              <h2 className="folders-group__title" style={{ color: accent }}>
                {label}
              </h2>
              <div className="folders-group__meta">
                <ScrollRevealText text={tagline} className="folders-group__tagline" />
                <ScrollRevealText text={prose} className="folders-group__prose" />
              </div>
            </div>

            {/* Sticky stacking cards */}
            <div className="stack-cards-track">
              {group.map((p, i) => (
                <StackCard key={p.num} project={p} idx={i} accent={accent} categoryLabel={label} />
              ))}
            </div>

          </div>
        )
      })}

    </section>
  )
}
