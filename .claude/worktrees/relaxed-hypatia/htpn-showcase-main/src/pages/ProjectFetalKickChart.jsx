import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = '/fkc.html'
const ACCENT = '#dc2626'

export default function ProjectFetalKickChart() {
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#projects')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <div className="detail-container">

        {/* Back */}
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        {/* Header */}
        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( Patient's Journey )</span>
            <span className="detail-num">#03</span>
            <span className="detail-badge detail-badge--live">LIVE</span>
          </div>

          <h1 className="detail-title">e-FKC HTPN — Fetal Kick Chart</h1>

          <p className="detail-subtitle">
            Digital fetal kick chart for admitted antenatal patients — real-time fetal movement logging
            with time-based alert escalation and live staff dashboard.
          </p>

          <p className="detail-credit">
            Matron Norziah, KJ Manimala, KJ Zanariah, KJ Nur Azimah · O&amp;G Dept, HTPN
          </p>

          <div className="detail-disclaimer">
            ⚠️ This tool supports clinical decision-making and does not replace professional clinical judgment.
          </div>

          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
            Open Demo →
          </a>

          <div className="prd-tags" style={{ marginTop: '20px' }}>
            {['Obstetrics', 'Patient Safety', 'Maternal Health', 'Real-time'].map(tag => (
              <span key={tag} className="prd-tag">{tag}</span>
            ))}
          </div>
        </header>

        {/* Spec Cards */}
        <div className="spec-cards">
          <div className="spec-card-new">
            <div className="spec-card-new__label">Journey</div>
            <div className="spec-card-new__value" style={{ color: ACCENT }}>Patient's Journey</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Tech Stack</div>
            <div className="spec-card-new__value">Vanilla JS + Tailwind CSS + Google Sheets</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Target</div>
            <div className="spec-card-new__value">10 kicks per session</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Status</div>
            <div className="spec-card-new__value" style={{ color: 'var(--teal)' }}>Live · Deployed</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="detail-block">
          <h2 className="detail-block__title">By the Numbers</h2>
          <div className="prd-metrics">
            <div className="prd-metric">
              <div className="prd-metric__value">10</div>
              <div className="prd-metric__label">Kicks Target</div>
              <div className="prd-metric__sub">per monitoring session</div>
            </div>
            <div className="prd-metric">
              <div className="prd-metric__value">15 sec</div>
              <div className="prd-metric__label">Auto-refresh</div>
              <div className="prd-metric__sub">nursing dashboard</div>
            </div>
            <div className="prd-metric">
              <div className="prd-metric__value">2</div>
              <div className="prd-metric__label">Alert Thresholds</div>
              <div className="prd-metric__sub">orange + red escalation</div>
            </div>
          </div>
        </div>

        {/* Two Interface Sections */}
        <div className="detail-block">
          <h2 className="detail-block__title">System Interfaces</h2>
          <div className="prd-two-col">
            <div className="prd-block-inner">
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg)', marginBottom: '16px', letterSpacing: '0.05em' }}>
                Patient Interface
              </h3>
              <ul className="detail-features">
                <li>Login via IC or passport number</li>
                <li>10-box grid display with checkmarks for recorded movements</li>
                <li>Large "Bayi Saya Bergerak!" action button</li>
                <li>Timestamped kick log</li>
                <li>Completion confirmation message</li>
              </ul>
            </div>
            <div className="prd-block-inner">
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg)', marginBottom: '16px', letterSpacing: '0.05em' }}>
                Nursing Dashboard
              </h3>
              <ul className="detail-features">
                <li>Separate staff login (username + password)</li>
                <li>Real-time patient table with progress bars</li>
                <li>Add / discharge patient functionality</li>
                <li>Auto-refreshing data every 15 seconds</li>
                <li>Instant visibility across all admitted patients</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alert Levels */}
        <div className="detail-block">
          <h2 className="detail-block__title">Time-Based Alert Escalation</h2>
          <div className="prd-alerts">
            <div className="prd-alert prd-alert--green">
              <div className="prd-alert__icon">✅</div>
              <div className="prd-alert__title">Target Met</div>
              <p className="prd-alert__desc">
                10 kicks recorded. Patient has met the daily movement target. Dashboard shows green
                completion status.
              </p>
            </div>
            <div className="prd-alert prd-alert--orange">
              <div className="prd-alert__icon">⚠️</div>
              <div className="prd-alert__title">5 PM Warning</div>
              <p className="prd-alert__desc">
                Under 5 kicks by 5 PM. Orange warning triggered. Staff notified to follow up with the
                patient.
              </p>
            </div>
            <div className="prd-alert prd-alert--red">
              <div className="prd-alert__icon">🔴</div>
              <div className="prd-alert__title">8 PM Critical</div>
              <p className="prd-alert__desc">
                Under 10 kicks by 8 PM. Red critical alert escalated. Clinical review required immediately.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="detail-block">
          <h2 className="detail-block__title">How It Works</h2>
          <div className="prd-workflow">
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">01</div>
              <div className="prd-workflow-step__title">Patient Login</div>
              <p className="prd-workflow-step__desc">
                Admitted antenatal patient logs in via IC or passport number on any phone or ward tablet.
              </p>
            </div>
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">02</div>
              <div className="prd-workflow-step__title">Log Movements</div>
              <p className="prd-workflow-step__desc">
                Patient taps "Bayi Saya Bergerak!" each time fetal movement is felt. Each tap is
                timestamped and recorded automatically.
              </p>
            </div>
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">03</div>
              <div className="prd-workflow-step__title">Staff Monitoring</div>
              <p className="prd-workflow-step__desc">
                Nursing dashboard auto-refreshes every 15 seconds, showing all patients' progress with
                colour-coded alerts for time-based escalation.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="detail-block">
          <h2 className="detail-block__title">Technical Implementation</h2>
          <ul className="detail-features">
            <li>Frontend: Vanilla JavaScript + Tailwind CSS</li>
            <li>Backend: Google Sheets (live data via Apps Script)</li>
            <li>Architecture: Single HTML file with real-time Apps Script integration</li>
            <li>No app install required — runs on any smartphone or ward tablet</li>
          </ul>
        </div>

        {/* Credit */}
        <div className="detail-block">
          <div className="prd-credit-box">
            <div className="prd-credit-box__label">Built By</div>
            <div className="prd-credit-box__value">
              Matron Norziah, KJ Manimala, KJ Zanariah, KJ Nur Azimah · O&amp;G Dept, Hospital Tengku
              Permaisuri Norashikin
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="detail-block__cta">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
            Open Demo →
          </a>
          <button className="detail-back" onClick={handleBack}>← Back to Projects</button>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
