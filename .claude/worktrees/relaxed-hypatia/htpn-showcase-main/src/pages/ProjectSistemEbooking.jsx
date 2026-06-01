import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#06b6d4'
const DEMO_URL = 'https://script.google.com/macros/s/AKfycbxuoOce1H9ElFxzu1MvyXcSnn7mFT1XY9m8_c0CL4SzfC9NuRqUdeK8ysi1DswM-Jtwig/exec'

export default function ProjectSistemEbooking() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Sistem eBooking — Institutional Room Scheduler · HTPN HIO</title>
        <meta name="description" content="A centralized self-service room booking and scheduling platform for Hospital Pulau Pinang — replacing manual logbooks with live availability tracking, instant conflict checks, and administrative scheduling controls." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/sistem-ebooking" />
        <meta property="og:title" content="Sistem eBooking — Room Scheduler · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/sistem-ebooking" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Sistem eBooking</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#27 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Facility Logistics</span>
          <span className="detail-tag">Real-Time Calendar Sync</span>
          <span className="detail-tag">Multi-Room Allocation</span>
        </div>

        <p className="detail-subtitle">
          A centralized, self-service room booking and scheduling platform built for Hospital Pulau Pinang — replacing manual logbooks and physical booking keys with live availability tracking, instant conflict checks, and administrative scheduling controls.
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
              <span className="spec-card-new__label">Rooms Managed</span>
              <span className="spec-card-new__value">7 Venues — Seminar, Auditorium, Labs, Meeting</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Calendar Views</span>
              <span className="spec-card-new__value">Month · Week · Day</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Double-Booking</span>
              <span className="spec-card-new__value">Zero — Algorithm blocks overlaps</span>
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
            Hospitals are high-velocity training and meeting environments where seminar rooms, lecture halls, and meeting spaces are shared across dozens of departments daily. At Hospital Pulau Pinang, managing these bookings relied entirely on isolated paper logbooks, whiteboard schedules, and phone requests routed through separate room custodians.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Frequent Double Bookings</span>
              <span className="prd-section-item__desc">Without a single real-time source of truth, clinical departments regularly cross-booked critical venues — disrupting CME sessions, delaying administrative meetings, and causing scheduling confusion.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Complete Lack of Transparency</span>
              <span className="prd-section-item__desc">General hospital personnel could not independently verify if a room was free. Clinicians had to physically walk to administrative counters or make speculative phone calls just to check availability.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Heavy Administrative Overhead</span>
              <span className="prd-section-item__desc">Room administrators spent significant working hours answering status queries, manually updating paper ledgers, and refereeing scheduling disputes between teams.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THREE-LAYER SYSTEM ARCHITECTURE</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(6,182,212,0.15)', color: ACCENT }}>S</span>
              <span className="prd-section-item__title">Staff Dashboard — Self-Service Hub</span>
              <span className="prd-section-item__desc">Clean, touch-friendly role-based grid: Request Room (Mohon Bilik), Check Status (Semak Status), My Bookings (Rekod Tempahan Saya), User Manual. Live "Status Bilik Hari Ini" color-coded bar shows real-time room availability for the current date at a glance.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(6,182,212,0.15)', color: ACCENT }}>C</span>
              <span className="prd-section-item__title">Interactive Calendar Interface</span>
              <span className="prd-section-item__desc">Full graphical calendar supporting Month, Week, and Day views. Dynamic room filter (Tapis Mengikut Bilik) isolates schedules per venue with color-coded badges across all 7 rooms: Bilik Mesyuarat Utama, Bilik Latihan Komputer, Auditorium, Ruang Foyer, Bilik Mesyuarat Matron, Bilik Seminar ACC, and Bilik Test. Staff view existing time blocks before requesting — conflicts eliminated at point of entry.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(6,182,212,0.15)', color: ACCENT }}>A</span>
              <span className="prd-section-item__title">Admin Panel — Scheduling Command Centre</span>
              <span className="prd-section-item__desc">Locked behind "Login Pentadbir" institutional gateway. Gives room managers a robust monitoring system to review pending requests, approve or decline slots by priority, track usage history, and prevent conflicting overlaps across the entire room portfolio.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Live color-coded room availability dashboard for the current date — no phone calls needed</li>
            <li>Interactive calendar with Month / Week / Day views and per-room filtering</li>
            <li>Platform algorithm blocks double-booking at point of entry — zero overlap conflicts</li>
            <li>IC-based status tracking — staff check booking lifecycle via their own IC number</li>
            <li>Admin approval queue — room managers review, approve, or decline with full audit trail</li>
            <li>7 bookable venues with colour-coded badges for instant visual identification</li>
            <li>Fully self-service — no need to contact room custodians for availability checks</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>IC-linked audit trail — every booking connected to verifiable personnel records</li>
              <li>Admin console sealed behind "Login Pentadbir" — prevents unauthorized room overrides</li>
              <li>Centralized database eliminates rogue spreadsheet registries across departments</li>
              <li>All reservations routed through a standardized, secure database managed by the IT Department</li>
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
                  <th>Analog Paper Logbooks</th>
                  <th style={{ color: ACCENT }}>Sistem eBooking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Availability Check</td>
                  <td>In-person counter or phone query</td>
                  <td>Instant on-demand digital calendar sync</td>
                </tr>
                <tr>
                  <td>Double-Booking Risk</td>
                  <td>High — prone to human oversight</td>
                  <td>Zero — algorithm blocks overlaps</td>
                </tr>
                <tr>
                  <td>Staff Autonomy</td>
                  <td>Dependent on localized room custodians</td>
                  <td>Fully self-service discovery and booking</td>
                </tr>
                <tr>
                  <td>Approval Lifecycle</td>
                  <td>Verbal confirmation or physical signature</td>
                  <td>Digital queue processing by room managers</td>
                </tr>
                <tr>
                  <td>Resource Visibility</td>
                  <td>Hidden across disparate department logs</td>
                  <td>Centralized facility-level master view</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🚫</span>
              <span className="prd-section-item__title">Absolute Elimination of Double Bookings</span>
              <span className="prd-section-item__desc">The platform's core scheduling logic rejects overlapping timestamp entries for the same room — completely removing the logistical friction that disrupts CME sessions and hospital leadership briefings.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Drastic Reduction in Admin Friction</span>
              <span className="prd-section-item__desc">Shifting room status checks to a self-service model relieves IT and administrative staff from routine queries — reclaiming hundreds of operational man-hours per year.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🏢</span>
              <span className="prd-section-item__title">Maximized Asset Utilization</span>
              <span className="prd-section-item__desc">Campus-wide visibility of unutilized seminar rooms allows the hospital to distribute training sessions more efficiently — ensuring modern infrastructure (computer labs, auditorium) is utilized to full capacity.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Jabatan Teknologi Maklumat (IT Department) · Hospital Pulau Pinang</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
