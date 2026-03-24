import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/obstetric-preconsult.html'
const ACCENT = '#e8547a'

const domains = [
  { icon: '👤', label: 'Patient Details (Steps 1–7)', desc: 'Full name, IC number, age, race, religion, clinic name. Height & weight with auto-calculated BMI (Asian cut-offs).' },
  { icon: '📅', label: 'Pregnancy Dates (Steps 8–9)', desc: 'LMP with auto-calculated EDD and gestational age (weeks). Optional ultrasound scan EDD entry.' },
  { icon: '🩸', label: 'Blood & Infectious Screening (Steps 10–15)', desc: 'Blood group, Rhesus factor, HIV status, Hepatitis B, VDRL/Syphilis, GBS (Group B Strep) with year if positive.' },
  { icon: '⚠️', label: 'Allergies (Steps 16–17)', desc: 'Food allergies and medication allergies — each with conditional free-text reveal if positive.' },
  { icon: '🏥', label: 'Medical, Mental Health & Surgery (Steps 18–23)', desc: 'Conditions: HTN, DM, Asthma, Thyroid, Heart Disease, Cancer. Mental health history. Current medications. Aspirin/Calcium. Surgical history with type & year. Family history: HTN, DM, Cancer, Heart, Thyroid, Mental illness.' },
  { icon: '🤰', label: 'Obstetric History (Steps 24–27)', desc: 'Gravida number. Per-birth details: year, term/preterm, birth weight, outcome, complications. Miscarriages/abortions: GA, type, procedure. Ectopic pregnancies: side, management. Period regularity. Previous contraception method.' },
  { icon: '💼', label: 'Social History (Steps 28–31)', desc: 'Patient occupation (Housewife / Working / Student). Husband/partner\'s occupation. Household income band (RM brackets). Lifestyle: smoking, alcohol, recreational drugs — with non-judgmental framing.', fullWidth: true },
]

const patientUX = [
  'Language selection screen on first open — EN or BM',
  'In-app language toggle at any point during the form',
  'One question per screen — not overwhelming',
  'Big tap targets — designed for all age groups',
  'Auto-calculates EDD and gestational age from LMP',
  'BMI auto-calculated with Asian cut-off categories',
  'Conditional sub-fields only appear when relevant',
  'Progress bar + step counter shows how far along',
  'Back button available on every step',
  '"5–8 minutes" expectation set at the welcome screen',
]

const output = [
  'Step 32: Summary screen with full structured record',
  'Doctor copy language selectable separately (EN or BM)',
  'Print option for paper handover',
  'Copy for Doctor — one tap copies full record to clipboard',
  'Save File — downloads as a text file',
  'Patient shows summary screen to nurse/doctor directly',
  'Start Over button for next patient',
  'No backend — no data stored or transmitted',
]

export default function PreConsultObstetric() {
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
            <span className="card-num">#02</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(232,84,122,0.12)', color: ACCENT, borderColor: 'rgba(232,84,122,0.35)' }}>
              Single HTML File · Offline-capable
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-preconsult.png" alt="AntenatalClerk" className="project-page-logo" />
            <h1 className="project-page-title">AntenatalClerk — Obstetric Pre-Consultation</h1>
          </div>
          <p className="project-page-subtitle">
            Mobile-first antenatal clerking form — patients fill 32 steps on their phone before the consultation
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Koghila, Dr Liyana <span>(O&amp;G Dept)</span>
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
            <div className="spec-value">Vanilla JS + HTML</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Languages</div>
            <div className="spec-value">English + Bahasa Malaysia</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Steps</div>
            <div className="spec-value">32 question steps</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Access</div>
            <div className="spec-value">QR code → patient's phone</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            The obstetric counterpart to the GynaeClerk form — a patient-facing antenatal preconsultation
            clerking form shared via QR code to the patient's phone while they wait. The patient fills it in
            themselves before seeing the doctor, covering their full antenatal history across 32 steps in 5–8
            minutes. By the time the patient enters the consultation room, the doctor already has a complete,
            structured obstetric history — enabling a quicker, more directed and focused consultation rather
            than spending time on routine history-gathering from scratch.
          </p>
        </div>

        {/* 32 steps / 8 domains */}
        <div className="project-page-block">
          <h2 className="block-title">32 steps across 8 clinical domains</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.6rem' }}>
            {domains.map(d => (
              <div
                key={d.label}
                className="metric-card"
                style={{ gap: '0.75rem', alignItems: 'flex-start', ...(d.fullWidth && { gridColumn: '1 / -1' }) }}
              >
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <div className="metric-title">{d.label}</div>
                  <div className="metric-sub">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UX + Output */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Patient-friendly UX</h2>
            <ul className="feature-list">
              {patientUX.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Output &amp; doctor handover</h2>
            <ul className="feature-list">
              {output.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Workflow */}
        <div className="project-page-block">
          <h2 className="block-title">Workflow &amp; clinical context</h2>
          <p className="block-text">
            Used at HTPN's antenatal clinic (WCC). Patient scans the QR code while waiting, fills the form on
            their own phone in their preferred language, and shows or copies the completed record to the nurse
            or doctor before the consultation. It is the obstetric equivalent of the GynaeClerk form — together
            the two tools cover the full O&amp;G SOPD workflow. The form captures clinically sensitive
            information (HIV, VDRL, mental health, income) using careful, non-judgmental language and reassures
            patients that sensitive questions are routine and confidential.
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
