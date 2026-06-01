import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#f5c518'

export default function ProjectDLPForm() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">DLP Reporting Web Form</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#16 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">DLP</span>
          <span className="detail-tag">Defect Reporting</span>
          <span className="detail-tag">Facilities</span>
          <span className="detail-tag">AI OCR</span>
        </div>

        <p className="detail-subtitle">Web-based form for staff to report facility and equipment defects in the Women &amp; Child Centre — streamlining defect capture, tracking, and contractor follow-up.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Frontend</span>
              <span className="spec-card-new__value">React 18 + Tailwind</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Backend</span>
              <span className="spec-card-new__value">Google Sheets · Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">AI Engine</span>
              <span className="spec-card-new__value">Gemini 2.5 Flash (OCR)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Project Ref</span>
              <span className="spec-card-new__value">JKR/IP/CKUB/80/2018</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live · Deployed</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <a
            href="/dlp-form.html"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-demo-btn"
            style={{ background: ACCENT, color: '#0a0a0a' }}
          >
            Open App →
          </a>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">What It Is</h2>
          <p className="detail-block__text">The live data entry front-end of the DLP tracking ecosystem — submissions feed directly to the central Google Sheets database powering the WCC DLP Dashboard. Built for ward staff, nursing officers, engineers, and department heads during the Defect Liability Period for the Women &amp; Child Centre.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Form Structure</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">S1</span>
              <div>
                <span className="prd-section-title">Maklumat Projek</span>
                <span className="prd-section-desc">Project name (pre-filled: HTPN Naiktaraf Hospital Kajang), contract number (pre-filled: JKR/IP/CKUB/80/2018), complaint number.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">S2</span>
              <div>
                <span className="prd-section-title">Butiran Laporan</span>
                <span className="prd-section-desc">Defect type selector, full text description, location, report date (auto-filled).</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">S3</span>
              <div>
                <span className="prd-section-title">Butiran Pelapor</span>
                <span className="prd-section-desc">Reporter name, department/unit, contact number.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">S4</span>
              <div>
                <span className="prd-section-title">Kegunaan Pejabat (JKR)</span>
                <span className="prd-section-desc">Defect category (Tidak Kritikal / Kritikal-Kefungsian / Kritikal-Keselamatan), JKR Bidang (13 field options), JKR action (Diterima/Ditolak), action date tracking.</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">AI OCR &amp; Bulk Import</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">01</span>
              <div>
                <span className="prd-section-title">Excel / CSV Upload</span>
                <span className="prd-section-desc">Upload .xlsx, .xls, or .csv files with auto-column mapping and bulk push to Google Sheets.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">02</span>
              <div>
                <span className="prd-section-title">Google Sheet URL</span>
                <span className="prd-section-desc">Paste public Google Sheet URL — app extracts Sheet ID and imports via CSV parsing.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">03</span>
              <div>
                <span className="prd-section-title">AI Scan (Gemini OCR)</span>
                <span className="prd-section-desc">Photograph any paper DLP form — Gemini 2.5 Flash reads the image and auto-fills all form fields.</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Print View</h2>
          <ul className="detail-features">
            <li>Official JKR DLP form layout reproduction</li>
            <li>HTPN hospital header with project/contract details</li>
            <li>13-field Bidang checkboxes (JKR.PK(O).04-8)</li>
            <li>Kategori Kecacatan with tick marks</li>
            <li>JKR and contractor action sections</li>
            <li>Signature blocks for both parties</li>
            <li>A4 portrait optimisation (10mm margins)</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Records List</h2>
          <ul className="detail-features">
            <li>Table of submitted defect reports</li>
            <li>Columns: No Aduan, Date, Defect Type, Location, Category, Reporter</li>
            <li>View/Print buttons per record</li>
            <li>CSV export functionality</li>
            <li>Real-time Google Sheets integration</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Built by Dr Syafiz · Unit Pembangunan &amp; Perolehan · HTPN Kajang</span>
          </div>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
