import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = '/gynae-preconsult.html'
const ACCENT = '#f06292'

export default function ProjectGynaePreConsult() {
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#projects')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <div className="detail-container">

        {/* Back */}
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        {/* Header */}
        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( Patient's Journey )</span>
            <span className="detail-num">#01</span>
            <span className="detail-badge detail-badge--live">LIVE</span>
          </div>

          <h1 className="detail-title">GynaeClerk — Gynae Pre-Consultation</h1>

          <p className="detail-subtitle">
            Mobile-first digital clerking form for gynaecology outpatient visits at HTPN — patients complete
            8 structured clinical sections on their own smartphone via QR code while waiting, handing the
            doctor a complete history before the consultation.
          </p>

          <p className="detail-credit">
            Co-created by Dr Hamizah and Dr Asma' · O&amp;G Dept, HTPN
          </p>

          <div className="detail-disclaimer">
            ⚠️ This tool supports clinical decision-making and does not replace professional clinical judgment.
          </div>

          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
            Open Demo →
          </a>

          <div className="prd-tags" style={{ marginTop: '20px' }}>
            {['Patient App', 'Gynaecology', 'Bilingual', 'Offline-capable'].map(tag => (
              <span key={tag} className="prd-tag">{tag}</span>
            ))}
          </div>
        </header>

        {/* Spec Cards */}
        <div className="spec-cards">
          <div className="spec-card-new">
            <div className="spec-card-new__label">Journey</div>
            <div className="spec-card-new__value" style={{ color: ACCENT }}>Patient's Journey</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Tech Stack</div>
            <div className="spec-card-new__value">Vanilla JS + HTML</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Languages</div>
            <div className="spec-card-new__value">English + Bahasa Malaysia</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Status</div>
            <div className="spec-card-new__value" style={{ color: 'var(--teal)' }}>Live · Deployed</div>
          </div>
        </div>

        {/* How It Works */}
        <div className="detail-block">
          <h2 className="detail-block__title">How It Works</h2>
          <div className="prd-workflow">
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">01</div>
              <div className="prd-workflow-step__title">QR Code Access</div>
              <p className="prd-workflow-step__desc">
                Staff displays QR code at the clinic. Patient scans with their own smartphone — no app
                download, no login required.
              </p>
            </div>
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">02</div>
              <div className="prd-workflow-step__title">Patient Self-Clerks</div>
              <p className="prd-workflow-step__desc">
                Patient completes 8 structured clinical sections on their phone at their own pace while
                waiting for their appointment.
              </p>
            </div>
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">03</div>
              <div className="prd-workflow-step__title">Handover to Doctor</div>
              <p className="prd-workflow-step__desc">
                Completed record is copied to clipboard and handed to the doctor before the consultation
                begins — full history ready in advance.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Clinical Sections */}
        <div className="detail-block">
          <h2 className="detail-block__title">8 Clinical Sections</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">01</span>
              <div>
                <div className="prd-section-title">Demographics</div>
                <p className="prd-section-desc">IC auto-formats, age and BMI calculated automatically</p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">02</span>
              <div>
                <div className="prd-section-title">Presenting Complaint</div>
                <p className="prd-section-desc">Tap-select options plus free text</p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">03</span>
              <div>
                <div className="prd-section-title">Menstrual History</div>
                <p className="prd-section-desc">LMP, cycle details, dysmenorrhea</p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">04</span>
              <div>
                <div className="prd-section-title">Gynaecological History</div>
                <p className="prd-section-desc">Pap smear, past diagnoses, surgical history</p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">05</span>
              <div>
                <div className="prd-section-title">Obstetric History</div>
                <p className="prd-section-desc">G/P counts, delivery methods, contraception</p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">06</span>
              <div>
                <div className="prd-section-title">Medical History</div>
                <p className="prd-section-desc">Comorbidities, medications</p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">07</span>
              <div>
                <div className="prd-section-title">Allergy History</div>
                <p className="prd-section-desc">NKDA or documented allergies</p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">08</span>
              <div>
                <div className="prd-section-title">Social &amp; Family History</div>
                <p className="prd-section-desc">Marital, occupation, family risk factors</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="detail-block">
          <h2 className="detail-block__title">Key Features</h2>
          <ul className="detail-features">
            <li>Step-locked sequential flow — one section at a time</li>
            <li>Skip options for non-applicable sections</li>
            <li>Conditional fields that appear only when relevant</li>
            <li>Progress bar tracking</li>
            <li>No backend storage or data transmission</li>
            <li>Fully browser-based and offline-capable</li>
            <li>Output copies to clipboard for clinician use</li>
          </ul>
        </div>

        {/* Credit */}
        <div className="detail-block">
          <div className="prd-credit-box">
            <div className="prd-credit-box__label">Built By</div>
            <div className="prd-credit-box__value">
              Dr Hamizah, Dr Asma' · O&amp;G Dept, Hospital Tengku Permaisuri Norashikin
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="detail-block__cta">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
            Open Demo →
          </a>
          <button className="detail-back" onClick={handleBack}>← Back to Projects</button>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
