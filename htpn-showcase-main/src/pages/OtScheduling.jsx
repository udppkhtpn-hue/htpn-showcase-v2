import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/ot-scheduling.html'
const ACCENT = '#0ea5a0'

const specs = [
  { label: 'Tech stack', value: 'Vanilla JS + HTML' },
  { label: 'OT rooms', value: '9 rooms (2 buildings)' },
  { label: 'User roles', value: 'Master + Doctor' },
  { label: 'Case types', value: 'Elective + Emergency' },
]

const otRooms = [
  {
    color: ACCENT,
    building: 'Main Building — 3 OTs',
    rooms: [
      'OT 1 — General Surgery / Urology',
      'OT 2 — Orthopaedics',
      'OT 3 — Cardiothoracic / Neurosurgery',
    ],
  },
  {
    color: '#8b5cf6',
    building: 'WCC — 6 OTs',
    rooms: [
      'OT 1–2 — Obstetrics & Gynaecology',
      'OT 3 — Gynaecology / Oncology',
      'OT 4–5 — Paediatric Surgery',
      'OT 6 — Neonatal / Emergency',
    ],
  },
]

const sections = [
  {
    color: ACCENT,
    icon: '📅',
    label: 'Calendar',
    desc: 'Visual OT schedule in Month / Week / Day views. Filterable by Building (Main / WCC) and Case Type (Elective / Emergency / All). Colour-coded: green = elective, red = emergency, amber = pending. Print support built in.',
  },
  {
    color: '#10b981',
    icon: '📋',
    label: 'My Bookings',
    desc: 'Doctor-specific view of all their submitted booking requests. Shows status (Pending / Confirmed / Cancelled). New booking button available here too.',
  },
  {
    color: '#f59e0b',
    icon: '🕐',
    label: 'History',
    desc: 'Full searchable audit trail of all bookings. Filters: patient name / IC, date range (with quick presets: Today, This Week, Last Month, etc.), OT room, department, status, case type. Export to CSV and PDF.',
  },
  {
    color: '#ef4444',
    icon: '⚙️',
    label: 'Admin (Master only)',
    desc: 'Pending approvals queue — approve or reject requests and assign OT rooms. Manage OT rooms (add/edit/deactivate). User management (add/edit doctors). Full bookings table with date/status/OT filters.',
  },
]

const bookingFields = [
  'OT room + date + start/end time',
  'Case type (Elective / Emergency)',
  'Patient name, IC/Passport, age, gender, race',
  'Last meal date & time (NPO status)',
  'Procedure & diagnosis (free text)',
  'Requesting doctor, contact number, department',
  'Consultant / specialist name',
  'Remarks / special instructions',
  'Conflict detection — blocks double-booking',
]

export default function OtScheduling() {
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
            <span className="card-num">#05</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(14,165,160,0.12)', color: ACCENT, borderColor: 'rgba(14,165,160,0.35)' }}>
              Demo · Single HTML File
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-ot.png" alt="OT Scheduling System" className="project-page-logo" />
            <h1 className="project-page-title">OT Scheduling System</h1>
          </div>
          <p className="project-page-subtitle">
            Operating Theatre slot booking &amp; scheduling — Main Building + Women &amp; Children's Centre
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Fairis &nbsp;·&nbsp; Dr Nida <span>(Anaesthesiology)</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Demo App →
          </a>
          <p className="demo-note">
            Demo version — runs entirely in your browser. Production deployment on Netlify pending.
          </p>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          {specs.map(s => (
            <div key={s.label} className="spec-card">
              <div className="spec-label">{s.label}</div>
              <div className="spec-value">{s.value}</div>
            </div>
          ))}
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A full-featured Operating Theatre slot booking and scheduling system for HTPN, covering both the
            Main Building (3 OTs) and the Women &amp; Children's Centre — WCC (6 OTs). Doctors submit booking
            requests for elective or emergency surgical cases; a Master admin approves and assigns them to
            specific OT rooms. The system enforces conflict detection, tracks case status
            (Pending → Confirmed / Cancelled), and presents all bookings on a visual calendar with Month,
            Week, and Day views.
          </p>
        </div>

        {/* OT rooms */}
        <div className="project-page-block">
          <h2 className="block-title">OT rooms configured</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
            {otRooms.map(b => (
              <div
                key={b.building}
                className="metric-card"
                style={{ flexDirection: 'column', alignItems: 'flex-start', borderLeft: `3px solid ${b.color}` }}
              >
                <div className="metric-title" style={{ marginBottom: '0.5rem' }}>{b.building}</div>
                {b.rooms.map(r => (
                  <div key={r} className="metric-sub" style={{ margin: '2px 0' }}>{r}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 4 main sections */}
        <div className="project-page-block">
          <h2 className="block-title">4 main sections</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {sections.map(s => (
              <div key={s.label} className="metric-card" style={{ gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '36px', height: '36px', borderRadius: '8px',
                  background: s.color, color: '#0b1929',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <div>
                  <div className="metric-title">{s.label}</div>
                  <div className="metric-sub">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking form fields */}
        <div className="project-page-block">
          <h2 className="block-title">New booking form — fields captured</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
            {bookingFields.map(f => (
              <div
                key={f}
                style={{
                  padding: '0.6rem 0.75rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  color: 'var(--text2)',
                  lineHeight: 1.5,
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Role-based access */}
        <div className="project-page-block">
          <h2 className="block-title">Role-based access &amp; smart UX</h2>
          <p className="block-text">
            Doctors only see their own department's bookings on the calendar and are auto-routed to the correct
            building based on their department — O&amp;G doctors land on WCC automatically. The Master admin
            sees all bookings across all buildings and departments, has access to the pending approvals queue,
            and can manage rooms and users. Conflict detection prevents double-booking the same OT room at
            overlapping times. Fully responsive — works on mobile, tablet, and desktop — with iOS zoom
            prevention on inputs. Built as a single HTML file with no dependencies, ready for Netlify
            production deployment.
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
            Open Demo App →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
