import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#00e5a0'

export default function ProjectRosterGenerator() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Smart Roster Generator</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#14 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">HR</span>
          <span className="detail-tag">Automation</span>
          <span className="detail-tag">Roster</span>
          <span className="detail-tag">Scheduling</span>
          <span className="detail-tag">Offline</span>
        </div>

        <p className="detail-subtitle">Equitable on-call scheduling for medical teams — runs entirely in the browser, no server required.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">React 18 + Tailwind</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Deployment</span>
              <span className="spec-card-new__value">Single .html file (785 lines)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Backend</span>
              <span className="spec-card-new__value">None — fully offline</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live · Deployed</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <a
            href="/rostergenerator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-demo-btn"
            style={{ background: ACCENT, color: '#0a0a0a' }}
          >
            Open App →
          </a>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">How It Works</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">01</span>
              <div>
                <span className="prd-section-title">Roster Settings</span>
                <span className="prd-section-desc">Configure number of doctors per call day (1–10 range).</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">02</span>
              <div>
                <span className="prd-section-title">Public Holidays</span>
                <span className="prd-section-desc">Toggle public holidays on mini calendar — marked in amber.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">03</span>
              <div>
                <span className="prd-section-title">Medical Staff</span>
                <span className="prd-section-desc">Manual entry or CSV upload with auto-detection.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">04</span>
              <div>
                <span className="prd-section-title">Unavailability / Leave</span>
                <span className="prd-section-desc">Toggle leave dates per doctor or enter manually.</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Scheduling Algorithm</h2>
          <p className="detail-block__text">The scheduler filters doctors on leave, randomizes the remaining pool, then sorts by ascending total call count and assigns up to N doctors daily — with no same-day repeats. Workload is distributed as evenly as possible across the month.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Output Components</h2>
          <ul className="detail-features">
            <li>Month view roster with colour-coded pills per doctor</li>
            <li>Weekend/holiday distinction with visual highlighting</li>
            <li>Per-doctor breakdown with weekday vs weekend call counts</li>
            <li>Live-updating distribution dashboard</li>
            <li>PDF/Print export</li>
            <li>CSV export</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Key Features</h2>
          <ul className="detail-features">
            <li>Runs entirely in the browser — no server, no login, no data transmission</li>
            <li>Robust CSV parser handling multiple date formats</li>
            <li>Reset confirmation modal prevents accidental data loss</li>
            <li>Free to use and downloadable for offline operation</li>
            <li>Designed for medical department heads and MOs at HTPN</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Built by Dr Fairis · AI Team HTPN Kajang</span>
          </div>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
