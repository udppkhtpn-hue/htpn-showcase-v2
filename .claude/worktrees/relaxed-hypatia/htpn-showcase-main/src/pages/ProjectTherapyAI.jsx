import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = 'https://therapy-ai-pipeline-eidzkvy7zqqucyufuuhxiq.streamlit.app'
const ACCENT = '#ef4444'

export default function ProjectTherapyAI() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--pipeline">RESEARCH DEMO</span>
          <h1 className="detail-title">TherapyAI</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#08 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">AI</span>
          <span className="detail-tag">Psychiatry</span>
          <span className="detail-tag">Transcription</span>
          <span className="detail-tag">SOAP Notes</span>
          <span className="detail-tag">Risk Stratification</span>
        </div>

        <p className="detail-subtitle">
          AI-powered clinical assistant that automates transcription, structured note generation, and risk stratification for psychological therapy sessions — freeing clinicians to focus on patients.
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
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Streamlit (Python)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Audio Limit</span>
              <span className="spec-card-new__value">200MB per file</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English · Bahasa Malaysia · Auto-detect</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#C8B89A' }}>Research Demo</span>
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
          <h2 className="detail-block__title">AI PIPELINE — 6 STEPS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Patient Anonymisation</span>
              <span className="prd-section-item__desc">Patient anonymized identifiers only — no personal data entered into the system</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Session Input</span>
              <span className="prd-section-item__desc">Input via audio recording, image/referral document, or text transcript</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">AI Pipeline Activation</span>
              <span className="prd-section-item__desc">Single-button activation triggers the full AI processing pipeline</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">SOAP Note Generation</span>
              <span className="prd-section-item__desc">Outputs structured clinical note in SOAP format (Subjective, Objective, Assessment, Plan)</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Risk Stratification</span>
              <span className="prd-section-item__desc">Automated risk level assessment: low / medium / high with key themes identified</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Clinician Review</span>
              <span className="prd-section-item__desc">All outputs require clinician review and validation for feasibility and accuracy</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Automated SOAP format clinical notes</li>
            <li>Risk stratification: low / medium / high</li>
            <li>Key themes and presenting complaints identification</li>
            <li>Multi-language: English, Bahasa Malaysia, Auto-detect</li>
            <li>Audio deleted immediately post-transcription</li>
            <li>No patient records retained — anonymized feedback only</li>
            <li>All outputs require clinician review — does not replace clinical judgment</li>
            <li>Live usage counters: total visitors and total AI analyses</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>No patient records retained after session</li>
              <li>Audio deleted immediately post-transcription</li>
              <li>Anonymized feedback only</li>
              <li>All outputs require clinician review</li>
              <li>Explicitly does not replace clinical judgment</li>
              <li>Currently in feasibility and validity testing phase</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Dr Naim · Hospital Tengku Permaisuri Norashikin</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
