import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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
    slogan: 'Patients arrive prepared, not blank.',
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

function FolderCard({ project, idx, accent, categoryLabel }) {
  const ref = useRef(null)
  const navigate = useNavigate()
  const [popover, setPopover] = useState(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        delay: idx * 0.06,
      }
    )
    const dismiss = () => setPopover(null)
    window.addEventListener('scroll', dismiss, { passive: true })
    return () => window.removeEventListener('scroll', dismiss)
  }, [])

  const isMobile = () => window.matchMedia('(hover: none)').matches || window.innerWidth <= 600

  const onEnter = () => {
    if (isMobile()) return
    const cardRect = ref.current.getBoundingClientRect()
    const row = ref.current.closest('.folders-row')
    const rowRect = row?.getBoundingClientRect()
    setPopover({
      top: cardRect.top,
      left: rowRect?.left ?? cardRect.left,
      width: rowRect?.width ?? cardRect.width,
      mobile: false,
    })
  }
  const onLeave = () => {
    gsap.to(ref.current, { y: 0, scale: 1, duration: 0.35, ease: 'power2.inOut' })
    setPopover(null)
  }
  const onTap = (e) => {
    if (!isMobile()) { navigate(project.detailPath); return }
    if (popover) return
    e.stopPropagation()
    setPopover({ mobile: true })
  }

  const popoverEl = popover && createPortal(
    <>
      {popover.mobile && (
        <div className="card-popover__backdrop" onClick={() => setPopover(null)} />
      )}
      <div
        className={`card-popover${popover.mobile ? ' card-popover--mobile' : ''}`}
        style={popover.mobile
          ? { '--accent': accent }
          : { top: popover.top, left: popover.left, width: popover.width, '--accent': accent }
        }
        onMouseEnter={() => !popover.mobile && setPopover(popover)}
        onMouseLeave={() => !popover.mobile && onLeave()}
      >
      <div className="card-popover__left">
        <div className="card-popover__icon">
          {project.iconType === 'image' && project.icon
            ? <img src={project.icon} alt="" />
            : <span>{project.icon}</span>
          }
        </div>
        <div className="card-popover__header">
          <span className="card-popover__num">{project.num}</span>
          {project.status === 'live' && <span className="card-popover__live">LIVE</span>}
        </div>
      </div>
      <div className="card-popover__right">
        <span className="card-popover__cat" style={{ color: accent, borderColor: accent + '55' }}>
          {categoryLabel}
        </span>
        <h3 className="card-popover__title">{project.title}</h3>
        <p className="card-popover__desc">{project.desc}</p>
        {project.credit && (
          <p className="card-popover__credit">
            Co-developed by <strong>{project.credit.by}</strong>{' '}
            <em>({project.credit.dept})</em>
          </p>
        )}
        {project.tags?.length > 0 && (
          <div className="card-popover__tags">
            {project.tags.map(t => <span key={t} className="card-popover__tag">{t}</span>)}
          </div>
        )}
        <button
          className="card-popover__btn"
          onClick={() => navigate(project.detailPath)}
        >
          VIEW PROJECT →
        </button>
      </div>
    </div>
    </>,
    document.body
  )

  return (
    <>
      <div
        ref={ref}
        className="folder-card"
        style={{ '--accent': accent }}
        onClick={onTap}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="folder-card__top">
          {project.iconType === 'image' && project.icon
            ? <img src={project.icon} alt="" className="folder-card__img" />
            : <span className="folder-card__emoji">{project.icon}</span>
          }
        </div>
        <span className="folder-card__title">{project.title}</span>
        <span className="folder-card__num">{project.num}</span>
        <div className="folder-card__bar" />
      </div>
      {popoverEl}
    </>
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
          <div key={key} className="folders-group">

            {/* Banner image strip */}
            <div
              className="folders-group__banner"
              style={{
                background: bannerGradient,
                borderTop: `2px solid ${accent}22`,
              }}
            >
              <img
                src={banner}
                alt=""
                className="folders-group__banner-img"
              />
              <div className="folders-group__banner-overlay" />
              <ScrollRevealText text={slogan} className="folders-group__slogan" />
            </div>

            <div className="folders-group__header">
              <h2 className="folders-group__title" style={{ color: accent }}>
                {label}
              </h2>
              <div className="folders-group__meta">
                <ScrollRevealText text={tagline} className="folders-group__tagline" />
                <ScrollRevealText text={prose} className="folders-group__prose" />
              </div>
            </div>

            <div className="folders-row">
              {group.map((p, i) => (
                <FolderCard key={p.detailPath} project={p} idx={i} accent={accent} categoryLabel={label} />
              ))}
            </div>
          </div>
        )
      })}

    </section>
  )
}
