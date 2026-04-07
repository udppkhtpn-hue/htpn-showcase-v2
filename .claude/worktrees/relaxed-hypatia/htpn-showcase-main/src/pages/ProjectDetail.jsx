import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import GalleryStrip from '../components/GalleryStrip'
import SiteNavigator from '../components/SiteNavigator'
import { projects } from '../data/projects'
import '../styles/detail.css'

const DEMO_LINKS = {
  'preconsult-gynae':     '/gynae-preconsult.html',
  'preconsult-obstetric': '/obstetric-preconsult.html',
  'fetal-kick-chart':     '/fkc.html',
  'skin-diary':           '/skin-diary.html',
  'ot-scheduling':        '/ot-scheduling.html',
  'gynae-census':         'https://script.google.com/a/macros/moh.gov.my/s/AKfycbxjbhFlte-FSS9MgkDRWJhrqy01vCwd8rTqedzatYgr-1tWXYO6EePCKP7c3pCmZTVNyg/exec',
  'ebl-estimator':        'https://eblcalcwcc.netlify.app/',
  'therapy-ai':           'https://therapy-ai-pipeline-eidzkvy7zqqucyufuuhxiq.streamlit.app',
  'ed-dashboard':         'https://script.google.com/a/macros/moh.gov.my/s/AKfycbwyz2Fiuu4bVMNmD8V-F-jG9njwAG9FwS03eALdKpinMcDcjZoKoXjs250FnOQWazqH/exec?authuser=2',
  'dlp-dashboard':        'https://wcc-dlp-dashboard-nyjojnbhf4abxcsmb3djd4.streamlit.app',
  'roster-generator':     '/rostergenerator.html',
  'cgr-form':             'https://script.google.com/macros/s/AKfycby6d80XdGAZ3NrbHZ_Lee0KnT14VrW5PkKCQepLAW9sv1YhQrw2ya2UNN2gF0CYDR9L8A/exec',
  'dlp-form':             '/dlp-form.html',
  'pdf-editor':           'https://notebookllm-slide-deck-text-editor.vercel.app/',
  'portal-aktiviti':      'https://s3vfpr.csb.app/',
  'incident-form':        '/incident-form.html',
}

const CLINICAL = new Set(['ebl-estimator', 'therapy-ai', 'ed-dashboard', 'preconsult-gynae', 'preconsult-obstetric', 'fetal-kick-chart'])

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const project = projects.find(p => p.detailPath === `/projects/${slug}`)

  if (!project) return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={() => navigate('/')}>← Back</button>
        <p style={{ color: 'var(--muted)' }}>Project not found.</p>
      </div>
      <Footer />
    </div>
  )

  const demoUrl = DEMO_LINKS[slug]
  const isClinical = CLINICAL.has(slug)
  const creditStr = [project.credit?.by, project.credit?.aiTeam, project.credit?.coAuthor]
    .filter(Boolean).join(', ') + (project.credit?.dept ? ` · ${project.credit.dept}` : '')

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#projects')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <header className="detail-header">
          <img
            src="/HTPN CIO logo.jpg"
            alt="HTPN Clinical Intelligence Office"
            className="detail-cio-logo"
          />
          <div className="detail-meta">
            <span className="detail-journey">( {project.categoryLabel} )</span>
            <span className="detail-num">{project.num}</span>
            <span className="detail-badge detail-badge--live">LIVE</span>
          </div>

          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.desc}</p>
          {creditStr && <p className="detail-credit">Built by {creditStr}</p>}

          {isClinical && (
            <div className="detail-disclaimer">
              ⚠️ This tool supports clinical decision-making and does not replace professional clinical judgment.
            </div>
          )}

          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-demo-btn"
              style={{ background: project.accent || 'var(--teal)', color: '#0a0a0a' }}
            >
              Open Demo →
            </a>
          ) : (
            <span className="detail-demo-btn detail-demo-btn--disabled">Demo not available</span>
          )}
        </header>

        <GalleryStrip label="Screenshot" />

        <div className="spec-cards">
          <div className="spec-card-new">
            <div className="spec-card-new__label">Journey</div>
            <div className="spec-card-new__value" style={{ color: project.accent }}>{project.categoryLabel}</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Tags</div>
            <div className="spec-card-new__value">{project.tags?.join(' · ')}</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Status</div>
            <div className="spec-card-new__value" style={{ color: 'var(--teal)' }}>Live · Deployed</div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">What it is</h2>
          <p className="detail-block__text">{project.desc}</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Key Features</h2>
          <ul className="detail-features">
            {project.tags?.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Who it is for</h2>
          <p className="detail-block__text">
            Designed for clinical and administrative staff at HTPN and affiliated hospitals within KKM.
            Built by clinicians who understand the daily workflow challenges this tool addresses.
          </p>
        </div>

        <div className="detail-block__cta">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer"
              className="detail-demo-btn"
              style={{ background: project.accent || 'var(--teal)', color: '#0a0a0a' }}>
              Open Demo →
            </a>
          )}
          <button className="detail-back" onClick={handleBack}>← Back to Projects</button>
        </div>
      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
