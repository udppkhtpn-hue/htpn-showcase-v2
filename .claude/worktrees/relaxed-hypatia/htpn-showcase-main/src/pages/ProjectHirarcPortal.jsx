import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#84cc16'
const DEMO_URL = '/hirarc4.html'

export default function ProjectHirarcPortal() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>MOH HIRARC Portal — Digital OSH Ledger · HTPN HIO</title>
        <meta name="description" content="A cloud-based workplace risk assessment engine aligned with OSH Act 1994 and DOSH 2008 guidelines — replacing static Excel logs with dynamic risk score calculations, automated review alerts, and print-ready regulatory safety sheets." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/hirarc-portal" />
        <meta property="og:title" content="MOH HIRARC Portal — Digital OSH Ledger · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/hirarc-portal" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">MOH HIRARC Portal</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#23 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">DOSH 2008 Standard</span>
          <span className="detail-tag">Risk Matrix Automation</span>
          <span className="detail-tag">Compliance Auditing</span>
        </div>

        <p className="detail-subtitle">
          A cloud-based workplace risk assessment engine aligned with the OSH Act 1994 and DOSH 2008 guidelines — replacing static Excel logs with dynamic risk score calculations, automated review alerts, and print-ready regulatory safety sheets.
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
              <span className="spec-card-new__label">Regulatory Standard</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>OSH Act 1994 · DOSH 2008</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Risk Formula</span>
              <span className="spec-card-new__value">Likelihood × Severity (L×S)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Risk Thresholds</span>
              <span className="spec-card-new__value">Low (1–4) · Medium (5–12) · High (15–25)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Export</span>
              <span className="spec-card-new__value">CSV · Print-Ready PDF (DOSH Format)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Statewide Active</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Under OSH Act 1994, public healthcare facilities are legally mandated to maintain a comprehensive HIRARC (Hazard Identification, Risk Assessment, and Risk Control) register. At most facilities, this was done using static Excel or Google Sheets templates — printed and archived in physical binders.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Fragmented Oversight</span>
              <span className="prd-section-item__desc">Spreadsheets remained isolated within individual clinical units, leaving hospital leadership blind to acute, systemic institutional hazards across the facility.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Latent Action Tracking</span>
              <span className="prd-section-item__desc">Manual logs lacked proactive alerts — critical safety interventions, past-due hazard reviews, and overdue target deadlines were frequently missed with no automated escalation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">High Compilation Overhead</span>
              <span className="prd-section-item__desc">Generating a facility-wide risk matrix or pulling audit logs for DOSH inspectors required days of manual paper mining and physical cross-checking across scattered binders.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">3-STEP COMPLIANCE PIPELINE</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(132,204,22,0.15)', color: ACCENT }}>1</span>
              <span className="prd-section-item__title">Basic Information Intake</span>
              <span className="prd-section-item__desc">Department selection, Unit/Location (e.g., Emergency & Trauma / Red Zone), targeted Work Activities, Assessor Name, and Assessment Date — all captured at the point of entry for full accountability from submission.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(132,204,22,0.15)', color: ACCENT }}>2</span>
              <span className="prd-section-item__title">Hazard Identification & Risk Control</span>
              <span className="prd-section-item__desc">Interactive hazard matrix grid with automated Likelihood × Severity calculations. Color-coded risk thresholds: <strong>Low (1–4, Monitor)</strong>, <strong>Medium (5–12, Add Controls)</strong>, <strong>High (15–25, Stop Work)</strong>. Mandatory fields for Control Measures, Person In Charge (PIC), and Due Dates.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(132,204,22,0.15)', color: ACCENT }}>3</span>
              <span className="prd-section-item__title">Executive Summary & Finalization</span>
              <span className="prd-section-item__desc">Auto-generates an operational safety synthesis and automatically calculates the "Recommended Next Review Date" exactly 12 months from submission based on peak hazard score detected.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Automated Likelihood × Severity risk score calculations — no manual math errors</li>
            <li>Color-coded risk thresholds: Low / Medium / High with corresponding action triggers</li>
            <li>"Immediate Action Required" alert container on the main dashboard for HIGH-score hazards</li>
            <li>Live dashboard metrics: Total Assessments, High Risk Hazards, Overdue Reviews, Controls Implemented</li>
            <li>Auto-generated unique registry indexes (e.g., HRC-2026-001) for every saved record</li>
            <li>Automatic 12-month review date calculation from submission date</li>
            <li>One-click CSV export and print-ready PDF mode formatted for DOSH submissions</li>
            <li>Covers biological, chemical, physical, and sharps hazards</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Strict alignment with DOSH 2008 Standard matrix formulas — removes individual grading bias</li>
              <li>Immutable audit trail — saved records receive unique registry IDs and cannot be altered</li>
              <li>Credentialed access controls — only designated assessors can create or approve official registries</li>
              <li>Compliant with OSH Act 1994 and DOSH Malaysia Guidelines 2008</li>
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
                  <th>Analog Spreadsheet Binders</th>
                  <th style={{ color: ACCENT }}>MOH HIRARC Portal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Risk Scoring</td>
                  <td>Manual cross-referencing and math input</td>
                  <td>Automated L×S client-side calculations</td>
                </tr>
                <tr>
                  <td>Deadline Oversight</td>
                  <td>Passive logs — frequently overlooked</td>
                  <td>Live "Immediate Action Required" alerts</td>
                </tr>
                <tr>
                  <td>Inspector Reporting</td>
                  <td>Days of manual folder sorting</td>
                  <td>One-click print-ready PDF export</td>
                </tr>
                <tr>
                  <td>Data Synchronization</td>
                  <td>Isolated files scattered across units</td>
                  <td>Centralized facility-level master list</td>
                </tr>
                <tr>
                  <td>Review Scheduling</td>
                  <td>Manual checking of historical records</td>
                  <td>Automatic expiry and review date calculation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚠️</span>
              <span className="prd-section-item__title">Zero-Lag Hazard Visibility</span>
              <span className="prd-section-item__desc">Visual alerts ensure that severe clinical vulnerabilities — needlestick incidents, bloodborne pathogen exposure — are instantly visible to management rather than buried in paper folders.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📋</span>
              <span className="prd-section-item__title">Drastic Reduction in Audit Latency</span>
              <span className="prd-section-item__desc">Transitioning from fragmented spreadsheet trackers to a centralized system reduces compliance report compilation from days to seconds.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🛡️</span>
              <span className="prd-section-item__title">Targeted Workforce Protection</span>
              <span className="prd-section-item__desc">Tracking specific PICs and intervention due dates drives accountability — ensuring safety-engineered needles and PPE protocols are deployed exactly where they are needed most.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Hospital Mukah Sarawak</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
