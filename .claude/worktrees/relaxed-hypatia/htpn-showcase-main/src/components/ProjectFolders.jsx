import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollRevealText from './ScrollRevealText'
import { screenshotFor, cardPositionFor } from '../data/screenshots'

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
    label: "Clinician's Journey",
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
  { key: 'total', label: 'Total Apps', accent: '#F0C832', count: (ps) => ps.length },
  ...CATEGORIES.map(({ key, label, accent }) => ({ key, label, accent, filter: (p) => p.category === key })),
  {
    key: 'ai',
    label: 'AI-Enhanced Tools',
    accent: AI_ACCENT,
    filter: (p) => p.tags?.some(t => /\bai\b/i.test(t)),
  },
  { key: 'facilities', label: 'Facilities Involved', accent: '#f5f5f0', count: (ps) => new Set(ps.map(p => p.facility).filter(Boolean)).size },
]

/* Animated counter card */
function StatCard({ statKey, label, accent, count }) {
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
    <div className={`folders-stat-card folders-stat-card--${statKey}`} style={{ '--accent': accent }}>
      <span ref={numRef} className="folders-stat-card__num">0</span>
      <span className="folders-stat-card__label">{label}</span>
    </div>
  )
}

function CategoryStats({ projects }) {
  return (
    <div className="folders-stats">
      {STAT_ITEMS.map(({ key, label, accent, filter, count }) => (
        <StatCard key={key} statKey={key} label={label} accent={accent} count={count ? count(projects) : projects.filter(filter).length} />
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

      {screenshotFor(project.detailPath) && (
        <div className="pcard__shot">
          <img src={screenshotFor(project.detailPath)} alt={`${project.title} mobile view`} loading="lazy" style={{ objectPosition: cardPositionFor(project.detailPath) }} />
          <span className="pcard__shot-title">{project.title.split(' — ')[0]}</span>
        </div>
      )}

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
  const [idx, setIdx] = useState(0)
  const [atEnd, setAtEnd] = useState(items.length <= 1)

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.pcard')
    const step = card ? card.getBoundingClientRect().width + 20 : 340
    el.scrollBy({ left: dir * step * 2, behavior: 'smooth' })
  }

  const goTo = (i) => {
    const el = trackRef.current
    const card = el?.children[i]
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    let best = 0, bestDist = Infinity
    for (let i = 0; i < el.children.length; i++) {
      const d = Math.abs(el.children[i].offsetLeft - el.offsetLeft - el.scrollLeft)
      if (d < bestDist) { bestDist = d; best = i }
    }
    setIdx(best)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }

  return (
    <div className={`hrow${atEnd ? ' hrow--end' : ''}`} style={{ '--accent': accent }}>
      <div className="hrow__head">
        <span className="hrow__label">
          {rowCount > 1 ? `Row ${rowNo} · ` : ''}{items.length} {items.length === 1 ? 'project' : 'projects'}
        </span>
        <div className="hrow__arrows">
          <button type="button" className="hrow__arrow" aria-label="Scroll left" onClick={() => scrollBy(-1)}>←</button>
          <button type="button" className="hrow__arrow" aria-label="Scroll right" onClick={() => scrollBy(1)}>→</button>
        </div>
        {items.length > 1 && (
          <span className="hrow__hint" aria-hidden="true">
            {idx + 1} / {items.length} · {atEnd ? 'End' : 'Swipe'} <span className="hrow__hint-arrow">{atEnd ? '' : '→'}</span>
          </span>
        )}
      </div>
      <div ref={trackRef} className="hrow__track" onScroll={onScroll}>
        {items.map(p => (
          <ProjectCard key={p.num} project={p} accent={accent} categoryLabel={label} navigate={navigate} />
        ))}
      </div>
      {items.length > 1 && (
        <div className="hrow__dots" role="group" aria-label="Choose project in this row">
          {items.map((p, i) => (
            <button
              key={p.num}
              type="button"
              className={`hrow__dot${i === idx ? ' is-active' : ''}`}
              aria-label={`Go to project ${i + 1} of ${items.length}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* Split a category into rows of ROW_SIZE cards, each row scrolling horizontally */
const ROW_SIZE = 5
function CardRows({ group, accent, label, rowSize = ROW_SIZE }) {
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

/* Search across title, description, tags, credit, facility, category, number and status */
function searchText(p) {
  const c = p.credit || {}
  return [p.num, p.title, p.desc, (p.tags || []).join(' '), c.by, c.dept, c.coAuthor, c.aiTeam,
    p.facility, p.categoryLabel, p.status === 'dev' ? 'in development' : p.status].join(' ').toLowerCase()
}

function ProjectSearch({ projects, query, setQuery, cat, setCat }) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const active = terms.length > 0 || cat !== 'all'
  const results = useMemo(() => {
    if (!active) return []
    return projects
      .filter(p => (cat === 'all' || p.category === cat) && (() => { const t = searchText(p); return terms.every(w => t.includes(w)) })())
      .sort((a, b) => parseInt(a.num.replace('#', '')) - parseInt(b.num.replace('#', '')))
  }, [projects, query, cat])
  const catOf = (key) => CATEGORIES.find(c => c.key === key) || CATEGORIES[0]

  // "/" jumps to the search box (unless already typing somewhere)
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || '').toLowerCase()
      if (e.key === '/' && tag !== 'input' && tag !== 'textarea' && !e.target.isContentEditable) {
        e.preventDefault()
        inputRef.current?.focus()
        inputRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const reset = () => { setQuery(''); setCat('all') }
  const chips = [{ key: 'all', label: `All ${projects.length}` }, ...CATEGORIES.map(c => ({ key: c.key, label: c.label, accent: c.accent }))]

  return (
    <div className="psearch" id="app-search">
      <div className="psearch__head">
        <span className="psearch__eyebrow">Find an app</span>
        <span className="psearch__sub">Search all {projects.length} apps by name, topic, hospital or author</span>
      </div>
      <div className="psearch__box">
        <svg className="psearch__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
        <input
          ref={inputRef}
          type="search"
          className="psearch__input"
          placeholder="Try “diabetes” or “roster”…"
          aria-label="Search apps"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => { if (e.key === 'Escape') reset() }}
        />
        {query ? (
          <button type="button" className="psearch__clear" aria-label="Clear search" onClick={() => setQuery('')}>✕</button>
        ) : (
          <kbd className="psearch__kbd" aria-hidden="true">/</kbd>
        )}
      </div>
      <div className="psearch__chips" role="group" aria-label="Filter by category">
        {chips.map(c => (
          <button
            key={c.key}
            type="button"
            className={`psearch__chip${cat === c.key ? ' is-active' : ''}`}
            style={c.accent ? { '--chip': c.accent } : undefined}
            aria-pressed={cat === c.key}
            onClick={() => setCat(c.key)}
          >{c.label}</button>
        ))}
      </div>

      {active && (
        <div className="psearch__results">
          <p className="psearch__count" role="status">
            {results.length === 0
              ? `No apps match${query.trim() ? ` “${query.trim()}”` : ''}`
              : `${results.length} ${results.length === 1 ? 'app' : 'apps'} found`}
            <button type="button" className="psearch__reset" onClick={reset}>Clear all</button>
          </p>
          {results.length > 0 && (
            <div className="psearch__grid">
              {results.map(p => {
                const c = catOf(p.category)
                return <ProjectCard key={p.num} project={p} accent={c.accent} categoryLabel={p.categoryLabel || c.label} navigate={navigate} />
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function ProjectFolders({ projects }) {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')
  const searching = query.trim().length > 0 || cat !== 'all'
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

      <ProjectSearch projects={projects} query={query} setQuery={setQuery} cat={cat} setCat={setCat} />

      {!searching && CATEGORIES.map(({ key, label, accent, tagline, slogan, prose, banner, bannerGradient }) => {
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
            <CardRows group={group} accent={accent} label={label} />
          </div>
        )
      })}

    </section>
  )
}
