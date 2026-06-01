import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#22d3ee'
const DEMO_URL = 'https://script.google.com/macros/s/AKfycbxb8EVO-qnWQgSTETOmXMHAZQ_s9GSUR1HHVW6HbWPjN86LVOpx_uuiDqfrLpgwUBPFhQ/exec'

export default function ProjectMedMovePro() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>MedMove Pro — Interfacility Patient Transport Engine · HTPN HIO</title>
        <meta name="description" content="A centralized, multi-role dispatch and fleet management system for patient transport — replacing manual coordination with instant transport booking, automated driver assignment, and live performance metrics." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/medmove-pro" />
        <meta property="og:title" content="MedMove Pro — Patient Transport Engine · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/medmove-pro" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">MedMove Pro</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#21 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Logistics & Fleet Dispatch</span>
          <span className="detail-tag">Real-Time Queue Management</span>
          <span className="detail-tag">Operational Analytics</span>
        </div>

        <p className="detail-subtitle">
          A centralized, multi-role dispatch and fleet management system for patient transport — replacing undocumented manual coordination with instant transport booking, automated driver assignment, and live performance metrics.
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
              <span className="spec-card-new__label">Pillar</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">User Roles</span>
              <span className="spec-card-new__value">Staff · Dispatcher · Driver · Manager</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Access</span>
              <span className="spec-card-new__value">Web Portal · Mobile-Responsive Driver View</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Dispatch Mode</span>
              <span className="spec-card-new__value">Real-Time Push Routing</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Fleet Active</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Interfacility patient transfers and localized clinical transport are critical for acute continuity of care. Requesting, dispatching, and tracking non-emergency transit vehicles relied entirely on undocumented manual coordination over phone lines and physical logs.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Operational Blind Spots</span>
              <span className="prd-section-item__desc">Ward staff and administrators had no digital mechanism to track vehicle statuses, locations, or active driver task allocations — coordination was entirely invisible.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Transfer Inefficiencies</span>
              <span className="prd-section-item__desc">Fragmented documentation caused untracked vehicle delays, directly hampering the fluid movement of critical and routine patients between wards or specialized sister facilities.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">No Accountability or Audit Trail</span>
              <span className="prd-section-item__desc">Management lacked objective metrics to evaluate fleet utilization rates, average completion run-times, or driver productivity — leading to unequal resource distribution.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">FOUR-ROLE SYSTEM ARCHITECTURE</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(34,211,238,0.15)', color: ACCENT }}>S</span>
              <span className="prd-section-item__title">Staff View — Transport Request Interface</span>
              <span className="prd-section-item__desc">Streamlined booking terminal for clinical staff. Captures Patient Name, ID, Ward/Room, and Destination. Drop-down selectors for Transport Type (Walking, Wheelchair) and Priority Level (Routine vs. Critical Care), with an Infection Risk safety toggle for acute cases.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(34,211,238,0.15)', color: ACCENT }}>D</span>
              <span className="prd-section-item__title">Dispatcher View — Active Queue & Fleet Status</span>
              <span className="prd-section-item__desc">Synchronized master ledger showing real-time status of all transfers. Intelligent "Assign Driver" triggers push targets directly to available personnel. Live Fleet Status card stack visualizes driver availability and certification tier (e.g., Standard / Critical Care Certified).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(34,211,238,0.15)', color: ACCENT }}>V</span>
              <span className="prd-section-item__title">Driver View — Mobile Driver Portal</span>
              <span className="prd-section-item__desc">Clean, distraction-free, mobile-responsive portal for drivers in transit. Displays immediate task vectors with single-touch status controls allowing drivers to signal availability instantly.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(34,211,238,0.15)', color: ACCENT }}>M</span>
              <span className="prd-section-item__title">Manager View — Executive Analytics Console</span>
              <span className="prd-section-item__desc">Aggregates automated operational logs into visual data cards. Tracks Total Transports, real-time Completion Rates, and Fleet Utilization percentage bars to measure systemic efficiency and support data-backed decisions.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Instant web-based transport booking with Priority Level and Infection Risk flags</li>
            <li>Automated dispatcher-to-driver push routing based on availability and certification</li>
            <li>Live Fleet Status grid — driver availability, certification tier, and current task</li>
            <li>Mobile-optimized driver portal with single-touch status updates</li>
            <li>Executive analytics: Total Transports, Completion Rate, Fleet Utilization</li>
            <li>Role-based access — Staff, Dispatcher, Driver, Manager views are fully isolated</li>
            <li>Pre-configured sandbox testing mode for safe deployment flow validation</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Encrypted authentication gateway — valid credentials required to access clinical patient routes</li>
              <li>Role-based access controls — each user tier sees only their relevant portal view</li>
              <li>All clinical identifiers bound within secure session instances — no unsecured caching</li>
              <li>Compliant with public health data governance guidelines</li>
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
                  <th>Analog Manual Coordination</th>
                  <th style={{ color: ACCENT }}>MedMove Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Capture</td>
                  <td>Non-documented / untracked</td>
                  <td>Automated immutable digital logs</td>
                </tr>
                <tr>
                  <td>Booking Mechanism</td>
                  <td>Fragmented phone calls and paper notes</td>
                  <td>Centralized instant web-request terminal</td>
                </tr>
                <tr>
                  <td>Driver Assignment</td>
                  <td>Manual verbal coordination</td>
                  <td>Automated dispatcher-to-driver push routing</td>
                </tr>
                <tr>
                  <td>Fleet Visibility</td>
                  <td>Complete blind spots</td>
                  <td>Live Fleet Status tracking grid</td>
                </tr>
                <tr>
                  <td>Management Analysis</td>
                  <td>Anecdotal / guesswork</td>
                  <td>Live performance analytics dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🚗</span>
              <span className="prd-section-item__title">Maximized Fleet Utilization</span>
              <span className="prd-section-item__desc">Real-time visibility ensures drivers are deployed optimally based on proximity and certification tier — eliminating idle vehicle lag entirely.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🏥</span>
              <span className="prd-section-item__title">De-congesting Clinical Wards</span>
              <span className="prd-section-item__desc">Accelerating interfacility transfer response times allows acute ward beds to be vacated and cycled significantly faster — directly lowering patient congestion.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📋</span>
              <span className="prd-section-item__title">Comprehensive Audit Trail</span>
              <span className="prd-section-item__desc">Data-backed evidence to analyze peak transport demand periods, justifying future fleet expansions or workforce reallocations based on historical metrics.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Jabatan Kesihatan Negeri Sarawak</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
