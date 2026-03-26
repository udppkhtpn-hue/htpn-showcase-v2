import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ACCENT = '#7C3AED'

const specs = [
  { label: 'Technology', value: 'Roketz.AI · Facial rPPG' },
  { label: 'Scan Duration', value: '35–50 seconds' },
  { label: 'Validation Study', value: '400 patients · 3 phases · HTPN ED' },
  { label: 'Status', value: 'Planned · Clinically Validated' },
]

const phaseResults = [
  {
    phase: 'Phase 1',
    n: 'n = 150',
    label: 'Baseline Testing',
    sub: 'PPG vs standard automated monitors',
    results: ['HR bias: –4.2 bpm', 'HR SD: 6.9 bpm', 'HR RMSE: 8.1 bpm', 'BP & SpO₂: ✓ Within threshold'],
    note: 'HR exceeded international standards. BP and SpO₂ already within acceptable limits at baseline.',
    final: false,
  },
  {
    phase: 'Phase 2',
    n: 'n = 150',
    label: 'Iterative Refinement',
    sub: 'Improved methodology + standardised 500-lux lighting',
    results: ['BP reference method: ✓ Improved', 'Lighting standard: ✓ 500 lux', 'BP & SpO₂: ✓ Consistent'],
    note: 'BP measured after two stable manual readings. RR and racial demographics not collected in this phase.',
    final: false,
  },
  {
    phase: 'Phase 3',
    n: 'n = 100',
    label: 'Full Validation',
    sub: 'Complete variables under refined conditions',
    results: ['HR bias: –1.2 bpm ✓', 'HR SD: 2.4 bpm ✓', 'HR RMSE: 2.4 bpm ✓', 'BP bias: ≤5 mmHg ✓', 'BP SD: ≤8 mmHg ✓', 'SpO₂: ±2–3% ✓', 'RR: ✓ Acceptable'],
    note: 'All parameters meet international standards. Bland–Altman plots: narrow limits of agreement, balanced spread, low heteroscedasticity.',
    final: true,
  },
]

const benefits = [
  { icon: '⚡', title: '50-Second Results', desc: 'Instant vitals — validated across 400 patients at HTPN ED — versus 1–5 days for a conventional blood test.' },
  { icon: '🏥', title: 'One Visit Only', desc: 'Eliminates the second hospital trip needed for blood draw — consultation and result in a single attendance.' },
  { icon: '👩‍⚕️', title: 'Zero Staff Required', desc: 'Self-service on patient\'s own phone — skilled PPP staff freed and redeployed to critical clinical areas.' },
  { icon: '🔒', title: 'Privacy by Design', desc: 'No image stored, no biometric data retained. Scan processed live and discarded immediately after.' },
]

const hba1cTable = [
  { metric: 'Result Time', value: '35–50 sec', vs: 'vs 1–5 days (blood test)' },
  { metric: 'Cost per Test', value: 'RM 3.00', vs: 'vs RM 8.70 (blood test)' },
  { metric: 'Hospital Visits', value: '1', vs: 'vs 2 (draw + review)' },
  { metric: 'Staff Required', value: 'None', vs: 'vs 1 PPP (blood test)' },
]

const howItWorks = [
  { num: '01', title: 'Face Scan', desc: 'Patient points phone camera at face. Light interacts with blood vessels beneath the facial skin — no contact required.' },
  { num: '02', title: 'RGB Signal Capture', desc: 'Camera captures changes in red, green, and blue light reflection as blood pulses through facial capillaries with each heartbeat.' },
  { num: '03', title: 'Signal Processing', desc: 'AI cleans raw light signals, detects heartbeat peaks, and extracts over 20 clinical features from the waveform data.' },
  { num: '04', title: 'Result in 35–50 sec', desc: 'Deep learning algorithms calculate BP, HR, SpO₂, RR and other parameters — displayed instantly. Validated by HTPN\'s own 400-patient study.' },
]

export default function PipelineFacialScan() {
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
            <span className="demo-badge" style={{ background: 'rgba(124,58,237,0.1)', color: ACCENT, borderColor: 'rgba(124,58,237,0.3)' }}>Planned</span>
            <span className="demo-badge" style={{ background: 'rgba(5,150,105,0.1)', color: '#059669', borderColor: 'rgba(5,150,105,0.3)' }}>Clinically Validated</span>
          </div>
          <div className="project-page-title-row">
            <span style={{ fontSize: '3rem', lineHeight: 1 }}>📱</span>
            <h1 className="project-page-title">Facial AI — Vital Signs & HbA1c</h1>
          </div>
          <p className="project-page-subtitle">
            A 35–50 second smartphone face scan that reads vital signs using facial photoplethysmography — no needles, no reagents, no skilled staff required.
          </p>
          <p className="demo-note" style={{ marginTop: 0 }}>
            Clinically validated at HTPN's own Emergency Department across a 400-patient, 3-phase study. Planned for deployment at the ED Green Zone and Diabetic Specialist Clinic.
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
              <li>Vital sign collection takes 2–3 minutes per patient using current manual methods</li>
              <li>HbA1c blood test requires skilled staff, needles, and reagents — costs RM8.70 with results in 1–5 days</li>
              <li>Diabetes patients require two hospital visits — one for blood draw, one to review results</li>
              <li>Skilled PPP staff tied up on routine vitals instead of critical clinical areas</li>
              <li>Queue bottlenecks build at ED and diabetic clinics during peak hours</li>
            </ul>
          </div>
          <div className="project-page-block-inner" style={{ borderColor: 'rgba(5,150,105,0.25)', background: 'rgba(5,150,105,0.03)' }}>
            <h2 className="block-title" style={{ color: '#059669' }}>✅ The Solution</h2>
            <ul className="feature-list">
              <li>Patient performs a 35–50 second face scan using any Android smartphone — fully self-service</li>
              <li>Roketz.AI extracts 20+ vital parameters via deep learning from facial RGB light signals</li>
              <li>Results delivered in under 50 seconds — clinically validated at HTPN's own ED</li>
              <li>At ED Green Zone: abnormal vitals auto-flagged for priority triage</li>
              <li>At Diabetic Clinic: replaces blood draw — one visit, instant result</li>
              <li>Privacy by design: no facial image stored — processed live only</li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="project-page-block">
          <h2 className="block-title">How Facial Photoplethysmography Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {howItWorks.map(step => (
              <div key={step.num} className="metric-card" style={{ alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '40px', height: '40px', borderRadius: '10px',
                  background: ACCENT, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                  flexShrink: 0, letterSpacing: '0.05em',
                }}>
                  {step.num}
                </div>
                <div>
                  <div className="metric-title">{step.title}</div>
                  <div className="metric-sub">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Validation */}
        <div className="project-page-block">
          <h2 className="block-title">HTPN Clinical Validation Study</h2>
          <div style={{
            background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.25rem',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Published Abstract</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem' }}>
              "Validation of Facial Photoplethysmography for Non-Contact Vital Sign Measurement: A Multi-Phase Clinical Study"
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>
              Ferwahn Fairis Ab. Karim, Hazwah Ismail, Muhd Siv Azhar Merican Abdullah · Hospital Tengku Permaisuri Norashikin Kajang
            </div>
          </div>

          <div className="metrics-grid" style={{ marginBottom: '1.25rem' }}>
            {[
              { title: '400 Patients', sub: 'Recruited at HTPN ED Green Zone' },
              { title: '3 Phases', sub: 'Iterative clinical testing' },
              { title: '3 Months', sub: 'Study duration at HTPN' },
              { title: '4 Parameters', sub: 'BP, HR, SpO₂, RR validated' },
            ].map(m => (
              <div key={m.title} className="metric-card">
                <div className="metric-dot" style={{ background: ACCENT }} />
                <div>
                  <div className="metric-title">{m.title}</div>
                  <div className="metric-sub">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Phase results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {phaseResults.map(p => (
              <div key={p.phase} className="project-page-block-inner" style={{
                borderColor: p.final ? 'rgba(5,150,105,0.3)' : 'var(--border)',
                background: p.final ? 'rgba(5,150,105,0.03)' : 'var(--surface)',
                padding: '1rem 1.25rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: p.final ? '#059669' : 'var(--text)' }}>
                    {p.phase} · {p.n}
                  </span>
                  {p.final && <span className="card-status status-live">★ Final</span>}
                  <span style={{ fontSize: '0.82rem', color: 'var(--text2)' }}>{p.label} — {p.sub}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  {p.results.map((r, i) => (
                    <span key={i} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                      padding: '2px 8px', borderRadius: '5px',
                      background: r.includes('✓') ? 'rgba(5,150,105,0.08)' : 'var(--bg2)',
                      color: r.includes('✓') ? '#059669' : 'var(--text2)',
                      border: `1px solid ${r.includes('✓') ? 'rgba(5,150,105,0.2)' : 'var(--border)'}`,
                    }}>{r}</span>
                  ))}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', fontStyle: 'italic' }}>{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HbA1c comparison */}
        <div className="project-page-block">
          <h2 className="block-title">HbA1c — Key Metrics vs Blood Test</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {hba1cTable.map(row => (
              <div key={row.metric} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.75rem 1rem', background: 'var(--bg2)', borderRadius: '8px',
                gap: '1rem', flexWrap: 'wrap',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: '140px' }}>{row.metric}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: ACCENT }}>{row.value}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text3)' }}>{row.vs}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expected benefits */}
        <div className="project-page-block">
          <h2 className="block-title">Expected Benefits</h2>
          <div className="metrics-grid">
            {benefits.map(b => (
              <div key={b.title} className="metric-card" style={{ alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{b.icon}</span>
                <div>
                  <div className="metric-title">{b.title}</div>
                  <div className="metric-sub">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment + Partner */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Deployment Sites</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.25rem' }}>🚨 Emergency Department — Green Zone Triage</div>
                <div className="block-text">Secondary triage at the Green Zone — the exact setting where the 400-patient validation study was conducted. Patients with abnormal vital signs auto-flagged for priority assessment.</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.25rem' }}>💉 Diabetic Specialist Clinic</div>
                <div className="block-text">Replaces the invasive HbA1c blood draw for diabetes monitoring visits. Instant result at point of care — patient consults the doctor in the same visit with results already available.</div>
              </div>
            </div>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Technology Partner — Roketz.AI</h2>
            <p className="block-text" style={{ marginBottom: '1rem' }}>
              Roketz.AI provides the facial photoplethysmography platform. Operates on standard Android smartphones or tablets — no additional hardware required. All processing is performed live with no facial image storage. Validated at HTPN over 3 months and 400 patients.
            </p>
            <div style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: '8px', padding: '0.75rem 1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Registered Under</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>Reformasi Kerenah Birokrasi (RKB)</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text2)', marginTop: '0.2rem' }}>One of five HTPN digital transformation initiatives under the RKB framework. Guided by the Malaysian Productivity Corporation (MPC).</div>
            </div>
          </div>
        </div>

        <div className="project-page-back" style={{ marginTop: '40px' }}>
          <Link to="/#pipeline" className="back-link">← Back to Pipeline</Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
