import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/incident-form.html'
const ACCENT = '#1d4ed8'

const sectionAFields = [
  { label: 'Patient details', value: 'Name, RN/ID, Age, Gender, Ethnicity, Status (Alive/Deceased), Language barrier, Diagnosis' },
  { label: 'Incident timing', value: 'Date + Time, each with an "Approximate?" checkbox' },
  { label: 'Patient type', value: 'Inpatient / Day Care / Outpatient / Others' },
  { label: 'Departments involved', value: 'Multi-select: Medical, Surgical, O&G, Orthopaedic, Paediatric, Oncology, Radiology, Pharmacy, Rehab, A&E, ICU/CCU, Geriatric, Laboratory, Psychiatry, Others' },
  { label: 'Incident type', value: 'Actual or Near Miss · 14 MOH categories · Free-text description · Outcome: None / Mild / Moderate / Severe / Death / Cannot Be Determined' },
  { label: 'Immediate action taken', value: 'For Actual incidents only · Reporter name, designation, date' },
]

const sectionBFields = [
  { label: 'Action taken', value: 'Checkboxes: Prescription Slip · Monitor Trend First · RCA (Root Cause Analysis) · MIRCA · Additional comments', highlight: false },
  { label: 'e-IR submission deadline', value: 'Must be submitted to the national e-IR system within 5 days of incident date', highlight: true },
  { label: 'Mandatory RCA trigger', value: 'Automatically required for Severe or Death outcome incidents', highlight: true },
  { label: 'Risk Manager details', value: 'Name, Designation, Date of review · Section visually locked to prevent reporter modification', highlight: false },
]

const incidentCategories = [
  'i. Wrong surgery/procedure — wrong site, side or patient',
  'ii. Unintended retained foreign body in patient',
  'iii. Error in transfusion of blood/blood products',
  'iv. Medication error (MERS Form required)',
  'v. Patient fall in the facility',
  'vi. Obstetric related incidents',
  'vii. Adverse outcome of clinical procedure',
  'viii. Pre-hospital care and ambulance service incident',
  'ix. Radiotherapy related incident',
  'x. Patient suicide / attempted suicide',
  'xi. Patient discharged to wrong family / next-of-kin',
  'xii. Assault / battery of patient',
  'xiii. Unanticipated fire / smoke / heat',
  'xiv. Others',
]

const engineeringDetails = [
  {
    title: 'Auto Reference ID',
    value: 'Generates HSAIR/####/MM/YYYY on submission — a unique trackable number for every incident logged',
  },
  {
    title: 'SULIT Classification',
    value: 'Marked confidential throughout — consistent with the paper IR 2.0 original used across all MOH hospitals',
  },
  {
    title: 'Print-Ready',
    value: 'Print CSS strips background to white, hides non-essential UI — produces a clean A4-compatible physical copy',
  },
  {
    title: 'Tech Stack',
    value: 'React 18 + Tailwind CSS — single HTML file, runs entirely in the browser, no installation needed',
  },
  {
    title: 'Demo Mode',
    value: 'Current version simulates submission with a 1.5s delay — designed to connect to Google Sheets or hospital backend via Apps Script',
  },
  {
    title: 'MOH Faithful',
    value: 'Two-section structure, all 14 categories, and SULIT classification faithfully preserved from the official MOH IR 2.0 / 2017 paper form',
  },
]

export default function IncidentForm() {
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
            <span className="card-num">#16</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(29,78,216,0.12)', color: '#60a5fa', borderColor: 'rgba(29,78,216,0.35)' }}>
              Demo · HTML
            </span>
            <span className="demo-badge" style={{ background: 'rgba(220,38,38,0.1)', color: '#fca5a5', borderColor: 'rgba(220,38,38,0.3)', fontSize: '0.72rem' }}>
              🔒 SULIT
            </span>
          </div>
          <div className="project-page-title-row">
            <h1 className="project-page-title">Patient Safety Incident Reporting Form</h1>
          </div>
          <p className="project-page-subtitle">
            IR 2.0 / 2017 — A fully digital version of the MOH Malaysia standard Incident Reporting Form, faithfully replicating the two-section structure with auto-generated reference numbers and print-ready output
          </p>
          <p className="project-page-credit">
            Built by <strong style={{ color: 'var(--text)' }}>Quality Unit, HSAJB</strong>
            &nbsp;·&nbsp; <span style={{ color: 'var(--text2)' }}>Hospital Sultanah Aminah Johor Bahru</span>
            &nbsp;·&nbsp; <span style={{ color: '#60a5fa', fontSize: '0.85rem' }}>Peer transfer from HTPN AI Team</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Form Demo →
          </a>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Tech Stack</div>
            <div className="spec-value">React 18 + Tailwind</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Classification</div>
            <div className="spec-value" style={{ color: '#fca5a5' }}>SULIT / Confidential</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Incident Categories</div>
            <div className="spec-value">14 MOH IR 2.0</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Reference Format</div>
            <div className="spec-value">HSAIR/####/MM/YYYY</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A fully digital version of the MOH Malaysia standard{' '}
            <strong style={{ color: 'var(--text)' }}>Patient Safety Incident Reporting Form (IR 2.0 / 2017)</strong>,
            developed by the Quality Unit at HSAJB as a direct outcome of the HTPN AI Team's knowledge-sharing session
            in early February 2026. It replaces the paper-based IR form entirely — allowing clinical staff to report
            patient safety incidents digitally from any device. On submission, an auto-generated reference number in
            the format <strong style={{ color: ACCENT }}>HSAIR/####/MM/YYYY</strong> is issued for tracking.
            The form is classified <strong style={{ color: '#fca5a5' }}>SULIT (Confidential)</strong> — consistent
            with the paper original — and faithfully replicates the two-section MOH structure used across all
            government hospitals nationwide.
          </p>
        </div>

        {/* Two-section layout */}
        <div className="project-page-block">
          <h2 className="block-title">Two-Section MOH Structure</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>

            {/* Section A */}
            <div style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.3)', borderTop: `3px solid ${ACCENT}`, borderRadius: '10px', padding: '1.25rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#60a5fa', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                SECTION A — Reporter (Clinical Staff)
              </div>
              {sectionAFields.map(f => (
                <div key={f.label} style={{ fontSize: '0.82rem', color: 'var(--text2)', padding: '0.5rem 0.65rem', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', marginBottom: '0.4rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text)' }}>{f.label}: </strong>{f.value}
                </div>
              ))}
            </div>

            {/* Section B */}
            <div style={{ background: 'rgba(71,85,105,0.1)', border: '1px solid rgba(71,85,105,0.35)', borderTop: '3px solid #64748b', borderRadius: '10px', padding: '1.25rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                SECTION B — Risk / Quality Manager Only 🔒
              </div>
              {sectionBFields.map(f => (
                <div key={f.label} style={{
                  fontSize: '0.82rem',
                  color: 'var(--text2)',
                  padding: '0.5rem 0.65rem',
                  background: f.highlight ? 'rgba(220,38,38,0.08)' : 'rgba(255,255,255,0.04)',
                  border: f.highlight ? '1px solid rgba(220,38,38,0.2)' : 'none',
                  borderRadius: '6px',
                  marginBottom: '0.4rem',
                  lineHeight: 1.6,
                }}>
                  <strong style={{ color: f.highlight ? '#fca5a5' : 'var(--text)' }}>{f.label}: </strong>{f.value}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 14 Categories */}
        <div className="project-page-block">
          <h2 className="block-title">14 Incident Categories — MOH IR 2.0 Standard</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.45rem' }}>
            {incidentCategories.map((cat, i) => (
              <div key={i} style={{
                fontSize: '0.8rem',
                color: i === 3 ? '#fca5a5' : 'var(--text2)',
                padding: '0.5rem 0.75rem',
                background: i === 3 ? 'rgba(220,38,38,0.08)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === 3 ? 'rgba(220,38,38,0.2)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '6px',
                lineHeight: 1.5,
              }}>
                {cat}{i === 3 ? ' ⚠' : ''}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text3)', marginTop: '0.75rem' }}>
            ⚠ Category iv (Medication Error) requires an additional MERS Form to be completed.
          </p>
        </div>

        {/* Engineering details */}
        <div className="project-page-block">
          <h2 className="block-title">Engineering & Design</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
            {engineeringDetails.map(d => (
              <div key={d.title} className="metric-card">
                <div className="metric-title">{d.title}</div>
                <div className="metric-sub" style={{ marginTop: '0.3rem', lineHeight: 1.7 }}>{d.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Origin & significance */}
        <div className="project-page-block">
          <h2 className="block-title">Origin & Significance</h2>
          <p className="block-text">
            Developed by HSAJB's Quality Unit as a direct outcome of the{' '}
            <strong style={{ color: 'var(--text)' }}>HTPN AI Team's sharing session in early February 2026</strong> —
            a textbook example of peer hospital knowledge transfer producing a working clinical tool.
            It digitises the official MOH IR 2.0 form used across all MOH hospitals nationwide for patient safety
            incident notification. The 5-day e-IR submission reminder and mandatory RCA trigger for Severe/Death
            outcomes are built into the form to support governance compliance. The{' '}
            <strong style={{ color: '#fca5a5' }}>SULIT classification</strong>, two-section structure, and all
            14 MOH incident categories are faithfully preserved from the paper original. This demonstrates how
            a single sharing session between hospital teams can directly improve patient safety infrastructure
            at another institution.
          </p>
        </div>

      </main>
      <Footer />
    </>
  )
}
