import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#c084fc'

export default function ProjectCGRForm() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">CGR Web Form</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#12 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Quality</span>
          <span className="detail-tag">Compliance</span>
          <span className="detail-tag">Audit</span>
          <span className="detail-tag">Clinical Governance</span>
        </div>

        <p className="detail-subtitle">Digital Clinical Governance Round audit form for HTPN — enabling structured quality, safety, and compliance ward audits via mobile with paperless data entry.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English &amp; Bahasa Melayu</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Checklists</span>
              <span className="spec-card-new__value">10 domains</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live · Deployed</span>
            </div>
          </div>
        </div>

        {/* Internal use only — no public demo */}
        <div className="detail-block">
          <p className="detail-block__text" style={{ fontSize: '12px', color: 'rgba(245,245,240,0.5)', marginTop: '8px' }}>Internal use only — not publicly accessible.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Form Structure</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">S1</span>
              <div>
                <span className="prd-section-title">Visit Information</span>
                <span className="prd-section-desc">Auditor name, position/unit, department visited (dropdown), date &amp; start time.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">S2</span>
              <div>
                <span className="prd-section-title">Checklists (10 Domains)</span>
                <span className="prd-section-desc">General Ward Observation, Fire Safety, Infection Control, Nursing, Quality, Asset Management, Engineering Services, Emergency Department (ETD), Dietary &amp; Food Services (JDS), OSH Workplace Inspection.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">S3</span>
              <div>
                <span className="prd-section-title">Per-Question Audit Fields</span>
                <span className="prd-section-desc">Status toggle (Compliant / Needs Improvement / Non-compliant / N/A), finding description, corrective action, follow-up notes, in-situ photo capture.</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">10 Audit Domains</h2>
          <div className="prd-features">
            <div className="prd-feature">
              <span className="prd-feature__title">General Ward Observation</span>
              <span className="prd-feature__desc">Physical environment, equipment, and general compliance checks.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Fire Safety</span>
              <span className="prd-feature__desc">Fire equipment, evacuation routes, and safety protocol verification.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Infection Control</span>
              <span className="prd-feature__desc">PPE, hand hygiene stations, waste disposal, and isolation protocols.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Nursing</span>
              <span className="prd-feature__desc">Nursing care standards, documentation, and patient handling.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Quality</span>
              <span className="prd-feature__desc">Quality indicators, KPI records, and improvement documentation.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Asset Management</span>
              <span className="prd-feature__desc">Equipment maintenance logs, calibration records, and asset tags.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Engineering Services</span>
              <span className="prd-feature__desc">Biomedical equipment, infrastructure, and utilities checks.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Emergency Department (ETD)</span>
              <span className="prd-feature__desc">ED-specific compliance, triage protocols, and safety standards.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Dietary &amp; Food Services (JDS)</span>
              <span className="prd-feature__desc">Food handling, hygiene, and nutritional standards compliance.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">OSH Workplace Inspection</span>
              <span className="prd-feature__desc">Occupational safety and health standards.</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Key Features</h2>
          <ul className="detail-features">
            <li>Mobile-first — designed for ward rounds on a phone</li>
            <li>Bilingual interface (English &amp; BM toggle)</li>
            <li>In-situ photo capture per finding</li>
            <li>Free-text corrective action fields</li>
            <li>Google Sheets backend for monitoring and reporting</li>
            <li>Dropdown department selection</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Co-developed by Dr Fairis · Dr Aina · Risk Management &amp; Clinical Surveillance · HTPN Kajang</span>
          </div>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
