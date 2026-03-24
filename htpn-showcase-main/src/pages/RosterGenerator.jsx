import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/rostergenerator.html'
const ACCENT = '#00e5a0'

const steps = [
  { num: '1', color: '#3b82f6', label: 'Roster settings', desc: 'Slider to set number of doctors on call per day (1–10). Default is 2.' },
  { num: '2', color: '#f59e0b', label: 'Public holidays', desc: 'Click-to-toggle mini calendar to mark holidays. Highlighted in amber. Treated as weekend-equivalent for workload counting.' },
  { num: '3', color: '#10b981', label: 'Medical staff', desc: 'Add doctors manually (type name + Enter) or upload the Google Form CSV export. The app auto-detects all doctor names and their requested off-call dates from the CSV and triggers roster generation immediately.' },
  { num: '4', color: '#8b5cf6', label: 'Unavailability / leave', desc: 'Select a doctor, then click dates on the full-month calendar to toggle leave on/off. Can also type a specific date manually for last-minute changes. Then press Generate Roster.' },
]

const rosterOutput = [
  'Full month view — one row per day',
  'Weekends highlighted in red, holidays in amber',
  'Each assigned doctor shown as a colour-coded pill',
  'Navigate months with prev/next arrows',
  'Download CSV or Save as PDF/Print',
]

const distOutput = [
  'Per-doctor breakdown table',
  'Weekday calls vs weekend/holiday calls',
  'Total call count per doctor',
  'Updates live whenever roster regenerates',
]

export default function RosterGenerator() {
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
            <span className="card-num">#11</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(0,229,160,0.12)', color: ACCENT, borderColor: 'rgba(0,229,160,0.35)' }}>
              Offline App · Single HTML File
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-roster.png" alt="Smart Roster Generator" className="project-page-logo" />
            <h1 className="project-page-title">Smart Roster Generator</h1>
          </div>
          <p className="project-page-subtitle">
            Equitable on-call scheduling for medical teams — runs entirely in the browser, no server required
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Fairis
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT, color: '#0a0f0a' }}
          >
            Open App →
          </a>
          <p className="demo-note">
            Runs entirely in your browser. No data is sent to any server.
          </p>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="spec-card">
            <div className="spec-label">Tech stack</div>
            <div className="spec-value">React 18 + Tailwind</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Deployment</div>
            <div className="spec-value">Single .html file</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Backend</div>
            <div className="spec-value">None — runs offline</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Output</div>
            <div className="spec-value">CSV + PDF/Print</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A fully offline, single-file web app for generating equitable on-call rosters for medical teams.
            The scheduler automatically assigns doctors to on-call duties across a chosen month, respecting
            leave dates and public holidays, while distributing the workload as evenly as possible. A key
            time-saving feature is the <strong style={{ color: 'var(--text)' }}>CSV upload</strong> — the
            roster scheduler collects leave requests from all doctors via a Google Form, exports the
            responses as a CSV, and uploads it directly into the app. The app then parses each doctor's
            name and their requested dates automatically, completely eliminating manual data entry.
          </p>
        </div>

        {/* 4-step workflow */}
        <div className="project-page-block">
          <h2 className="block-title">4-step sidebar workflow</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {steps.map(s => (
              <div key={s.num} className="metric-card" style={{ gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '28px', height: '28px', borderRadius: '8px',
                  background: s.color, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 600, flexShrink: 0,
                }}>
                  {s.num}
                </div>
                <div>
                  <div className="metric-title">{s.label}</div>
                  <div className="metric-sub">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Algorithm */}
        <div className="project-page-block">
          <h2 className="block-title">Scheduling algorithm</h2>
          <p className="block-text">
            For each day of the month, the engine: (1) filters out doctors on leave, (2) shuffles the
            remaining pool randomly for fairness, (3) sorts by ascending total call count so the
            least-worked doctor is always picked first, (4) assigns up to N doctors per day without
            repeating any on the same day. This produces an equitable distribution without back-to-back
            bias.
          </p>
        </div>

        {/* Output */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Output — roster table</h2>
            <ul className="feature-list">
              {rosterOutput.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Output — distribution dashboard</h2>
            <ul className="feature-list">
              {distOutput.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Who it is for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; notable details</h2>
          <p className="block-text">
            Built for medical department heads or MOs managing monthly on-call schedules at HTPN. Runs
            entirely in the browser — no login, no server, no data leaves the device. The CSV parser is
            robust (handles quoted fields, Windows/Mac line endings, multiple date formats including
            DD/MM/YYYY, MM-DD-YYYY, YYYY-MM-DD). A reset confirmation modal prevents accidental data
            loss. Print styles are baked in for clean PDF export. The entire app — React, scheduling
            logic, and UI — is contained in a{' '}
            <strong style={{ color: 'var(--text)' }}>single 785-line HTML file</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT, color: '#0a0f0a' }}
          >
            Open App →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
