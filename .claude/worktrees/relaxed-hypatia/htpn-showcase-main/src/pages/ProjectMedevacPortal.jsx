import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#f97316'
const DEMO_URL = 'https://emedevac.netlify.app'

export default function ProjectMedevacPortal() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>MEDEVAC E-Request Portal — Airborne Emergency Logistics · HTPN HIO</title>
        <meta name="description" content="A centralized medical evacuation submission portal for JKN Sarawak — digitizing fragmented analog coordination into a unified, weight-sensitive flight dispatch pipeline for critical emergency air transfers across Sarawak." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/medevac-portal" />
        <meta property="og:title" content="MEDEVAC E-Request Portal — HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/medevac-portal" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">MEDEVAC E-Request Portal</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#22 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Aviation & Medevac Logistics</span>
          <span className="detail-tag">Multi-Agency Verification</span>
          <span className="detail-tag">Dynamic Weight & Balance</span>
        </div>

        <p className="detail-subtitle">
          A centralized, high-stakes medical evacuation submission portal built for JKN Sarawak — digitizing fragmented analog coordination into a unified, weight-sensitive flight dispatch pipeline to optimize critical emergency air transfers across Sarawak's vast geography.
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
              <span className="spec-card-new__label">Scope</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Statewide — Sarawak</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Transport Mode</span>
              <span className="spec-card-new__value">Emergency Air Transfer (MEDEVAC)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Verification Chain</span>
              <span className="spec-card-new__value">Referring Hospital → JKNS Approval</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">Instant Print-Ready PDF Flight Manifest</span>
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
            Medical evacuation via air transport across Sarawak's vast, challenging geography is a critical service for transferring emergency patients from remote district clinics to major tertiary centers like Hospital Umum Sarawak. Coordinating these flights relied entirely on unstructured manual communications and disconnected phone lines.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Hazardous Weight & Balance Gaps</span>
              <span className="prd-section-item__desc">Air evacuation requires strict monitoring of total cabin weight. Manual workflows lacked a cohesive calculation stream for patients, heavy equipment, medical escorts, and family members — risking dangerous aircraft weight limit breaches.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Inter-Agency Coordination Latency</span>
              <span className="prd-section-item__desc">Securing approvals between the referring hospital, verification officers, and JKNS required chaotic back-and-forth communication — leading to critical takeoff delays in life-threatening situations.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Documentation Void</span>
              <span className="prd-section-item__desc">A lack of centralized tracking meant clinical histories, transfer justifications, and air crew logistics were rarely integrated — hampering post-flight auditing and statewide performance analytics.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THREE-HUB SYSTEM ARCHITECTURE</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.15)', color: ACCENT }}>L</span>
              <span className="prd-section-item__title">Logistics Hub — Hospital & Flight Details</span>
              <span className="prd-section-item__desc">Captures facility category, requesting and receiving hospitals, receiving specialist, and exact flight vectors (MEDEVAC From / To Base). Integrates multi-layer institutional authorization: Referring Dr., Verified By (Hospital), and Approved By (JKNS) — all on one unified dashboard.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.15)', color: ACCENT }}>C</span>
              <span className="prd-section-item__title">Clinical Hub — Patient Particulars & Triage</span>
              <span className="prd-section-item__desc">Logs patient demographics and an embedded rapid triage check-grid for acute states: Stable, Intubated/Ventilated, Bedridden, On Inotrope, Incubator (Neonate), Oxygen Dependent. Forces detailed inputs for Diagnosis, Clinical History (HPI, vitals, interventions), and explicit Transfer Justification.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.15)', color: ACCENT }}>W</span>
              <span className="prd-section-item__title">Weight Engine — Escort Manifest & Validation</span>
              <span className="prd-section-item__desc">Dynamically logs Name, Designation, IC Number, and exact Weight (kg) for primary and optional secondary medical escorts. Family escort toggle triggers active feedback ("No family escort requested. This saves flight weight allowance") — serving as a real-time decision-support guide. One-click "Verify & Generate PDF Form" compiles a locked, legally auditable flight manifest.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Unified dashboard combining logistics, clinical, and weight data in one submission</li>
            <li>Embedded patient triage check-grid covering 7 critical care states</li>
            <li>Dynamic weight tracking for patient, escorts, equipment, and family members</li>
            <li>Family escort toggle with active weight-saving feedback for dispatchers</li>
            <li>Multi-layer authorization chain: Referring Dr. → Hospital Verification → JKNS Approval</li>
            <li>One-click "Verify & Generate PDF Form" — instant print-ready flight manifest</li>
            <li>Immutable post-verification lock — prevents tampering after sign-off</li>
            <li>Statewide aggregated analytics database for fleet optimization</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Immutable audit trail — once verified, all clinical and weight indicators are locked for legal aircrews records</li>
              <li>NRIC and patient identifiers processed over secure cloud structures — no exposed local browser cache</li>
              <li>Strict cross-department authorization tokens (Verified By / Approved By) prevent unauthorized flight requests</li>
              <li>Compliant with PDPA standards and civil aviation safety data regulations</li>
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
                  <th>Legacy Manual Coordination</th>
                  <th style={{ color: ACCENT }}>MEDEVAC E-Request Portal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aviation Safety Check</td>
                  <td>Rough manual weight estimation</td>
                  <td>Automated point-of-entry exact weight tracking</td>
                </tr>
                <tr>
                  <td>Approval Tracking</td>
                  <td>Disconnected phone trees</td>
                  <td>Unified Hospital-to-JKNS verification pipeline</td>
                </tr>
                <tr>
                  <td>Triage Visibility</td>
                  <td>Verbal updates prone to errors</td>
                  <td>Digital check-grid for 7 critical care states</td>
                </tr>
                <tr>
                  <td>Manifest Production</td>
                  <td>Hand-drafted paper sign sheets</td>
                  <td>Instant secure print-ready PDF flight manifest</td>
                </tr>
                <tr>
                  <td>Data Archiving</td>
                  <td>Scattered, un-auditable local logs</td>
                  <td>Centralized statewide analytics database</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">✈️</span>
              <span className="prd-section-item__title">Zero-Error Cabin Weight Calculations</span>
              <span className="prd-section-item__desc">Capturing exact weights for patients, medical staff, and family escorts at submission prevents weight allowance overruns — protecting aircrew and patient safety on every flight.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚡</span>
              <span className="prd-section-item__title">Radical Reduction in Flight Activation Lag</span>
              <span className="prd-section-item__desc">Consolidating hospital verification and JKNS approval fields onto one dashboard cuts the bureaucratic chain — getting critically ill patients airborne significantly faster.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🗺️</span>
              <span className="prd-section-item__title">Statewide Fleet Optimization</span>
              <span className="prd-section-item__desc">Aggregating digital flight manifests provides JKNS leadership with monthly data to analyze high-volume transport corridors — optimizing helicopter and aircraft positioning across Sarawak.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Jabatan Kesihatan Negeri Sarawak (JKNS) & HTPN AI Knowledge-Sharing Network</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
