import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#a78bfa'
const DEMO_URL = 'https://physio-om.vercel.app/'

export default function ProjectPhysioMeasurePro() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>PhysioMeasurePro — Automated Outcome Measure Engine · HTPN HIO</title>
        <meta name="description" content="An advanced clinical calculator and reporting engine for physical therapists — automating multi-disciplinary outcome metrics (BBS, SCIM, ODI) to instantly generate KKM-compliant diagnostic lists and localized rehabilitation plans." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/physio-measure-pro" />
        <meta property="og:title" content="PhysioMeasurePro — Automated Outcome Measure Engine · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/physio-measure-pro" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">PhysioMeasurePro</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#25 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Physiotherapy & Rehabilitation</span>
          <span className="detail-tag">Clinical Decision Support</span>
          <span className="detail-tag">AI Treatment Mapping</span>
        </div>

        <p className="detail-subtitle">
          An advanced clinical calculator and reporting engine for physical therapists — automating multi-disciplinary outcome metrics (BBS, SCIM, ODI) to instantly generate KKM-compliant diagnostic lists and localized rehabilitation plans.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open App →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Pillar</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Assessment Domains</span>
              <span className="spec-card-new__value">Neurological · Musculoskeletal · Cardiopulmonary</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Scoring Tools</span>
              <span className="spec-card-new__value">BBS · SCIM · ODI · MoCA · NIH · 6MWT & more</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">KKM-Compliant Print-Ready PDF Reports</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Outstanding User Feedback</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Outcome measures are crucial in rehabilitation medicine — objectively evaluating a patient's functional baseline, tracking recovery trajectories, and justifying ongoing treatment. But standard scoring systems are vast, multi-disciplinary, and time-consuming to execute manually.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">High Cognitive & Calculation Load</span>
              <span className="prd-section-item__desc">Therapists must memorize complex task criteria, manually add up multi-item scores across sections, and match results against statistical risk brackets — all while managing the patient in front of them.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Fragmented Problem Mapping</span>
              <span className="prd-section-item__desc">Once a score is hand-calculated, translating that number into a coherent clinical problem list and structured treatment plan requires additional redundant manual documentation work.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">KKM Reporting Overhead</span>
              <span className="prd-section-item__desc">Compiling assessments into formal print-ready reports for Ministry of Health EMR structures or physical files manually consumes significant clinical man-hours per patient session.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ASSESSMENT LIBRARY — 3 CLINICAL DOMAINS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(167,139,250,0.15)', color: ACCENT }}>N</span>
              <span className="prd-section-item__title">Neurological & Functional</span>
              <span className="prd-section-item__desc">NIH Stroke Scale, Montreal Cognitive Assessment (MoCA), Box and Block Test, Nine-Hole Peg Test, ASIA Impairment Scale, Spinal Cord Independence Measure (SCIM), Berg Balance Scale (BBS), Tinetti Test.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(167,139,250,0.15)', color: ACCENT }}>M</span>
              <span className="prd-section-item__title">Musculoskeletal (Spine)</span>
              <span className="prd-section-item__desc">Numeric Pain Rating Scale (NPRS), Oswestry Disability Index (ODI), Neck Disability Index (NDI), Patient Specific Functional Scale (PSFS), Fear Avoidance Beliefs Questionnaire (FABQ).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(167,139,250,0.15)', color: ACCENT }}>C</span>
              <span className="prd-section-item__title">Cardiopulmonary</span>
              <span className="prd-section-item__desc">Six Minute Walk Test (6MWT), Two Minute Walk Test (2MWT), Borg Rating of Perceived Exertion, mMRC Dyspnoea Scale, Incremental Shuttle Walk Test (ISWT), Chelsea Critical Care Physical Assessment, ICU Mobility Scale (IMS).</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Point-and-click radio controls for all assessment tasks — no manual tallying</li>
            <li>On-screen operational criteria and equipment checklist displayed during each test</li>
            <li>Instant automated risk categorization (e.g., BBS 56/56 → "Low Fall Risk")</li>
            <li>Auto-generated Clinical Problem List from score deficits</li>
            <li>Suggested Plan of Treatment dynamically tailored to specific assessment findings</li>
            <li>Human-in-the-Loop — clinicians review and customize before committing to final print</li>
            <li>One-click KKM-compliant report with full "Kementerian Kesihatan Malaysia — Physiotherapy Department" branding</li>
            <li>Structured fields for Patient Name, Age/Gender, MRN/IC, Ward/Clinic, and Diagnosis</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Human-in-the-Loop integrity — AI treatment suggestions are reviewed and verified by the clinician before final output</li>
              <li>Calculations occur dynamically inside secure session channels — no raw patient data exposed to open internet</li>
              <li>All calculators mapped from official clinical validation reference texts — removes scoring bias between therapists</li>
              <li>Compliant with PDPA and local data protection guidelines</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MANUAL vs AUTOMATED — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Legacy Manual Processing</th>
                  <th style={{ color: ACCENT }}>PhysioMeasurePro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calculation Speed</td>
                  <td>5–10 minutes per score card</td>
                  <td>Instantaneous automated scoring</td>
                </tr>
                <tr>
                  <td>Decision Support</td>
                  <td>Manual cross-referencing of risk guidelines</td>
                  <td>Automated risk tier and interpretation mapping</td>
                </tr>
                <tr>
                  <td>Treatment Mapping</td>
                  <td>Writing plans from scratch per case</td>
                  <td>Auto-generated localized plan templates</td>
                </tr>
                <tr>
                  <td>Documentation Format</td>
                  <td>Hand-written logs or loose paper forms</td>
                  <td>Standardized print-ready KKM PDF layout</td>
                </tr>
                <tr>
                  <td>Therapist Focus</td>
                  <td>Substantial time on admin and math</td>
                  <td>Maximal time on direct patient care</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Radical Recovery of Patient Care Time</span>
              <span className="prd-section-item__desc">Eliminating manual grading and reporting saves invaluable minutes per assessment — allowing therapists to allocate saved hours directly back to hands-on patient rehabilitation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">Standardized Rehabilitation Benchmarks</span>
              <span className="prd-section-item__desc">Objective, automated outcome scores across post-stroke and spinal patient cohorts ensure highly accurate tracking of clinical quality and recovery trajectories across the institution.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🤝</span>
              <span className="prd-section-item__title">Seamless Medical Team Integration</span>
              <span className="prd-section-item__desc">Cleanly structured printed or digital reports bridge communication gaps between physiotherapists, orthopaedic surgeons, and physicians — ensuring unified, coordinated patient care.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Jabatan Kesihatan Negeri Sarawak</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
