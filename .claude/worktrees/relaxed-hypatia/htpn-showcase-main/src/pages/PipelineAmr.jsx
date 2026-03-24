import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ACCENT = '#7C3AED'

const specs = [
  { label: 'Robot Model', value: 'NEO-6' },
  { label: 'POC Partner', value: 'Delta Global Automation Sdn Bhd' },
  { label: 'Route', value: 'Emergency Dept → Pathology Lab' },
  { label: 'Status', value: 'POC In Progress · Started Dec 2024' },
]

const pocPhases = [
  {
    phase: 'Phase 1',
    weeks: 'Weeks 1–4',
    items: ['Hardware installation', 'Robot configuration', 'SHiS software integration', 'Staff training'],
  },
  {
    phase: 'Phase 2',
    weeks: 'Weeks 5–8',
    items: ['Limited trial delivery', 'Performance monitoring', 'Staff feedback collection'],
  },
  {
    phase: 'Phase 3',
    weeks: 'Weeks 9–12',
    items: ['Full-scale deployment', 'All routes activated', 'System optimisation'],
  },
  {
    phase: 'Phase 4',
    weeks: 'Weeks 13–14',
    items: ['Data collection & analysis', 'Final report preparation', 'Recommendations to KKM'],
  },
]

const benefits = [
  { title: 'Faster Lab TAT', desc: 'Specimens reach the Pathology Lab faster — cutting turnaround time and accelerating clinical decisions in the ED.' },
  { title: 'Better Patient Outcomes', desc: 'Quicker lab results mean faster diagnosis and treatment initiation for emergency patients.' },
  { title: 'Staff Time Reclaimed', desc: 'Nursing and clinical staff freed from specimen transport runs — more time at the bedside.' },
  { title: 'Safer Specimen Handling', desc: 'Secured compartment with biometric access and GPS tracking ensures chain of custody at every step.' },
]

export default function PipelineAmr() {
  return (
    <>
      <Navbar />
      <main className="project-page">

        <div className="project-page-back">
          <Link to="/#pipeline" className="back-link">← Back to Pipeline</Link>
        </div>

        <div className="project-page-header">
          <div className="project-page-meta">
            <span className="card-status status-pipeline">Pipeline</span>
            <span className="demo-badge" style={{ background: 'rgba(124,58,237,0.1)', color: ACCENT, borderColor: 'rgba(124,58,237,0.3)' }}>POC In Progress</span>
          </div>
          <div className="project-page-title-row">
            <span style={{ fontSize: '3rem', lineHeight: 1 }}>🤖</span>
            <h1 className="project-page-title">AMR — Autonomous Mobile Robot</h1>
          </div>
          <p className="project-page-subtitle">
            A Proof of Concept for deploying an autonomous mobile robot to transport laboratory specimens from the Emergency Department to the Pathology Lab
          </p>
          <p className="demo-note" style={{ marginTop: 0 }}>
            POC initiated December 2024 · Endorsed by Jabatan Kesihatan Negeri Selangor
          </p>
        </div>

        <div className="project-page-specs">
          {specs.map(s => (
            <div key={s.label} className="spec-card">
              <div className="spec-label">{s.label}</div>
              <div className="spec-value">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Problem / Solution */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">⚠️ The Problem</h2>
            <ul className="feature-list">
              <li>ED staff manually ferrying specimens to Pathology Lab</li>
              <li>Delayed test results due to transport lag</li>
              <li>Risk of specimen mislabelling or damage in transit</li>
              <li>Valuable nursing and clinical time lost to logistics</li>
            </ul>
          </div>
          <div className="project-page-block-inner" style={{ borderColor: 'rgba(5,150,105,0.25)', background: 'rgba(5,150,105,0.03)' }}>
            <h2 className="block-title" style={{ color: '#059669' }}>✅ The Solution</h2>
            <ul className="feature-list">
              <li>AMR navigates autonomously from ED to Pathology Lab</li>
              <li>Secured specimen compartment — biometric or password access</li>
              <li>GPS tracking & geofencing for route monitoring</li>
              <li>Integrated with SHiS & MPIS hospital systems</li>
            </ul>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="project-page-block">
          <h2 className="block-title">Technical Specifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { label: 'Robot Model', value: 'NEO-6' },
              { label: 'Software Platform', value: 'SHiS Platform' },
              { label: 'Hospital Integration', value: 'MPIS via API / HL7' },
              { label: 'Access Control', value: 'Biometric + Password' },
              { label: 'Route Tracking', value: 'GPS + Geofencing' },
              { label: 'Fleet Management', value: 'Multi-robot under one system' },
            ].map(row => (
              <div key={row.label} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '0.65rem 1rem', background: 'var(--bg2)', borderRadius: '8px',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: '160px' }}>{row.label}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* POC Timeline */}
        <div className="project-page-block">
          <h2 className="block-title">POC Timeline — 14 Weeks</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {pocPhases.map((p, i) => (
              <div key={p.phase} style={{
                background: 'var(--bg2)', borderRadius: '10px', padding: '1rem',
                borderLeft: `3px solid ${ACCENT}`,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: ACCENT, marginBottom: '0.2rem' }}>{p.phase}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>{p.weeks}</div>
                <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {p.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.82rem', color: 'var(--text2)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="project-page-block">
          <h2 className="block-title">Expected Benefits</h2>
          <div className="metrics-grid">
            {benefits.map(b => (
              <div key={b.title} className="metric-card">
                <div className="metric-dot" style={{ background: ACCENT }} />
                <div>
                  <div className="metric-title">{b.title}</div>
                  <div className="metric-sub">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POC Partner */}
        <div className="project-page-block">
          <h2 className="block-title">POC Partner — Delta Global Automation Sdn Bhd</h2>
          <p className="block-text">
            All POC implementation costs are borne by Delta Global Automation Sdn Bhd. A minimum 3-year service contract covers hardware &amp; software maintenance, system upgrades, offline support, and staff training. The POC was initiated in December 2024 and has been endorsed by Jabatan Kesihatan Negeri Selangor.
          </p>
        </div>

      </main>
      <Footer />
    </>
  )
}
