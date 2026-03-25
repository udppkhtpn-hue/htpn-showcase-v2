import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = 'https://script.google.com/a/macros/moh.gov.my/s/AKfycbxjbhFlte-FSS9MgkDRWJhrqy01vCwd8rTqedzatYgr-1tWXYO6EePCKP7c3pCmZTVNyg/exec'
const ACCENT = '#f97316'

export default function ProjectGynaeCensus() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Gynae Census Web Form</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#06 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Gynaecology</span>
          <span className="detail-tag">Credentialing</span>
          <span className="detail-tag">Training Logbook</span>
          <span className="detail-tag">Audit</span>
        </div>

        <p className="detail-subtitle">
          Digital surgical census form for the Gynaecology department at HTPN — replacing paper logbooks with structured real-time data entry saved directly to Google Sheets.
        </p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Backend</span>
              <span className="spec-card-new__value">Google Sheets</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#0ea5e9' }}>Live · Deployed</span>
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
            <p className="detail-credit">⚠️ Access requires MOH Google Workspace account</p>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THREE-TAB DATA ENTRY</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Patient Tab</span>
              <span className="prd-section-item__desc">Full name, IC/Passport number, MRN, age, weight, height. BMI auto-calculates from biometric inputs.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Clinical Tab</span>
              <span className="prd-section-item__desc">Category, surgery date, post-op diagnosis, classification (Major/Minor), surgical approach, procedure dropdown, additional notes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Staff Tab (Surgical Team)</span>
              <span className="prd-section-item__desc">Lead Surgeon (required), Supervisor, Assistant 1–2, HO 1–2, Remarks including EBL and notes.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Tab-based navigation with Next buttons</li>
            <li>BMI auto-calculation from height and weight inputs</li>
            <li>History view displaying previously submitted cases from Google Sheets</li>
            <li>Real-time save to Google Sheets on submission</li>
            <li>Used for audit, training documentation, and statistical reporting</li>
            <li>Access restricted to MOH Google Workspace accounts</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Dr Hazimah, Dr Missdalia, Dr Zulaikha · O&amp;G Dept, Hospital Tengku Permaisuri Norashikin</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
