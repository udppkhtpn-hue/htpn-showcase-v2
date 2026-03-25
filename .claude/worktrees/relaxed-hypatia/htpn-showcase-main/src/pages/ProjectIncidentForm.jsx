import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#1d4ed8'

export default function ProjectIncidentForm() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Patient Safety Incident Reporting Form</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#16 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Patient Safety</span>
          <span className="detail-tag">Quality</span>
          <span className="detail-tag">MOH Standard</span>
          <span className="detail-tag">Confidential</span>
        </div>

        <p className="detail-subtitle">IR 2.0 / 2017 — A fully digital version of the MOH Malaysia standard Incident Reporting Form, with auto-generated HSAIR reference numbers and a locked Risk Manager section.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">React 18 + Tailwind CSS</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Reference</span>
              <span className="spec-card-new__value">IR 2.0 / 2017</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Classification</span>
              <span className="spec-card-new__value">SULIT / Confidential</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live Demo</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <a
            href="/incident-form.html"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-demo-btn"
            style={{ background: ACCENT, color: '#ffffff' }}
          >
            Open App →
          </a>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">What It Is</h2>
          <p className="detail-block__text">A digitised replacement for paper-based patient safety incident reporting. Generates auto-tracked reference numbers in format HSAIR/####/MM/YYYY. Accessible from any device for clinical staff. Developed by Quality Unit, HSAJB as a direct outcome of HTPN AI Team's knowledge-sharing session.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Form Structure — Two Sections</h2>
          <div className="prd-two-col">
            <div className="prd-block-inner">
              <h3>Section A — Reporter / Clinical Staff</h3>
              <p>Patient details: name, RN/ID, age, gender, ethnicity, status, language barriers, diagnosis. Incident timing, patient type (inpatient/day care/outpatient/other). 14 incident categories with free-text description. Outcome severity: None / Mild / Moderate / Severe / Death / Cannot Be Determined. Immediate action documentation.</p>
            </div>
            <div className="prd-block-inner prd-block-inner--accent">
              <h3>Section B — Risk Manager (Locked)</h3>
              <p>Action checkboxes: Prescription Slip, Monitor Trend First, RCA, MIRCA. Mandatory RCA trigger for Severe/Death outcomes. 5-day e-IR submission deadline requirement.</p>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">14 Incident Categories</h2>
          <div className="prd-features">
            <div className="prd-feature">
              <span className="prd-feature__title">Wrong Surgery/Procedure</span>
              <span className="prd-feature__desc">Wrong site, wrong patient, wrong procedure incidents.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Retained Foreign Body</span>
              <span className="prd-feature__desc">Items left in patient after procedure.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Transfusion Error</span>
              <span className="prd-feature__desc">Wrong blood product or transfusion incidents.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Medication Error</span>
              <span className="prd-feature__desc">Requires MERS Form — wrong drug, dose, or route.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Patient Fall</span>
              <span className="prd-feature__desc">Falls within hospital premises.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Obstetric Incidents</span>
              <span className="prd-feature__desc">Maternal and neonatal adverse events.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Adverse Clinical Outcomes</span>
              <span className="prd-feature__desc">Unexpected deterioration or outcomes.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Pre-Hospital Care</span>
              <span className="prd-feature__desc">Incidents occurring before hospital arrival.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Radiotherapy Incidents</span>
              <span className="prd-feature__desc">Radiation therapy errors or near-misses.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Patient Suicide</span>
              <span className="prd-feature__desc">Self-harm or suicide incidents.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Wrong Discharge</span>
              <span className="prd-feature__desc">Premature or incorrect patient discharge.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Assault</span>
              <span className="prd-feature__desc">Violence against patients or staff.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Fire/Smoke/Heat</span>
              <span className="prd-feature__desc">Fire safety and environmental hazards.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Others</span>
              <span className="prd-feature__desc">Any incident not covered above.</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Key Features</h2>
          <ul className="detail-features">
            <li>Auto-generated reference ID: HSAIR/####/MM/YYYY</li>
            <li>Print-ready CSS output — SULIT classification preserved</li>
            <li>Demo mode with 1.5s simulated submission delay</li>
            <li>Locked Section B accessible only to Risk/Quality Manager</li>
            <li>Multi-select department options (14 departments)</li>
            <li>Mandatory RCA trigger for Severe/Death outcomes</li>
            <li>Works on any device — single HTML file, no backend</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Developed by Quality Unit, HSAJB · Hospital Sultanah Aminah Johor Bahru · Built as a direct outcome of HTPN AI Team's knowledge-sharing session</span>
          </div>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
