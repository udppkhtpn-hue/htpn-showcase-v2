import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ACCENT = '#a78bfa'

const metrics = [
  { label: 'Transfer Time', value: '2–3 min', sub: 'vs 5–10 min by van' },
  { label: 'Daily Trips Replaced', value: '6–10', sub: 'one-way van runs' },
  { label: 'Operation Mode', value: 'Autonomous', sub: 'no manual guidance needed' },
  { label: 'International Precedent', value: 'NHS UK', sub: "Guy's & St Thomas' · Apian" },
]

const benefits = [
  { icon: '⚡', title: 'Faster Turnaround', desc: 'Specimens reach the lab in 2–3 minutes — no longer queued behind road traffic or vehicle availability.' },
  { icon: '🏥', title: 'Better Patient Care', desc: 'Faster specimen TAT at WCC means quicker diagnosis and treatment for women and paediatric patients.' },
  { icon: '👩‍⚕️', title: 'Staff Time Reclaimed', desc: 'Eliminates dedicated transport runs — staff and vehicles freed for clinical and operational priorities.' },
  { icon: '🔒', title: 'Reliable On-Demand', desc: 'Fully autonomous, any time of day — no scheduling, no waiting for a driver, no road dependency.' },
]

export default function PipelineDrone() {
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
            <span className="demo-badge" style={{ background: 'rgba(167,139,250,0.1)', color: ACCENT, borderColor: 'rgba(167,139,250,0.3)' }}>Planned</span>
          </div>
          <div className="project-page-title-row">
            <span style={{ fontSize: '3rem', lineHeight: 1 }}>🚁</span>
            <h1 className="project-page-title">Drone Specimen Transfer</h1>
          </div>
          <p className="project-page-subtitle">
            Drone-based transfer of specimens and medications between the Main Building and the Women & Child Centre — enabling rapid, autonomous logistics across the HTPN campus without road congestion or vehicle dependency.
          </p>
        </div>

        {/* Problem / Solution */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">⚠️ The Problem</h2>
            <ul className="feature-list">
              <li>Pathology & pharmacy cannot be duplicated at WCC — all specimens must cross between buildings</li>
              <li>Limited hospital vehicles shared across all departments</li>
              <li>6–10 one-way trips per day across Jalan Semenyih — a consistently congested main road</li>
              <li>Transport lag extends specimen TAT and delays patient results at WCC</li>
              <li>Staff time and fuel consumed on routine logistics</li>
            </ul>
          </div>
          <div className="project-page-block-inner" style={{ borderColor: 'rgba(5,150,105,0.25)', background: 'rgba(5,150,105,0.03)' }}>
            <h2 className="block-title" style={{ color: '#059669' }}>✅ The Solution</h2>
            <ul className="feature-list">
              <li>Autonomous drone transfers specimens & medications on demand</li>
              <li>Fully autonomous flight — departs & returns without manual guidance</li>
              <li>2–3 minute transfer vs 5–10 minutes by van through road traffic</li>
              <li>Zero dependence on vehicle availability or road conditions</li>
              <li>Precedent: NHS UK (Apian) — operational at Guy's & St Thomas' under CAA compliance</li>
            </ul>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="project-page-block">
          <h2 className="block-title">Key Metrics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {metrics.map(m => (
              <div key={m.label} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{m.label}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: ACCENT, lineHeight: 1.2, marginBottom: '0.25rem' }}>{m.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Benefits */}
        <div className="project-page-block">
          <h2 className="block-title">Expected Benefits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {benefits.map(b => (
              <div key={b.title} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{b.icon}</div>
                <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{b.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.65 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RKB */}
        <div className="project-page-block">
          <div style={{ background: 'var(--bg2)', borderLeft: '3px solid var(--text3)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem', fontSize: '1rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              🏛️ Registered Under Reformasi Kerenah Birokrasi (RKB)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.75, margin: 0 }}>
              One of five HTPN digital transformation initiatives formally registered under Malaysia's RKB framework — a government initiative to reduce bureaucratic burden and accelerate public sector innovation. The Malaysian Productivity Corporation (MPC) serves as the guiding body throughout implementation.
            </p>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
