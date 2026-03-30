import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, kivItems } from '../data/projects'
import ElectricBorder from './ElectricBorder'
import AnimatedCounter from './AnimatedCounter'

function CreditLine({ credit }) {
  if (credit.aiTeam) {
    return (
      <div className="card-credit">
        <span className="credit-label">Co-developed by</span> {credit.aiTeam}
        {credit.coAuthor && (
          <> &nbsp;·&nbsp; {credit.coAuthor}{' '}
            {credit.dept && <span className="credit-dept">({credit.dept})</span>}
          </>
        )}
      </div>
    )
  }
  return (
    <div className="card-credit">
      <span className="credit-label">Co-developed by</span> {credit.by}{' '}
      {credit.dept && <span className="credit-dept">({credit.dept})</span>}
    </div>
  )
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'patient', label: "Patient's Journey" },
  { key: 'doctor', label: "Doctor's Journey" },
  { key: 'management', label: 'Management Productivity' },
]

const CATEGORY_INTROS = {
  patient: {
    label: "Patient's Journey",
    accent: '#f06292',
    tagline: 'Patients arrive prepared.',
    desc: "Tools that put the hospital in the patient's hands — before the consultation even starts. Scan a QR code in the waiting room, fill your history on your phone, log your baby's kicks from your ward bed. By the time the doctor walks in, the groundwork is already done.",
  },
  doctor: {
    label: "Doctor's Journey",
    accent: '#0ea5a0',
    tagline: 'Less admin. More medicine.',
    desc: 'Every tool here buys back time. Generate a personalised medication guide in seconds. Book an OT slot without a phone call. Log a procedure without a paper form. Small frictions, eliminated — so the clinical mind can stay on the patient.',
  },
  management: {
    label: 'Management Productivity',
    accent: '#00e5a0',
    tagline: 'Real data. Real time. Real decisions.',
    desc: 'Dashboards that surface what matters, rosters that write themselves, audits that don\'t need paper, and reports that generate on submission. For the people running the hospital — less chasing, more leading.',
  },
}

const CATEGORY_ORDER = ['patient', 'doctor', 'management']

const statCount = (cat) => projects.filter(p => p.category === cat).length
const aiCount = projects.filter(p => p.tags.some(t => ['AI', 'AI Vision', 'Gemini'].includes(t))).length

const STATS = [
  { label: "Patient's Journey", count: statCount('patient'), accent: '#f06292' },
  { label: "Doctor's Journey",  count: statCount('doctor'),  accent: '#0ea5a0' },
  { label: 'Management Productivity', count: statCount('management'), accent: '#00e5a0' },
  { label: 'AI-Enhanced Tools', count: aiCount, accent: '#6366f1' },
]

function renderCard(project) {
  const card = (
    <div
      key={project.num}
      className={`project-card${project.cardBg ? ' has-card-bg' : ''}`}
      style={{
        '--card-accent': project.accent,
        ...(project.cardBg && { '--card-bg-img': `url(${project.cardBg})` }),
      }}
    >
      <div className="card-header">
        <span className="card-num">{project.num}</span>
        <span className={`card-status status-${project.status}`}>
          {project.status === 'live' ? 'Live' : project.status === 'demo' ? '⚗ Demo' : 'Under Maintenance'}
        </span>
      </div>
      {project.badges && project.badges.length > 0 && (
        <div className="card-badges">
          {project.badges.map(b => <span key={b} className="card-badge-extra">{b}</span>)}
        </div>
      )}
      <div className={`card-category-badge ${project.category}-badge`}>
        {project.categoryLabel}
      </div>
      <div className="card-icon">
        {project.iconType === 'image'
          ? <img src={project.icon} alt={project.title} style={{ width: '112px', height: '112px', objectFit: 'contain' }} />
          : project.icon}
      </div>
      <div className="card-title">{project.title}</div>
      <div className="card-desc">{project.desc}</div>
      <CreditLine credit={project.credit} />
      <div className="card-tags">
        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      {project.detailPath && (
        <Link to={project.detailPath} className="card-view-btn">
          View Project →
        </Link>
      )}
      {project.href && (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="card-view-btn">
          View Project →
        </a>
      )}
    </div>
  )

  return (project.detailPath || project.href)
    ? <ElectricBorder key={project.num} color={project.accent}>{card}</ElectricBorder>
    : <div key={project.num}>{card}</div>
}

function CategorySection({ category, projectList }) {
  const intro = CATEGORY_INTROS[category]
  return (
    <div className="category-section">
      {intro && (
        <div className="category-intro" style={{ '--cat-accent': intro.accent }}>
          <div className="category-intro-label">{intro.label}</div>
          <p className="category-intro-tagline">"{intro.tagline}"</p>
          <p className="category-intro-desc">{intro.desc}</p>
        </div>
      )}
      <div className="projects-grid">
        {projectList.map(project => renderCard(project))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section id="projects">
      <div className="section-label">01 — Core Projects</div>
      <h2 className="section-title">Active Digital Solutions</h2>
      <p className="section-desc">
        Eighteen tools live across clinical, patient-facing, management, and AI utility functions — built in-house by the AI Team and frontline staff.
      </p>

      <div className="projects-stats-row">
        {STATS.map(s => (
          <div key={s.label} className="projects-stat-card" style={{ '--stat-accent': s.accent }}>
            <div className="projects-stat-num">
              <AnimatedCounter to={s.count} duration={1600} />
            </div>
            <div className="projects-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-swipe-hint" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Swipe to explore
      </div>

      {activeFilter === 'all'
        ? CATEGORY_ORDER.map(cat => {
            const catProjects = projects.filter(p => p.category === cat)
            if (!catProjects.length) return null
            return <CategorySection key={cat} category={cat} projectList={catProjects} />
          })
        : <CategorySection
            category={activeFilter}
            projectList={projects.filter(p => p.category === activeFilter)}
          />
      }

      {/* KIV */}
      <div className="kiv-section">
        <div className="section-label">02 — KIV</div>
        <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
          In Development
        </h3>
        <p className="section-desc">
          Projects under active consideration and scoping — awaiting resources or dependencies before full build.
        </p>
        <div className="kiv-grid">
          {kivItems.map(item => (
            <div key={item.num} className="kiv-card">
              <div className="card-header">
                <span className="card-num">{item.num}</span>
                <span className="card-status status-kiv">KIV</span>
              </div>
              <div className="card-icon">{item.icon}</div>
              <div className="card-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {item.title}
              </div>
              <div className="card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
