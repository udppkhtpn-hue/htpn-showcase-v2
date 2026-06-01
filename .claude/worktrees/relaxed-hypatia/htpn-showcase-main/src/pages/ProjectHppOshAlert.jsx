import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#fb923c'
const DEMO_URL = 'https://script.google.com/macros/s/AKfycbwpZ9vI2AqU_RYxA4-LXazHLC5m7gi22_H7JQRYKJEVPQbuy3336ku1hK6nk5R-3RBG/exec'

export default function ProjectHppOshAlert() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>HPP OSH-Alert — Automated NADOPOD Incident Reporting · HTPN HIO</title>
        <meta name="description" content="A mobile-first NADOPOD incident reporting and tracking engine for Hospital Pulau Pinang — instant .docx form generation, direct WhatsApp supervisor alerts, and central Google Sheets dashboard tracking under OSH Act 1994." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/hpp-osh-alert" />
        <meta property="og:title" content="HPP OSH-Alert — NADOPOD Reporting · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/hpp-osh-alert" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">HPP OSH-Alert</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#24 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Occupational Health (OSH)</span>
          <span className="detail-tag">Automated Form Engine</span>
          <span className="detail-tag">Google Sheets Infrastructure</span>
        </div>

        <p className="detail-subtitle">
          A mobile-first incident reporting and tracking engine built for Hospital Pulau Pinang — streamlining mandatory NADOPOD hazard reporting with instant .docx form generation, direct WhatsApp supervisor alerts, and central dashboard tracking.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Regulatory Mandate</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>OSH Act 1994 — NADOPOD</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Notification Deadlines</span>
              <span className="spec-card-new__value">Supervisor (Immediate) · OSH Unit (24h) · WEHU Form (48h)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">Editable .docx · WhatsApp Alert · Google Sheets</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">User Roles</span>
              <span className="spec-card-new__value">Mod Staf (Staff) · Mod Admin (OSH Unit)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Hospital Pulau Pinang</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Under OSH Act 1994, healthcare facilities must execute NADOPOD (Notification of Accident, Dangerous Occurrence, Occupational Poisoning and Occupational Disease) regulations. When a hospital worker sustains a needlestick injury or hazardous exposure, a strict multi-agency notification must immediately take place — historically hampered by paper-based chaos.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Fragmented Reporting Chains</span>
              <span className="prd-section-item__desc">Staff experiencing an injury had to track down paper files, hand-write separate reports, and manually chase supervisor chains — leading to missed 24-hour notification deadlines.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Form Production Backlogs</span>
              <span className="prd-section-item__desc">Translating a raw occupational accident into mandatory official documentation required hours of manual re-typing into fixed formatting files — delaying compliance submissions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">No Central Follow-up Visibility</span>
              <span className="prd-section-item__desc">Paper logs handled locally within separate clinical units gave the central OSH unit zero real-time visibility to aggregate weekly injury patterns or track medical leave (MC) outcomes.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">DUAL-PORTAL SYSTEM ARCHITECTURE</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,146,60,0.15)', color: ACCENT }}>S</span>
              <span className="prd-section-item__title">Mod Staf — Mobile Entry Hub</span>
              <span className="prd-section-item__desc">Displays immediate JPKP compliance banners with mandatory notification timelines (Immediate → 24h → 48h). Single-tap "Lapor Bahaya / Kecederaan" button for immediate field entry. Live "Gambaran Hari Ini" counter shows active logs submitted during current shift to prevent duplicates. Captures Staff Name, NRIC, Phone, Email, Ethnicity, Tenure, Position, and Civil Service Grade.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,146,60,0.15)', color: ACCENT }}>A</span>
              <span className="prd-section-item__title">Mod Admin — OSH Command Console</span>
              <span className="prd-section-item__desc">Unified case logs tracking incident histories across hospital wings with exact dates, staff metrics, and medical outcomes (e.g., MC 3 Hari). Direct WhatsApp dispatch compresses the completed log into a pre-filled message pushed straight to the unit supervisor. .docx generation engine instantly formats verified data into an official, editable regulatory document. All data routes directly to a centralized Google Sheets repository for live analytics.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Compliance timeline banners: Immediate → 24h OSH alert → 48h WEHU form submission</li>
            <li>Single-tap "Lapor Bahaya / Kecederaan" for immediate point-of-incident mobile entry</li>
            <li>Live shift counter ("Gambaran Hari Ini") prevents duplicate incident entries</li>
            <li>Instant automated .docx generation — editable official NADOPOD document ready to print</li>
            <li>Direct WhatsApp routing to supervisor with pre-filled incident summary card</li>
            <li>All data routed to Google Sheets for live "Ringkasan OSH Mingguan" weekly analytics</li>
            <li>Role-separated portals: Mod Staf (field reporting) vs Mod Admin (OSH unit oversight)</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Strict multi-role separation — Mod Admin seals sensitive staff medical histories from unauthorized access</li>
              <li>NRIC, contact details, and injury outcomes transferred over encrypted secure channels to protected Google Workspace</li>
              <li>Built to directly satisfy OSH Act 1994 NADOPOD statutory notification requirements</li>
              <li>Removes manual calculation errors from incident timing compliance tracking</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ANALOG vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Legacy Paper / Manual Flow</th>
                  <th style={{ color: ACCENT }}>HPP OSH-Alert</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Submission Speed</td>
                  <td>Hours chasing local paper files</td>
                  <td>Immediate point-of-incident mobile capture</td>
                </tr>
                <tr>
                  <td>Supervisor Alerts</td>
                  <td>Delayed or informal verbal messages</td>
                  <td>Automated instant WhatsApp routing</td>
                </tr>
                <tr>
                  <td>Form Formatting</td>
                  <td>Manual typing into fixed Word documents</td>
                  <td>Instant automated .docx generation</td>
                </tr>
                <tr>
                  <td>Data Aggregation</td>
                  <td>Weeks of manual tracking across departments</td>
                  <td>Live centralized Google Sheets tracking</td>
                </tr>
                <tr>
                  <td>Analytical Visibility</td>
                  <td>Hidden in folders until audit phases</td>
                  <td>Live weekly OSH summary graphs</td>
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
              <span className="prd-section-item__title">Zero-Lag Deadline Compliance</span>
              <span className="prd-section-item__desc">Step-by-step compliance banners alongside automated triggers ensure the hospital reliably meets strict 24-hour and 48-hour NADOPOD notification timelines every time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">Proactive Cluster Tracking</span>
              <span className="prd-section-item__desc">Aggregating weekly incident counts into summary cards lets the OSH unit spot immediate spikes in hazardous zones — enabling rapid safety interventions before clusters escalate.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🗂️</span>
              <span className="prd-section-item__title">Administrative Burden Recovery</span>
              <span className="prd-section-item__desc">Automatically generating standardized compliance documents from a single mobile log eliminates hours of duplicate data entry — returning valuable time back to clinical and administrative personnel.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Jabatan Perubatan Dan Kesihatan Pekerjaan & Unit OSH · Hospital Pulau Pinang</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
