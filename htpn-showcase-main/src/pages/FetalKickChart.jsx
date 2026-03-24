import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/fkc.html'
const ACCENT = '#dc2626'

const patientFeatures = [
  'Login with IC or passport number — pre-registered by nurse',
  'Shows patient name, ward, bed number, and gestational age (weeks)',
  '10-box grid — each box fills with a pink ✓ on every recorded kick',
  'Large "Bayi Saya Bergerak!" button — tap each time baby moves',
  'Timestamped log of every kick (e.g. 09:15 AM, 10:30 AM…)',
  'Green "Alhamdulillah, Selesai!" message when 10 kicks are reached',
  'Completion time automatically displayed on reaching the target',
  'Each tap pushes data live to Google Sheets via Apps Script',
]

const staffFeatures = [
  'Separate login (username + password) for nurses only',
  'Live table of all admitted patients — name, ward/bed, gestational age',
  'Progress bar per patient showing kick count (X / 10) in real time',
  'Auto-refreshes every 15 seconds from Google Sheets',
  'Add new patient — name, IC, bed location, gestational age (weeks)',
  'Discharge patient — removes from active monitoring list',
]

const alerts = [
  {
    icon: '⚠️',
    label: 'Orange Alert',
    desc: 'Triggered after 5:00 PM if patient has fewer than 5 kicks recorded for the day.',
    bg: '#fff7ed',
    border: '#fed7aa',
    color: '#92400e',
  },
  {
    icon: '🔴',
    label: 'Red Critical Alert',
    desc: 'Triggered after 8:00 PM if 10 kicks have not been completed — badge pulses to draw attention.',
    bg: '#fef2f2',
    border: '#fca5a5',
    color: '#991b1b',
  },
  {
    icon: '✅',
    label: 'Green — Selesai',
    desc: 'Patient has completed 10 kicks for the day — no further action required.',
    bg: '#f0fdf4',
    border: '#86efac',
    color: '#166534',
  },
]

export default function FetalKickChart() {
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
            <span className="card-num">#03</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(220,38,38,0.10)', color: ACCENT, borderColor: 'rgba(220,38,38,0.30)' }}>
              Single HTML File · Google Sheets Backend
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-fetal.png" alt="Fetal Kick Chart" className="project-page-logo" />
            <h1 className="project-page-title">e-FKC HTPN — Carta Pergerakan Janin</h1>
          </div>
          <p className="project-page-subtitle">
            Digital Fetal Kick Chart for admitted antenatal patients — real-time monitoring with time-based alert escalation for nursing staff
          </p>
          <p className="project-page-credit">
            Co-developed by Matron Norziah, KJ Manimala, KJ Zanariah, KJ Nur Azimah <span>(O&amp;G Dept)</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Demo →
          </a>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Tech stack</div>
            <div className="spec-value">Vanilla JS + Tailwind</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Backend</div>
            <div className="spec-value">Google Sheets (live)</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Auto-refresh</div>
            <div className="spec-value">Every 15 seconds</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Target</div>
            <div className="spec-value">10 kicks per session</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A digital Fetal Kick Chart (FKC / Carta Pergerakan Janin) for admitted antenatal patients at HTPN.
            The QR code is shared with patients at the ward — patients scan it on their own phone and tap a
            button every time their baby moves, building up a real-time 10-kick record for the day. Nurses
            monitor all admitted patients simultaneously through a separate staff dashboard connected to the
            same Google Sheets backend, with automatic time-based alert escalation if kick counts fall below
            expected levels by certain times of day.
          </p>
        </div>

        {/* Patient + Staff views */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Patient view (via QR code)</h2>
            <ul className="feature-list">
              {patientFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Staff / nurse dashboard</h2>
            <ul className="feature-list">
              {staffFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Alert escalation */}
        <div className="project-page-block">
          <h2 className="block-title">Time-based alert escalation</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem', marginTop: '0.25rem' }}>
            {alerts.map(a => (
              <div
                key={a.label}
                className="metric-card"
                style={{
                  background: a.bg,
                  border: `0.5px solid ${a.border}`,
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{a.icon}</span>
                <div>
                  <div className="metric-title" style={{ color: a.color }}>{a.label}</div>
                  <div className="metric-sub">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical context */}
        <div className="project-page-block">
          <h2 className="block-title">Clinical context &amp; why it matters</h2>
          <p className="block-text">
            The Fetal Kick Chart is a standard antenatal monitoring tool recommended for admitted patients —
            10 fetal movements within a set time period is the accepted benchmark for fetal wellbeing.
            Traditionally this is recorded on paper with the patient manually noting times. The e-FKC replaces
            the paper chart entirely — patients tap their phone instead of writing, timestamps are recorded
            automatically, and nurses no longer need to physically collect and check individual paper charts.
            The time-based alert escalation (orange at 5pm for under 5 kicks, red at 8pm for under 10) allows
            nurses to proactively identify patients requiring clinical review before the end of the monitoring
            period.
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
            Open Demo →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
