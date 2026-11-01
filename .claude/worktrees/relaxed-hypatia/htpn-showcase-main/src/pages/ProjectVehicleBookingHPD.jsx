import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#0ea5e9'
const DEMO_URL = 'https://script.google.com/a/macros/moh.gov.my/s/AKfycbz2XcOtPdrR968h9qnzxkiDu6QePl_y5VAG3LfgbnfYaCUymDzfIkToanESmkbhxSkd/exec'

export default function ProjectVehicleBookingHPD() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Sistem Pengurusan &amp; Tempahan Kenderaan Jabatan — Hospital Vehicle Booking · HTPN HIO</title>
        <meta name="description" content="An official vehicle requisition and fleet dispatch web application for Hospital Port Dickson — standardised requisition forms, a two-tier approval pipeline, and WhatsApp dispatch triggers replacing physical vehicle booking books." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/vehicle-booking-hpd" />
        <meta property="og:title" content="Sistem Tempahan Kenderaan Jabatan — Vehicle Booking · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/vehicle-booking-hpd" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Sistem Pengurusan &amp; Tempahan Kenderaan Jabatan</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#36 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Hospital Fleet Logistics</span>
          <span className="detail-tag">Two-Tier Approval</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          An official vehicle requisition and fleet dispatch web application for hospital staff applicants, unit and department heads (Ketua Unit / Ketua Jabatan), and transport officers (Pegawai Kenderaan) — replacing physical vehicle requisition books with standardised forms, a tracked two-stage approval, and direct WhatsApp follow-up.
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
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Staff Requisition Form · Supervisor &amp; Transport Desk Approval</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / JavaScript + Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Real-time sync with a Google Sheet database</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Form Reference</span>
              <span className="spec-card-new__value">HPD/KEND/B01/2026</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Hospital Port Dickson</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A hospital vehicle is one of the few shared resources that moves — for patient referrals, administrative meetings, and official travel — and every trip needs a justification, a supervisor's support, and a transport officer's release. On paper, that chain runs on a physical requisition book carried from desk to desk.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Delays Chasing Signatures</span>
              <span className="prd-section-item__desc">A request had to physically reach the unit head and then the vehicle officer, so approval time depended on where the book was rather than how urgent the trip was.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">No Visibility of Request Status</span>
              <span className="prd-section-item__desc">Applicants had no way to see whether their booking was supported, approved, or still waiting — and often found out only on the day of travel.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Paperwork Without Accountability</span>
              <span className="prd-section-item__desc">Handwritten entries made passenger lists, destinations, and vehicle allocation hard to reconstruct, weakening accountability for official trips.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(14,165,233,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened through the hospital intranet portal or a web app link, with the user choosing a role mode (e.g. 1. Pemohon / Kakitangan). Nothing to install — it connects to the Google Sheet database and stamps live server date and time and an automatic form ID.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(14,165,233,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Staff enter trip and passenger details, pick their unit head from a registered dropdown, and sign digitally before submitting. Approvers filter by status, search by applicant name or destination (Cari nama pemohon, destinasi, ID…), and work through the pending queue using status pills — Disokong, Tidak Sokong, Lulus, Tidak Lulus, Menunggu.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(14,165,233,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Every decision updates the Google Sheet in real time, while WA Ketua and WA Pemohon buttons open a direct WhatsApp message to the approving supervisor or the applicant — giving full trip accountability and clear vehicle allocation.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">New Booking Application</span>
              <span className="prd-section-item__desc">Borang Permohonan Kenderaan Jabatan (HPD/KEND/B01/2026) capturing Tarikh Mohon, Nama Pemohon, Jawatan, Unit / Jabatan, WhatsApp number, Tujuan Permohonan (e.g. patient referral, meeting), supporting officer name and number, departure and return date and time, Destinasi, and Penumpang.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Approval &amp; Movement Queue</span>
              <span className="prd-section-item__desc">Filterable master register with a pending-count badge, showing No, Tarikh / ID, applicant and position, Ketua Jabatan, purpose and destination, travel dates, Status Ketua, Status Pegawai, and actions. Controls include live search, Segerak Senarai refresh, and status selectors for both approval stages.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Role &amp; Officer Maintenance Portal</span>
              <span className="prd-section-item__desc">Admin directory for the tiered personnel: Senarai Pegawai Penyokong (Ketua Unit / Ketua Jabatan) and Senarai Pegawai Pelulus (Pegawai Kenderaan), each with add triggers and per-record name, grade, unit, WhatsApp number, notes, AKTIF status, and Sunting / Padam actions.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Two-tier governance pipeline — first-stage support by the unit head, then final vehicle clearance by the transport desk officer, in strict sequence</li>
            <li>WhatsApp messaging bridge — WA Ketua and WA Pemohon open pre-formatted chats to speed up pending reviews without relying on email</li>
            <li>Automated requisition coding with sequential references (e.g. HPD-2026-0001) tied to the standard form template</li>
            <li>Live spreadsheet synchronisation with an on-demand cache refresh control</li>
            <li>Colour-coded state chips — green for Disokong and Lulus, yellow for Menunggu, red for Tidak Sokong and Tidak Lulus</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Official bookings require valid departmental justification and a complete passenger declaration</li>
              <li>A registered supporting officer must endorse each request digitally before the vehicle officer gives final release</li>
              <li>Access roles are strictly separated between applicants, unit supervisors, and transport desk administrators</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PAPER vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Vehicle Requisition Book</th>
                  <th style={{ color: ACCENT }}>Sistem Tempahan Kenderaan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Submitting a Request</td>
                  <td>Handwritten entry in a shared book</td>
                  <td>Standard digital form with auto-generated ID</td>
                </tr>
                <tr>
                  <td>Supervisor Endorsement</td>
                  <td>Physical signature, wherever the book is</td>
                  <td>Digital support from a registered officer list</td>
                </tr>
                <tr>
                  <td>Status Visibility</td>
                  <td>Applicant asks in person or by phone</td>
                  <td>Live status pills for both approval stages</td>
                </tr>
                <tr>
                  <td>Follow-Up</td>
                  <td>Chasing by phone or in person</td>
                  <td>One-tap WhatsApp to supervisor or applicant</td>
                </tr>
                <tr>
                  <td>Trip Records</td>
                  <td>Handwriting, hard to search or audit</td>
                  <td>Searchable register with full passenger detail</td>
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
              <span className="prd-section-item__title">Approval Time Decoupled from Location</span>
              <span className="prd-section-item__desc">When a request reaches the approver through the system and a WhatsApp prompt, how fast a trip is cleared no longer depends on who is physically holding the book.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">👁️</span>
              <span className="prd-section-item__title">Transparency for Applicants</span>
              <span className="prd-section-item__desc">Both approval stages are visible to the requester, so staff know before travel day whether a vehicle has been allocated.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧾</span>
              <span className="prd-section-item__title">Accountability for Official Travel</span>
              <span className="prd-section-item__desc">Each trip carries its justification, passenger list, supporting officer, and releasing officer in one searchable record.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Pengangkutan HPD (Hospital Transportation Unit) · Hospital Port Dickson, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
