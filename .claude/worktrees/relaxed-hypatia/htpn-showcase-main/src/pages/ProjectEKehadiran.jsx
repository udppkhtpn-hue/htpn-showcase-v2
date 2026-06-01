import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#f59e0b'

export default function ProjectEKehadiran() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Sistem E-Kehadiran Kursus — Digital Training Log · HTPN HIO</title>
        <meta name="description" content="A centralized, paperless attendance registration and analytics portal for hospital staff training at HTPN — replacing manual logs with instant IC validation, automatic age calculation, and an administrative tracking dashboard." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/e-kehadiran" />
        <meta property="og:title" content="Sistem E-Kehadiran Kursus — HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/e-kehadiran" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Sistem E-Kehadiran Kursus</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#19 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Human Resources & Administration</span>
          <span className="detail-tag">Role-Based Dashboard</span>
          <span className="detail-tag">Bilingual</span>
        </div>

        <p className="detail-subtitle">
          A centralized, paperless attendance registration and analytics portal for hospital staff training — replacing fragmented manual logs with instant IC validation, automatic age calculation, and an administrative tracking dashboard.
        </p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Pillar</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Access</span>
              <span className="spec-card-new__value">QR Code (Mobile) · Admin Portal</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">Bahasa Malaysia · English</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Export</span>
              <span className="spec-card-new__value">One-click CSV (KKM Compliance)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Deployed</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Continuous professional development is mandatory for public healthcare staff compliance, credentialing, and annual promotion tracking within the KKM framework. At HTPN, this relied entirely on pen-and-paper registration sheets and isolated spreadsheets managed by individual department supervisors.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Data Fragmentation</span>
              <span className="prd-section-item__desc">Training metrics were trapped within separate silos across clinical and non-clinical units — preventing a unified hospital-wide overview for management.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">High Human Error Rates</span>
              <span className="prd-section-item__desc">Manual transcription led to misspelled names, invalid IC numbers, and missing records — undermining the integrity of compliance data.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Severe Administrative Backlogs</span>
              <span className="prd-section-item__desc">Compiling mandatory annual training summaries for KKM required weeks of manual data compilation, chasing physical sign-in files, and re-keying records into master lists.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">DUAL-PORTAL ARCHITECTURE</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(245,158,11,0.15)', color: ACCENT }}>S</span>
              <span className="prd-section-item__title">Staf / Peserta Portal — Front-End Registration</span>
              <span className="prd-section-item__desc">High-contrast, touch-optimized input cards for fast field entry on mobile or kiosk terminals. Staff scan a unique, session-specific QR code to open registration directly on their personal browser. Features <strong>Umur Automatik</strong> — real-time age calculation derived instantly from the IC number structural pattern.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(245,158,11,0.15)', color: ACCENT }}>A</span>
              <span className="prd-section-item__title">Pentadbir / Admin Portal — Back-End Management Panel</span>
              <span className="prd-section-item__desc">Filter entire attendance logs by Year, Course Type, Session Title, or Department. Live tracking metrics: Total Attendees, Total Course Types, Active Departments. One-click CSV export for KKM compliance audits — turning weeks of compilation into seconds. Sealed behind a dedicated authentication wall.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Session-specific QR code generation for frictionless staff registration</li>
            <li>Automatic IC-derived age calculation ("Umur Automatik") — no manual entry</li>
            <li>Real-time entry validation to prevent invalid IC numbers and missing fields</li>
            <li>Filter logs by Year, Course Type, Session Title, or Department</li>
            <li>Live institutional metrics: Total Attendees, Course Types, Active Departments</li>
            <li>One-click CSV export for immediate KKM compliance audits</li>
            <li>Bilingual interface — Bahasa Malaysia and English</li>
            <li>IC masking format ("95010101XXXX") for privacy during public entry</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Administrator dashboard sealed behind a dedicated authentication wall ("Log Masuk Admin")</li>
              <li>IC numbers use automatic masking format ("95010101XXXX") to shield data from public view</li>
              <li>No image caching or personal data trails exposed on unsecured browser structures</li>
              <li>Entries routed directly into structured, secure database tables</li>
              <li>Compliant with Personal Data Protection Act (PDPA) and MOH data safety policies</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MEASURABLE IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">Streamlined Reporting</span>
              <span className="prd-section-item__desc">Built-in CSV export turns a multi-week data compilation marathon into a single-click spreadsheet download for immediate compliance audits.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Admin Time Recovered</span>
              <span className="prd-section-item__desc">Removes the daily administrative burden from department supervisors — returning clinical heads and administrators to primary operational duties.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🎯</span>
              <span className="prd-section-item__title">Targeted Training Allocation</span>
              <span className="prd-section-item__desc">Real-time distribution trends show exactly which units are lagging behind training targets — enabling proactive educational interventions and optimal resource distribution.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Pengurusan & JPPOBG · Jabatan Pentadbiran HTPN</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
