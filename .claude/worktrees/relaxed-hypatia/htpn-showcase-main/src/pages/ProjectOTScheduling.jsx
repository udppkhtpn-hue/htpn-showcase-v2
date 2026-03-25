import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = '/ot-scheduling.html'
const ACCENT = '#0ea5a0'

export default function ProjectOTScheduling() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">OT Scheduling System</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#05 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">OT</span>
          <span className="detail-tag">Booking</span>
          <span className="detail-tag">Surgery</span>
          <span className="detail-tag">Elective</span>
          <span className="detail-tag">Emergency</span>
        </div>

        <p className="detail-subtitle">
          Digital Operating Theatre slot booking system covering 9 OT rooms across 2 buildings at HTPN — accessible online by all departments for elective and emergency surgical planning.
        </p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Coverage</span>
              <span className="spec-card-new__value">9 OT rooms · 2 buildings</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Vanilla JS + HTML</span>
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
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">OT ROOM CONFIGURATION</h2>
          <div className="prd-two-col">
            <div className="prd-block-inner">
              <h3 className="prd-block-inner__heading">Main Building</h3>
              <ul className="detail-features">
                <li>OT 1 — General Surgery / Urology</li>
                <li>OT 2 — Orthopaedics</li>
                <li>OT 3 — Cardiothoracic / Neurosurgery</li>
              </ul>
            </div>
            <div className="prd-block-inner">
              <h3 className="prd-block-inner__heading">Women &amp; Children's Centre</h3>
              <ul className="detail-features">
                <li>OT 1–2 — Obstetrics &amp; Gynaecology</li>
                <li>OT 3 — Gynaecology / Oncology</li>
                <li>OT 4–5 — Paediatric Surgery</li>
                <li>OT 6 — Neonatal / Emergency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">SYSTEM MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Calendar</span>
              <span className="prd-section-item__desc">Month/Week/Day views filterable by building and case type, colour-coded status indicators, print-enabled</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">My Bookings</span>
              <span className="prd-section-item__desc">Doctor-specific submission history with status tracking for each case</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">History</span>
              <span className="prd-section-item__desc">Full searchable audit trail of all bookings with export to CSV/PDF</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Admin (Master Only)</span>
              <span className="prd-section-item__desc">Pending queue approvals, room management, and user administration</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Conflict detection preventing double-booking across all rooms</li>
            <li>Role-based access — Master admin and Doctor roles with smart routing</li>
            <li>Elective and Emergency case type support</li>
            <li>Case status tracking: Pending → Confirmed / Cancelled</li>
            <li>Full responsive design — mobile to desktop</li>
            <li>Single HTML file — no dependencies, fully browser-based</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Dr Fairis, Dr Nida · Anaesthesiology, Hospital Tengku Permaisuri Norashikin</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
