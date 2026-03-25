import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = 'https://eblcalcwcc.netlify.app/'
const ACCENT = '#ef4444'

export default function ProjectEBLEstimator() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--pipeline">PENDING VALIDATION</span>
          <h1 className="detail-title">EBL Estimator AI App</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#07 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">AI Vision</span>
          <span className="detail-tag">Surgery</span>
          <span className="detail-tag">Obstetrics</span>
          <span className="detail-tag">PPH</span>
          <span className="detail-tag">MOH Guideline</span>
        </div>

        <p className="detail-subtitle">
          AI-powered bedside tool for estimating blood loss during obstetric emergencies — combining AI photo analysis with manual entry to standardise intraoperative blood loss assessment.
        </p>

        <div className="detail-disclaimer">
          ⚠️ This tool supports clinical decision-making and does not replace professional clinical judgment.
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Guideline</span>
              <span className="spec-card-new__value">MOH Malaysia 2016 PPH</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Input</span>
              <span className="spec-card-new__value">Photo + manual entry</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#C8B89A' }}>Demo · Pending Clinical Validation</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-demo-btn"
              style={{ background: ACCENT, color: '#0a0a0a' }}
            >
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ol className="prd-workflow">
            <li>
              <strong>Capture or Upload Photo</strong> — Take a live bedside photo of blood-soaked items, or upload an existing image for AI analysis.
            </li>
            <li>
              <strong>Manual Entry</strong> — Input uncaptured volumes: floor blood, drapes, suction canisters — any blood not in photos.
            </li>
            <li>
              <strong>AI Calculates Total</strong> — AI analyses photo saturation levels against the MOH 2016 PPH pictogram and combines with manual entries to display overall total blood loss.
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">INPUT METHODS</h2>
          <ul className="detail-features">
            <li>Open Camera — Capture live bedside photos of blood-soaked items for immediate AI analysis</li>
            <li>Upload Image — Analyse existing photographs taken during the procedure</li>
            <li>Manual Entry — Input uncaptured volumes directly (floor blood, drapes, suction canisters)</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MOH 2016 PPH REFERENCE</h2>
          <p className="detail-block__text">
            Built-in MOH 2016 PPH pictogram with saturation estimates for:
          </p>
          <ul className="detail-features">
            <li>Sanitary pads (varying saturation %)</li>
            <li>Kidney dishes</li>
            <li>Linen protectors</li>
            <li>Sarongs</li>
            <li>Vaginal packs</li>
            <li>Under-buttock drapes</li>
            <li>Gauze sponges</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CLINICAL CONTEXT</h2>
          <p className="detail-block__text">
            Visual estimation of blood loss is notoriously inaccurate — studies show clinicians consistently underestimate PPH by 30–50%. This tool standardises estimation at the bedside using AI photo analysis and the MOH 2016 PPH pictogram, supporting rapid intraoperative decisions while requiring clinician review of all outputs.
          </p>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Dr Amalyna, Dr Anita bt Ali · O&amp;G Dept, Hospital Tengku Permaisuri Norashikin</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
