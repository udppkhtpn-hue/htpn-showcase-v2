import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://script.google.com/macros/s/AKfycby6d80XdGAZ3NrbHZ_Lee0KnT14VrW5PkKCQepLAW9sv1YhQrw2ya2UNN2gF0CYDR9L8A/exec'
const ACCENT = '#c084fc'

const visitFields = [
  { label: 'Auditor name', desc: 'Free text (Dr. / Pn. / En.)' },
  { label: 'Position / unit', desc: 'Free text' },
  { label: 'Department visited', desc: 'Dropdown selector' },
  { label: 'Date & start time', desc: 'Date + time pickers' },
]

const checklists = [
  { num: '1', label: 'General Ward Observation' },
  { num: '2', label: 'Fire Safety' },
  { num: '3', label: 'Infection Control' },
  { num: '4–10', label: 'Nursing' },
  { num: '11', label: 'Quality' },
  { num: '12', label: 'Asset Management' },
  { num: '13', label: 'Engineering Services' },
  { num: '14', label: 'Emergency Department (ETD)' },
  { num: '16', label: 'Dietary & Food Services (JDS)' },
  { num: '17', label: 'OSH Workplace Inspection' },
]

const auditFields = [
  { label: 'Status', desc: '3-button toggle: Compliant ✅ / Needs Improvement ⚠️ / Non-compliant ❌ / N/A' },
  { label: 'Finding', desc: 'Free-text field to describe what was observed' },
  { label: 'Corrective action', desc: 'Free-text field for recommended action' },
  { label: 'Follow-up finding', desc: 'Free-text for follow-up observations' },
]

export default function CgrForm() {
  return (
    <>
      <Navbar />
      <main className="project-page">

        {/* Back */}
        <div className="project-page-back">
          <Link to="/#projects" className="back-link">← Back to Projects</Link>
        </div>

        {/* Header */}
        <div className="project-page-header">
          <div className="project-page-meta">
            <span className="card-num">#12</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(192,132,252,0.12)', color: ACCENT, borderColor: 'rgba(192,132,252,0.35)' }}>
              Live Tool · Google Apps Script
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-cgr.png" alt="CGR Web Form" className="project-page-logo" />
            <h1 className="project-page-title">CGR Web Form</h1>
          </div>
          <p className="project-page-subtitle">
            CGR 2026 — Digital Clinical Governance Round Audit Form for HTPN
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Fairis &nbsp;·&nbsp; Dr Aina <span>(Risk Management &amp; Clinical Surveillance)</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Web Form →
          </a>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Platform</div>
            <div className="spec-value">Google Apps Script</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Languages</div>
            <div className="spec-value">English &amp; BM toggle</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Checklists</div>
            <div className="spec-value">10 domains</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A digital audit form for conducting Clinical Governance Rounds (CGR) at HTPN. Auditors —
            doctors, nurses, or department heads — use this web app during physical ward rounds to record
            their findings against standardised checklists across 10 clinical and operational domains.
            Submissions are saved to a Google Sheets backend for tracking and reporting. It fully replaces
            paper-based CGR audit forms and is designed to be used on a{' '}
            <strong style={{ color: 'var(--text)' }}>mobile phone during the ward round itself</strong>.
          </p>
        </div>

        {/* Section 1 — Visit info */}
        <div className="project-page-block">
          <h2 className="block-title">Section 1 — Visit information</h2>
          <div className="metrics-grid">
            {visitFields.map(f => (
              <div key={f.label} className="metric-card">
                <div>
                  <div className="metric-title">{f.label}</div>
                  <div className="metric-sub">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 — Checklists */}
        <div className="project-page-block">
          <h2 className="block-title">Section 2 — Select checklists (10 domains)</h2>
          <div className="metrics-grid">
            {checklists.map(c => (
              <div key={c.num} className="metric-card">
                <div className="metric-sub" style={{ minWidth: '2.5rem' }}>No. {c.num}</div>
                <div className="metric-title" style={{ fontSize: '0.88rem' }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 — Per-question fields */}
        <div className="project-page-block">
          <h2 className="block-title">Section 3 — Per-question audit fields</h2>
          <p className="block-text" style={{ marginBottom: '1rem' }}>
            Each checklist item expands into a structured set of fields:
          </p>
          <div className="metrics-grid">
            {auditFields.map(f => (
              <div key={f.label} className="metric-card">
                <div>
                  <div className="metric-title">{f.label}</div>
                  <div className="metric-sub">{f.desc}</div>
                </div>
              </div>
            ))}
            {/* Photo field — full width */}
            <div className="metric-card" style={{ gridColumn: '1 / -1' }}>
              <div>
                <div className="metric-title">Photo</div>
                <div className="metric-sub">
                  Camera capture button — auditor taps to take an in-situ photo as evidence
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who it is for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; how it works</h2>
          <p className="block-text">
            Used by hospital auditors (doctors, nursing officers, quality team) conducting scheduled or
            ad-hoc CGRs at HTPN. The auditor selects one or more checklists relevant to the department
            being visited, fills in compliance status, findings, corrective actions, and attaches photos
            for each item. Data is submitted to Google Sheets for central monitoring by hospital
            management. The bilingual toggle (EN/BM) supports both English and Bahasa Malaysia.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Web Form →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
