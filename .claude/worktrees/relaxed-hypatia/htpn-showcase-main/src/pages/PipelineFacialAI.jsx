import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/facial-ai.css'

const studyMetrics = [
  { label: 'Patients Recruited', value: '400', sub: 'at HTPN ED Green Zone' },
  { label: 'Clinical Phases', value: '3', sub: 'iterative testing rounds' },
  { label: 'Study Duration', value: '3 months', sub: 'conducted at HTPN' },
  { label: 'Scan Time', value: '35 sec', sub: 'under ideal conditions' },
  { label: 'Vital Parameters', value: '4', sub: 'BP · HR · SpO₂ · RR' },
]

const phases = [
  {
    num: 1,
    n: 150,
    label: 'Baseline Testing',
    results: [
      { k: 'HR bias', v: '–4.2 bpm' },
      { k: 'HR SD', v: '6.9 bpm' },
      { k: 'HR RMSE', v: '8.1 bpm' },
      { k: 'BP & SpO₂', v: '✓ Within threshold' },
    ],
    note: 'HR exceeded international standards. BP and SpO₂ already within acceptable limits at baseline.',
    final: false,
  },
  {
    num: 2,
    n: 150,
    label: 'Iterative Refinement',
    results: [
      { k: 'BP reference method', v: '✓ Improved' },
      { k: 'Lighting standard', v: '✓ 500 lux' },
      { k: 'BP & SpO₂', v: '✓ Consistent' },
    ],
    note: 'BP measured after two stable manual readings. RR and racial demographics not collected in this phase.',
    final: false,
  },
  {
    num: 3,
    n: 100,
    label: 'Full Validation',
    results: [
      { k: 'HR bias', v: '–1.2 bpm ✓' },
      { k: 'HR SD', v: '2.4 bpm ✓' },
      { k: 'HR RMSE', v: '2.4 bpm ✓' },
      { k: 'BP bias', v: '≤5 mmHg ✓' },
      { k: 'BP SD', v: '≤8 mmHg ✓' },
      { k: 'SpO₂', v: '±2–3% ✓' },
      { k: 'RR', v: '✓ Acceptable' },
    ],
    note: 'All parameters meet international standards. Bland–Altman plots: narrow limits of agreement, balanced spread, low heteroscedasticity.',
    final: true,
  },
]

const validationTable = [
  { param: 'Heart Rate (HR)', p1: 'Bias –4.2, SD 6.9, RMSE 8.1', p3: 'Bias –1.2, SD 2.4, RMSE 2.4', standard: 'Bias ≤5 bpm, SD ≤8 bpm', status: '✓ Meets standard' },
  { param: 'Blood Pressure (BP)', p1: 'Bias ≤5 mmHg, SD ≤8 mmHg', p3: 'Bias ≤5 mmHg, SD ≤8 mmHg', standard: 'Bias ≤5 mmHg, SD ≤8 mmHg', status: '✓ Consistent all phases' },
  { param: 'Oxygen Saturation (SpO₂)', p1: 'Within ±2–3%', p3: 'Within ±2–3%', standard: 'Within ±2–3%', status: '✓ Consistent all phases' },
  { param: 'Respiratory Rate (RR)', p1: 'Not collected', p3: 'Acceptable bias & variability', standard: '—', status: '✓ Acceptable (Phase 3)' },
]

const howItWorks = [
  { step: '01', title: 'Face Scan', desc: 'Patient points phone camera at face. Light interacts with blood vessels beneath the facial skin — no contact required.' },
  { step: '02', title: 'RGB Signal Capture', desc: 'Camera captures changes in red, green, and blue light reflection as blood pulses through facial capillaries with each heartbeat.' },
  { step: '03', title: 'Signal Processing', desc: 'AI cleans raw light signals, detects heartbeat peaks, and extracts over 20 clinical features from the waveform data.' },
  { step: '04', title: 'Result in 35–50 sec', desc: 'Deep learning algorithms calculate BP, HR, SpO₂, RR and other parameters — displayed instantly. Validated by HTPN\'s own 400-patient study.' },
]

const benefits = [
  { icon: '⚡', title: '50-Second Results', desc: 'Instant vitals — validated across 400 patients at HTPN ED — versus 1–5 days for a conventional blood test.' },
  { icon: '🏥', title: 'One Visit Only', desc: 'Eliminates the second hospital trip needed for blood draw — consultation and result in a single attendance.' },
  { icon: '👩‍⚕️', title: 'Zero Staff Required', desc: 'Self-service on patient\'s own phone — skilled PPP staff freed and redeployed to critical clinical areas.' },
  { icon: '🔒', title: 'Privacy by Design', desc: 'No image stored, no biometric data retained. Scan processed live and discarded immediately after.' },
]

export default function PipelineFacialAI() {
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#pipeline')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Facial AI — Vital Signs Scan · HTPN Pipeline</title>
        <meta name="description" content="A 35–50 second smartphone face scan that reads vital signs using facial photoplethysmography — no needles, no reagents. Clinically validated at HTPN Emergency Department across a 400-patient, 3-phase study." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/pipeline/facial-scan-ai" />
        <meta property="og:title" content="Facial AI — Vital Signs Scan · HTPN Pipeline" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/pipeline/facial-scan-ai" />
      </Helmet>
      <div className="detail-container fai-container">
        <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>

        {/* Header */}
        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( Innovation Pipeline )</span>
            <span className="detail-badge detail-badge--pipeline">ON THE HORIZON</span>
            <span className="fai-badge fai-badge--validated">✓ Clinically Validated</span>
          </div>
          <h1 className="detail-title">
            <span style={{ marginRight: '16px' }}>📱</span>
            Facial AI — Vital Signs &amp; HbA1c
          </h1>
          <p className="detail-subtitle">
            A 35–50 second smartphone face scan that reads vital signs using facial photoplethysmography — no needles, no reagents, no skilled staff required.
          </p>
          <div className="fai-tags">
            {['AI', 'Emergency Dept', 'Diabetes', 'Vital Signs', 'Roketz.AI', 'Non-Invasive', 'Clinically Validated', 'HTPN Research'].map(t => (
              <span key={t} className="fai-tag">{t}</span>
            ))}
          </div>
        </header>

        {/* Problem / Solution */}
        <div className="detail-block">
          <div className="fai-two-col">
            <div className="fai-block-inner">
              <h2 className="fai-block-title fai-block-title--problem">⚠️ The Problem</h2>
              <ul className="detail-features">
                <li>Vital sign collection is time-consuming — 2–3 minutes per patient using current manual methods</li>
                <li>HbA1c blood test requires skilled staff, needles, and reagents — costs RM8.70 with results in 1–5 days</li>
                <li>Diabetes patients require two hospital visits — one for blood draw, one to review results</li>
                <li>Skilled PPP staff tied up on routine vitals instead of critical clinical areas</li>
                <li>Queue bottlenecks build at ED and diabetic clinics during peak hours</li>
              </ul>
            </div>
            <div className="fai-block-inner fai-block-inner--solution">
              <h2 className="fai-block-title fai-block-title--solution">✅ The Solution</h2>
              <ul className="detail-features">
                <li>Patient performs a 35–50 second face scan using any Android smartphone — fully self-service</li>
                <li>Roketz.AI extracts 20+ vital parameters via deep learning from facial RGB light signals</li>
                <li>Results delivered in under 50 seconds — clinically validated at HTPN's own ED</li>
                <li>At ED Green Zone: abnormal vitals auto-flagged for priority triage</li>
                <li>At Diabetic Clinic: replaces blood draw — one visit, instant result</li>
                <li>Privacy by design: no facial image stored — processed live only</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Explainer image + steps */}
        <div className="detail-block">
          <h2 className="detail-block__title">How Does Facial Photoplethysmography Work</h2>
          <div className="fai-explainer-wrap">
            <img src="/facial-ai-explainer.png" alt="Facial AI explainer" className="fai-explainer-img" />
          </div>
          <div className="fai-steps" style={{ marginTop: '16px' }}>
            {howItWorks.map(s => (
              <div key={s.step} className="fai-step">
                <div className="fai-step__num">{s.step}</div>
                <div className="fai-step__title">{s.title}</div>
                <p className="fai-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scan in Action */}
        <div className="detail-block">
          <h2 className="detail-block__title">Scan in Action — HTPN ED Green Zone</h2>
          <p className="fai-scan-intro">Validation study conducted at HTPN's Emergency Department. Patient faces blurred for privacy.</p>
          <div className="fai-scan-grid">
            <div className="fai-scan-item">
              <div className="fai-scan-img-wrap">
                <img src="/facial-scan-1.jpg" alt="Study setup" />
              </div>
              <p className="fai-scan-caption">Study setup — patient seated with BP cuff for reference measurement alongside the Roketz.AI phone scan on stand</p>
            </div>
            <div className="fai-scan-item">
              <div className="fai-scan-img-wrap">
                <img src="/facial-scan-2.jpg" alt="Scan in progress" />
              </div>
              <p className="fai-scan-caption">Scan in progress — clinician holds phone at face level while Roketz.AI detects facial landmarks and captures RGB light signals</p>
            </div>
            <div className="fai-scan-item">
              <div className="fai-scan-img-wrap">
                <img src="/facial-scan-results.jpg" alt="Results screen" />
              </div>
              <p className="fai-scan-caption">Results screen (Keputusan) — Heart Rate, Respiratory Rate, BP, Hemoglobin, HbA1c, SpO₂ and cardiac risk scores displayed instantly</p>
            </div>
          </div>
        </div>

        {/* Clinical Study */}
        <div className="detail-block">
          <h2 className="detail-block__title">Clinical Study</h2>
          <div className="fai-study-title">
            Validation of Facial Photoplethysmography for Non-Contact Vital Sign Measurement: A Multi-Phase Clinical Study
          </div>
          <div className="fai-authors">
            Ferwahn Fairis Ab. Karim, Hazwah Ismail, Muhd Siv Azhar Merican Abdullah · Hospital Tengku Permaisuri Norashikin Kajang, Malaysia
          </div>
          <div className="fai-metrics-grid">
            {studyMetrics.map(m => (
              <div key={m.label} className="fai-metric-card">
                <div className="fai-metric-value">{m.value}</div>
                <div className="fai-metric-label">{m.label}</div>
                <div className="fai-metric-sub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Results */}
        <div className="detail-block">
          <h2 className="detail-block__title">Phase-by-Phase Results</h2>
          <div className="fai-phases">
            {phases.map(p => (
              <div key={p.num} className={`fai-phase${p.final ? ' fai-phase--final' : ''}`}>
                <div className="fai-phase__header">
                  <span className="fai-phase__num">Phase {p.num}</span>
                  <span className="fai-phase__n">n = {p.n}</span>
                  {p.final && <span className="fai-phase__star">★ Final</span>}
                </div>
                <div className="fai-phase__label">{p.label}</div>
                <ul className="fai-phase__results">
                  {p.results.map(r => (
                    <li key={r.k}><span className="fai-phase__key">{r.k}:</span> {r.v}</li>
                  ))}
                </ul>
                <p className="fai-phase__note">{p.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Table */}
        <div className="detail-block">
          <h2 className="detail-block__title">Validated Parameters</h2>
          <div className="fai-table-wrap">
            <table className="fai-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Phase 1 Result</th>
                  <th>Phase 3 Result</th>
                  <th>International Standard</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {validationTable.map(r => (
                  <tr key={r.param}>
                    <td>{r.param}</td>
                    <td>{r.p1}</td>
                    <td>{r.p3}</td>
                    <td>{r.standard}</td>
                    <td className="fai-table__status">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expected Benefits */}
        <div className="detail-block">
          <h2 className="detail-block__title">Expected Benefits</h2>
          <div className="fai-benefits">
            {benefits.map(b => (
              <div key={b.title} className="fai-benefit">
                <div className="fai-benefit__icon">{b.icon}</div>
                <div className="fai-benefit__title">{b.title}</div>
                <p className="fai-benefit__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Sites */}
        <div className="detail-block">
          <h2 className="detail-block__title">Deployment Sites</h2>
          <div className="fai-sites">
            <div className="fai-site">
              <div className="fai-site__icon">🚨</div>
              <div className="fai-site__title">Emergency Department — Green Zone Triage</div>
              <p className="fai-site__desc">Secondary triage at the Green Zone — the exact setting where the 400-patient validation study was conducted. Patients with abnormal vital signs auto-flagged for priority assessment. Reduces queue bottleneck and frees nursing staff for clinical interventions.</p>
            </div>
          </div>
        </div>

        {/* Technology Partner */}
        <div className="detail-block">
          <h2 className="detail-block__title">Technology Partner</h2>
          <div className="fai-partner">
            <span className="fai-partner__icon">🤝</span>
            <div>
              <div className="fai-partner__name">Roketz.AI</div>
              <p className="detail-block__text">
                Roketz.AI provides the facial photoplethysmography platform. Operates on standard Android smartphones or tablets — no additional hardware required. All processing is performed live with no facial image storage. Validated at HTPN over 3 months and 400 patients.
              </p>
            </div>
          </div>
        </div>

        {/* Governance */}
        <div className="detail-block">
          <div className="fai-governance">
            <h3 className="fai-governance__title">🏛️ Registered Under Reformasi Kerenah Birokrasi (RKB)</h3>
            <p className="detail-block__text">
              One of five HTPN digital transformation initiatives formally registered under Malaysia's RKB framework — a government initiative to reduce bureaucratic burden and accelerate public sector innovation. The Malaysian Productivity Corporation (MPC) serves as the guiding body throughout implementation.
            </p>
          </div>
        </div>

        {/* POC Partner */}
        <div className="detail-block">
          <h2 className="detail-block__title">POC Partner</h2>
          <div className="amr-partner">
            <span className="amr-partner__icon">🤝</span>
            <div>
              <div className="amr-partner__name">Roketz Sdn Bhd</div>
              <p className="detail-block__text">
                Roketz Sdn Bhd (Registration No: 1503799W) is a Malaysian technology firm incorporated on March 16, 2023, that specializes in artificial intelligence (AI) and digital transformation solutions, where they apply their digital expertise to enhance operational efficiency and support the empowerment of AI-integrated systems within local healthcare and administrative frameworks.
              </p>
            </div>
          </div>
        </div>

        <div className="detail-block__cta">
          <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>
        </div>
      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
