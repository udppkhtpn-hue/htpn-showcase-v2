import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/gynae-preconsult.html'
const ACCENT = '#f06292'

const sections = [
  { num: '①', icon: '👤', label: 'Demographics', desc: 'Name, IC (auto-formats & auto-calculates age), race, religion, height, weight. BMI auto-calculated with Asian cut-off classification.' },
  { num: '②', icon: '📋', label: 'Presenting Complaint', desc: 'Tap-to-select complaint pills (ABN bleeding, pelvic pain, vaginal discharge, pelvic mass, infertility, prolapse, menopause, urinary sx) + free text.' },
  { num: '③', icon: '🌙', label: 'Menstrual History', desc: 'LMP (auto-calculates days/weeks ago), cycle length, duration, regularity, IMB, HMB (pads/clots sub-fields conditional), dysmenorrhoea severity, PCB.' },
  { num: '④', icon: '🔬', label: 'Gynaecological History', desc: 'Pap smear + date + result (conditional). Past gynae dx: Fibroid, Endo, PCOS, Ovarian Cyst, PID, Prolapse, STI, GCA. Surgical hx: Hysterectomy, Myomectomy, Lap, Colpo/LLETZ, Tubal Ligation, D&C.' },
  { num: '⑤', icon: '👶', label: 'Obstetric History', desc: 'G/P steppers, SVD/LSCS/miscarriage counts, current contraception method.' },
  { num: '⑥', icon: '🏥', label: 'Medical History', desc: 'Tap-to-select: DM, HTN, Dyslipidemia, Heart disease, Anaemia, Asthma, Thyroid, Renal, Cancer, Mental health. Current medications free text.' },
  { num: '⑦', icon: '⚠️', label: 'Allergy History', desc: 'NKDA or Known Allergy toggle. If known: Penicillin, NSAID/Aspirin, Latex, IV Contrast/Iodine + free text.' },
  { num: '⑧', icon: '👨‍👩‍👧', label: 'Social & Family History', desc: 'Marital status, partners, occupation, education, smoking, alcohol. Family history: Ovarian Ca, Endometrial Ca, Breast Ca, Cervical Ca, DM, HTN.' },
]

const patientUX = [
  'Step-locked — one section at a time, not overwhelming',
  'Skip button for sections that don\'t apply',
  'IC auto-formats & auto-fills age — less typing',
  'BMI calculated automatically from height & weight',
  'LMP calculates weeks ago automatically',
  'Tap-to-select pills for complaints & conditions',
  'Conditional sub-fields only appear when relevant',
  'Progress bar shows how far along they are',
  'Full bilingual EN / BM toggle — patient chooses language',
]

const output = [
  'Patient previews full record before submitting',
  'Generates a structured SOPD Gynaecology clerking note',
  '"Copy Full Document" — one tap copies to clipboard',
  'Staff pastes into Google Docs or clinical HIS',
  'Doctor receives complete structured history before the consult',
  'No backend — no patient data stored or transmitted',
  'Runs fully offline in the browser on any phone',
]

export default function PreConsultGynae() {
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
            <span className="card-num">#01</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(240,98,146,0.12)', color: ACCENT, borderColor: 'rgba(240,98,146,0.35)' }}>
              Single HTML File · Offline-capable
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-preconsult.png" alt="GynaeClerk" className="project-page-logo" />
            <h1 className="project-page-title">GynaeClerk — Gynae Pre-Consultation Clerking</h1>
          </div>
          <p className="project-page-subtitle">
            Mobile-first digital clerking form for gynaecology SOPD — patients fill it on their own phone while waiting
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Hamizah, Dr Asma' <span>(O&amp;G Dept)</span>
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
            <div className="spec-label">Sections</div>
            <div className="spec-value">8 clinical sections</div>
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
            A mobile-first digital preconsultation clerking form for gynaecology outpatient visits at HTPN.
            A QR code is shared with the patient — typically while they are waiting — and the patient fills in
            the form on their own phone before seeing the doctor. The structured history collected covers all
            8 standard gynaecology domains, so by the time the patient enters the consultation room, the doctor
            already has the key clinical background available. This allows the consultation to be quicker, more
            directed and focused — the doctor can skip the basic history gathering and go straight into
            examining, clarifying, and managing — rather than spending valuable consultation time on routine
            clerking questions.
          </p>
        </div>

        {/* 8 Sections */}
        <div className="project-page-block">
          <h2 className="block-title">8 sequential sections — step-locked flow</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.6rem' }}>
            {sections.map(s => (
              <div key={s.num} className="metric-card" style={{ gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div className="metric-title">{s.num} {s.label}</div>
                  <div className="metric-sub">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UX + Output */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Patient-friendly UX features</h2>
            <ul className="feature-list">
              {patientUX.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Output &amp; handover to doctor</h2>
            <ul className="feature-list">
              {output.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Workflow */}
        <div className="project-page-block">
          <h2 className="block-title">Workflow summary</h2>
          <p className="block-text">
            Patient arrives at HTPN Gynaecology SOPD → nurse/counter staff shares the QR code → patient scans
            with their own phone and fills the form while waiting → completed record is copied and handed to the
            doctor before the consultation begins. The entire form runs offline in the browser — no app install,
            no login, no patient data stored or transmitted — making it safe, private, and accessible to any
            patient with a smartphone.
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
